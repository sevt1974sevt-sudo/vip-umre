import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `Sen, standart kalabalık turlardan sıkılanlar için maksimum 6 kişilik özel ve butik umre turları düzenleyen deneyimli bir Turizm Danışmanı ve Arapça rehberisin.

Misafirlerine kalabalıktan uzak, manevi derinliği yüksek, huşu içinde, birebir ilgiyle ve lojistik açıdan konforlu bir deneyim sunmayı hedeflersin.

Amacın, sana verilen verileri (metin veya görsel) kullanarak bu 6 kişilik özel grup için en uygun gezi rotalarını, ziyaret edilecek mekanların tarihi ve dini önemini ve lojistik bilgilerini açıklamaktır.

Kurallar:

1. Profesyonel, samimi, manevi hassasiyetlere uygun ve güven verici bir dil kullan.

2. Planlamalar maksimum 6 kişilik özel araçla, kalabalıktan uzak ve esnek şekilde hareket edilmesine uygun olsun.

3. Yerlerin mümkün olduğunda orijinal Arapça isimlerini ve anlamlarını belirt.

4. Tur süresi 10 gündür. Paket fiyatı kişi başı 60.000 TL'dir.

5. Misafir görsel gönderirse önce görseli dikkatli şekilde tanımla, ardından mekanın umre programına nasıl dahil edilebileceğini açıkla.

6. Tıbbi teşhis veya tedavi önerisi verme.

7. Vize, bilet ve resmi seyahat işlemlerinde yetkili kurum ve acentelerin güncel şartlarının kontrol edilmesi gerektiğini belirt.

8. Bilmediğin bir bilgiyi kesin gerçekmiş gibi sunma. Emin olmadığın tarihi veya dini bilgileri açıkça belirt.`;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Sadece POST isteği kabul edilir."
    });
  }

  try {
    const { message, image, history = [] } = req.body || {};

    if (!message && !image) {
      return res.status(400).json({
        error: "Lütfen bir mesaj veya görsel gönderiniz."
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "GEMINI_API_KEY Vercel ortamında tanımlı değil."
      });
    }

    const ai = new GoogleGenAI({
      apiKey
    });

    const parts: any[] = [];

    if (image?.data && image?.mimeType) {
      parts.push({
        inlineData: {
          data: image.data,
          mimeType: image.mimeType
        }
      });
    }

    let contextPrefix = "";

    if (Array.isArray(history) && history.length > 0) {
      contextPrefix =
        "Önceki Danışmanlık Konuşma Geçmişi:\n" +
        history
          .slice(-4)
          .map(
            (h: any) =>
              `${h.role === "user" ? "Misafir" : "Danışman"}: ${h.text}`
          )
          .join("\n") +
        "\n\nYeni İstek / Soru:\n";
    }

    parts.push({
      text:
        (
          contextPrefix +
          (message ||
            "Lütfen bu görseli butik umre konseptimiz doğrultusunda analiz ediniz.")
        ).trim()
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: {
        parts
      },
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7
      }
    });

    const reply =
      response.text ||
      "Danışmanımız şu anda yanıt oluşturamadı. Lütfen tekrar deneyiniz.";

    return res.status(200).json({
      reply
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);

    return res.status(500).json({
      error: "Danışmanlık yanıtı alınırken bir aksaklık meydana geldi.",
      details: error?.message || String(error)
    });
  }
}