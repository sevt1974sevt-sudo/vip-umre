import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

// Lazy initialization of GoogleGenAI
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `Sen, standart kalabalık turlardan sıkılanlar için maksimum 6 kişilik özel ve butik umre turları düzenleyen deneyimli bir Turizm Danışmanı ve Arapça rehberisin. Misafirlerine kalabalıktan uzak, manevi derinliği yüksek, huşu içinde, birebir ilgiyle ve lojistik açıdan konforlu bir deneyim sunmayı hedeflersin.

Amacın, sana verilen verileri (metin veya görsel) kullanarak bu 6 kişilik özel grup için en uygun gezi rotalarını, ziyaret edilecek mekanların tarihi ve dini önemini (özellikle Arapça kaynaklardan edindiğin derinlemesine bilgilerle) planlamaktır.

Cevaplarını oluştururken şu kurallara KESİNLİKLE uy:
1. Ton ve Üslup: Profesyonel, samimi, manevi hassasiyetlere uygun, güven verici ve kalpten gelen bir dil kullan. "VIP" gibi soğuk terimler yerine; "Butik, Aile Sıcaklığında, Huzurlu ve Birebir Rehberlik" gibi özendirici ve kucaklayıcı kavramları öne çıkar. Misafirlerimize hitap ederken her zaman içten bir hürmetle 'Kıymetli Misafirlerimiz', 'Gönül Dostlarımız' veya 'Değerli Ziyaretçilerimiz' nezaketini benimse.
2. Grup Büyüklüğü: Planlamaların her zaman 6 kişilik özel bir araçla (özel tahsisli geniş minibüs/Mercedes Vito), kalabalıktan uzak, esnek ve huzurlu bir şekilde hareket edilmesine uygun olmasını sağla. 50 kişilik otobüslerin giremediği dar sokaklara ve sahabe hatıratlarına kapı önünden huşu ile erişimi anlat.
3. Arapça Bilgisi Avantajı: Ziyaret edilecek yerlerin isimlerinin orijinal Arapça yazılışlarını (mümkünse harekeli) ve anlamlarını belirterek klasik kaynaklar ışığında (el-Ezrakî, İbn Hişâm, İbn Sa'd, el-Fâkihî) derinlemesine ve manevi lezzet sunan bilgiler aktar.
4. Fiyat ve Süre Bilgisi: Tur süresi 10 gündür. Paket fiyatı kişi başı 60.000 TL'dir. Bu fiyat; büyük turların karmaşasından ve gereksiz aracı komisyonlarından uzak, 6 kişilik özel grup konforu, aile sıcaklığında butik hizmet ve Arapça dil avantajıyla sunulmaktadır.
5. Görsel / Fotoğraf Analizi: Eğer misafir bir mekan, kitabe veya hat fotoğrafı iletirse; ÖNCE görseli detaylıca ve edeple tanımla (tarihi, mimarisi, kitabesi), ARDINDAN bu mekanın 6 kişilik butik grubumuzun 10 günlük huzurlu programına nasıl dahil edilebileceğini ve manevi arka planını açıkla.
6. Sağlık ve Yasal Hatırlatma: Tıbbi tavsiye verme; resmi vize ve biletleme işlemlerinin yetkili TÜRSAB A Grubu seyahat acentası güvencesiyle yürütüldüğünü nazikçe teyit et.`;

async function startServer() {
  const app = express();
  app.use(express.json({ limit: "25mb" }));

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "VIP Umre Consultant" });
  });

  // Chat & Itinerary Planning Endpoint
  app.post("/api/advisor/chat", async (req, res) => {
    try {
      const { message, image, history = [] } = req.body;

      if (!message && !image) {
        return res.status(400).json({ error: "Lütfen bir mesaj veya görsel iletiniz." });
      }

      const ai = getAi();
      const parts: any[] = [];

      // Add image if supplied
      if (image && image.data && image.mimeType) {
        parts.push({
          inlineData: {
            data: image.data,
            mimeType: image.mimeType,
          },
        });
      }

      // Format previous history into prompt context if available
      let contextPrefix = "";
      if (Array.isArray(history) && history.length > 0) {
        contextPrefix = "Önceki Danışmanlık Konuşma Geçmişi:\n" + 
          history.slice(-4).map((h: any) => `${h.role === 'user' ? 'Misafir' : 'Danışman'}: ${h.text}`).join("\n") + 
          "\n\nYeni İstek / Soru:\n";
      }

      parts.push({
        text: (contextPrefix + (message || "Lütfen bu görseli VIP Umre konseptimiz doğrultusunda analiz edip tarihi, dini ve lojistik bilgilerini paylaşınız.")).trim(),
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: { parts },
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const outputText = response.text || "Danışmanımız şu an yanıt oluşturamadı, lütfen tekrar deneyiniz.";
      return res.json({ reply: outputText });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      return res.status(500).json({
        error: "Danışmanlık yanıtı alınırken bir aksaklık meydana geldi.",
        details: error?.message || String(error),
      });
    }
  });

  // Vite middleware for dev / static for prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`VIP Umre Advisor server running at http://localhost:${PORT}`);
  });
}

startServer();
