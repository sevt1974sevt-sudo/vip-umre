import React, { useState, useRef } from "react";
import { ChatMessage } from "../types";
import { SAMPLE_PROMPTS } from "../data/mekkeItinerary";
import { LegalNotice } from "./LegalNotice";
import { 
  Send, 
  UploadCloud, 
  Image as ImageIcon, 
  Trash2, 
  Sparkles, 
  Bot, 
  User, 
  Loader2, 
  Copy, 
  Check, 
  BookOpen, 
  Car,
  AlertCircle
} from "lucide-react";

interface AiConsultantViewProps {
  initialPrompt?: string;
  onClearInitialPrompt?: () => void;
}

// Curated sample sacred images that the user can click to test instant visual analysis
const SAMPLE_SACRED_IMAGES = [
  {
    title: "Bi'r-i Tuvâ (بِئْرُ طُوًى)",
    description: "Hz. Peygamber'in (s.a.v.) fetihte yıkandığı tarihi kuyu yapısı",
    // Clean SVG Data URI representing historical well
    dataUri: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
        <rect width="400" height="300" fill="#f4ebd0"/>
        <rect y="200" width="400" height="100" fill="#d9c59a"/>
        <circle cx="200" cy="170" r="70" fill="#8c6d46" stroke="#5a4327" stroke-width="6"/>
        <circle cx="200" cy="170" r="50" fill="#1b4d3e"/>
        <rect x="140" y="80" width="12" height="90" fill="#5a4327"/>
        <rect x="248" y="80" width="12" height="90" fill="#5a4327"/>
        <rect x="135" y="75" width="130" height="12" fill="#5a4327"/>
        <path d="M190,87 L210,87 L200,120 Z" fill="#b08d55"/>
        <text x="200" y="45" font-family="serif" font-size="22" fill="#3c2f21" text-anchor="middle" font-weight="bold">بِئْرُ طُوًى - Ceravel</text>
        <text x="200" y="270" font-family="sans-serif" font-size="13" fill="#4a3b2c" text-anchor="middle">Mekke-i Mükerreme / Tarihi Tuvâ Kuyusu</text>
      </svg>
    `),
    prompt: "Bu tarihi kuyu görselini analiz eder misiniz? Burası Bi'r-i Tuvâ mıdır? Efendimiz'in buradaki sünneti ve 6 kişilik VIP grubumuzla burayı nasıl ziyaret edeceğimizin lojistiği nedir?",
  },
  {
    title: "Cennetü'l-Muallâ (مَقْبَرَةُ الْمُعَلَّاة)",
    description: "Hz. Hatice (r.anhâ) Vâlidemiz'in kabristanı ve Hacûn mevkii",
    dataUri: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
        <rect width="400" height="300" fill="#eae5d9"/>
        <path d="M0,180 Q100,120 200,150 T400,140 L400,300 L0,300 Z" fill="#c4baa5"/>
        <rect x="120" y="160" width="160" height="60" rx="6" fill="#fcfbf7" stroke="#948b78" stroke-width="3"/>
        <text x="200" y="195" font-family="serif" font-size="18" fill="#1b4d3e" text-anchor="middle" font-weight="bold">مَقْبَرَةُ الْمُعَلَّاة - الحَجُون</text>
        <text x="200" y="212" font-family="sans-serif" font-size="11" fill="#716753" text-anchor="middle">Hz. Hatice (r.anhâ) Vâlidemiz</text>
        <text x="200" y="45" font-family="serif" font-size="20" fill="#2d2922" text-anchor="middle">Cennetü'l-Muallâ Tarihi Haziresi</text>
      </svg>
    `),
    prompt: "Fotoğraftaki Cennetü'l-Muallâ haziresini VIP tur konseptimiz açısından analiz ediniz. Hz. Hatice Vâlidemiz'in kabri ve ikindi vakti ziyaret lojistiğini detaylandırınız.",
  },
  {
    title: "Cebel-i Sevr (جَبَلُ ثَوْرٍ)",
    description: "Hicret sırrı ve sadakat zirvesi eteği",
    dataUri: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
        <rect width="400" height="300" fill="#f7f0e3"/>
        <polygon points="200,60 50,260 350,260" fill="#9e8b75" stroke="#71604d" stroke-width="4"/>
        <polygon points="200,60 130,260 270,260" fill="#b8a691"/>
        <ellipse cx="205" cy="110" rx="14" ry="9" fill="#2d2218"/>
        <text x="200" y="40" font-family="serif" font-size="20" fill="#382f25" text-anchor="middle" font-weight="bold">جَبَلُ ثَوْرٍ - غَارُ ثَوْرٍ</text>
        <text x="200" y="285" font-family="sans-serif" font-size="12" fill="#524435" text-anchor="middle">Tevbe 40: «İkincinin İkisi»</text>
      </svg>
    `),
    prompt: "Sevr Dağı görselini analiz edip, 6 kişilik heyetimiz için dağa tırmanmadan eteğinde gölgelikte yapılacak hicret tefekkürü programını anlatır mısınız?",
  },
];

export const AiConsultantView: React.FC<AiConsultantViewProps> = ({
  initialPrompt,
  onClearInitialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "advisor",
      content: `Es-selâmü aleyküm ve rahmetullâhi ve berekâtüh kıymetli gönül dostlarımız,

Ben, standart kalabalık turların telaşından uzak, maksimum 6 kişilik özel grubunuz için hizmet veren Butik Umre Danışmanınız ve Arapça Rehberinizim.

Yolculuğumuz **10 Gün** olarak planlanmış olup, paket fiyatımız **kişi başı 60.000 TL**'dir. Bu fiyat; büyük turların karmaşasından ve gereksiz aracı komisyonlarından tamamen arındırılmış; 6 kişilik özel grubumuza tahsisli konforlu aracımız, aile sıcaklığında birebir ilgimiz ve klasik Arapça siyer kaynaklarına (el-Ezrakî, İbn Hişâm, İbn Sa'd) dayanan yerel dil avantajımızla sunulmaktadır.

Aşağıdaki başlıklardan dilediğinizi seçebilir, ziyaret etmek istediğiniz bir mekanın veya kitabenin fotoğrafını yükleyerek analiz ettirebilir ya da grubunuza özel herhangi bir manevi/lojistik soruyu içtenlikle iletebilirsiniz.`,
      timestamp: "Şimdi",
    },
  ]);

  const [inputPrompt, setInputPrompt] = useState<string>(initialPrompt || "");
  const [selectedImage, setSelectedImage] = useState<{
    data: string;
    mimeType: string;
    previewUrl: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [errorText, setErrorText] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // If initial prompt is passed from other tabs, update input
  React.useEffect(() => {
    if (initialPrompt) {
      setInputPrompt(initialPrompt);
      if (onClearInitialPrompt) onClearInitialPrompt();
    }
  }, [initialPrompt, onClearInitialPrompt]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);
// Handle local image upload
const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    setErrorText("Lütfen geçerli bir resim dosyası seçiniz (JPEG, PNG, WebP).");
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    const result = reader.result as string;
    const img = new Image();

    img.onload = () => {
      const MAX_WIDTH = 1280;
      const scale = Math.min(1, MAX_WIDTH / img.width);

      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        setErrorText("Görsel hazırlanamadı. Lütfen tekrar deneyiniz.");
        return;
      }

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.75);
      const base64Data = compressedDataUrl.split(",")[1];

      setSelectedImage({
        data: base64Data,
        mimeType: "image/jpeg",
        previewUrl: compressedDataUrl,
      });

      setErrorText(null);
    };

    img.onerror = () => {
      setErrorText("Görsel okunamadı. Lütfen başka bir fotoğraf deneyiniz.");
    };

    img.src = result;
  };

  reader.onerror = () => {
    setErrorText("Görsel yüklenemedi. Lütfen tekrar deneyiniz.");
  };

  reader.readAsDataURL(file);
};
  // Select pre-curated sample image
  const handleSelectSampleImage = (sample: typeof SAMPLE_SACRED_IMAGES[0]) => {
    // Extract base64 or keep data
    const previewUrl = sample.dataUri;
    // convert svg to base64
    const base64 = btoa(sample.dataUri.replace("data:image/svg+xml;utf8,", ""));
    setSelectedImage({
      data: base64,
      mimeType: "image/svg+xml",
      previewUrl: previewUrl,
    });
    setInputPrompt(sample.prompt);
    setErrorText(null);
  };

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = (customPrompt || inputPrompt).trim();
    if (!textToSend && !selectedImage) return;

    setErrorText(null);
    setIsLoading(true);

    const userMsgId = Date.now().toString();
    const newUserMsg: ChatMessage = {
      id: userMsgId,
      role: "user",
      content: textToSend || "(Görsel Analiz Talebi)",
      image: selectedImage || undefined,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputPrompt("");
    const imagePayload = selectedImage ? { data: selectedImage.data, mimeType: selectedImage.mimeType } : undefined;
    setSelectedImage(null);

    try {
      const response = await fetch("/api/advisor/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          image: imagePayload,
          history: messages.map((m) => ({
            role: m.role === "user" ? "user" : "model",
            text: m.content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Sunucudan yanıt alınamadı.");
      }

      const advisorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "advisor",
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, advisorMsg]);
    } catch (err: any) {
      console.error(err);
      setErrorText(err?.message || "Danışmanlık yanıtı alınırken bir sorun oluştu.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Advisor Header Card */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Arapça Rehber & Butik Tur Danışmanı</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-wide text-white">
              6 Kişilik Butik Umre Danışmanlığı & Görsel Analiz
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
              Özel grubunuz için Mekke ve Medine'deki az bilinen mekanları, klasik Arapça siyer kaynakları (el-Ezrakî, İbn Hişâm, İbn Sa'd) ışığında analiz eder; aile sıcaklığında huzurlu bir akış planlar.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-amber-500/20 border border-amber-500/40 text-amber-300 px-3 py-1.5 rounded-xl flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              10 Gün • 60.000 TL Butik Paket
            </span>
            <span className="bg-stone-800/80 border border-stone-700 text-stone-300 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-emerald-400" />
              Maksimum 6 Kişilik Özel Araç
            </span>
            <span className="bg-stone-800/80 border border-stone-700 text-stone-300 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              Arapça Kaynaklı Siyer
            </span>
          </div>
        </div>
      </div>

      {/* Suggested Quick Prompts */}
      <div className="space-y-2">
        <div className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Hızlı Örnek İstişare Başlıkları (Tek Tıkla Sor)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SAMPLE_PROMPTS.map((sp, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(sp.prompt)}
              className="text-left bg-white hover:bg-amber-50/50 border border-stone-200/90 hover:border-amber-300 rounded-xl p-3 transition-all text-xs flex flex-col justify-between group shadow-2xs"
            >
              <div className="font-semibold text-stone-900 group-hover:text-emerald-900 mb-1">
                {sp.title}
              </div>
              <div className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
                {sp.prompt}
              </div>
              <span className="text-[10px] font-semibold text-amber-800 mt-2 inline-block bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60 w-fit">
                {sp.badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Sample Sacred Photos for Instant Visual Analysis (Rule 5: Visual Analysis) */}
      <div className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5 text-emerald-700" />
            Örnek Kutsal Mekan Fotoğrafı Seç (Hemen Analiz Ettir)
          </div>
          <span className="text-[11px] text-stone-500">veya kendi fotoğrafınızı yükleyin</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {SAMPLE_SACRED_IMAGES.map((img, i) => (
            <div
              key={i}
              onClick={() => handleSelectSampleImage(img)}
              className="border border-stone-200 hover:border-emerald-600 rounded-xl p-2.5 bg-stone-50 hover:bg-emerald-50/30 cursor-pointer transition-all flex items-center gap-3 group"
            >
              <img
                src={img.dataUri}
                alt={img.title}
                className="w-16 h-12 object-cover rounded-lg border border-stone-200 shadow-2xs shrink-0"
              />
              <div className="overflow-hidden">
                <div className="font-serif font-bold text-xs text-stone-900 group-hover:text-emerald-900 truncate">
                  {img.title}
                </div>
                <div className="text-[10px] text-stone-500 truncate">
                  {img.description}
                </div>
                <span className="text-[10px] text-emerald-800 font-semibold mt-0.5 block">
                  Analiz Et →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Messages Container */}
      <div className="bg-white border border-stone-200 rounded-2xl shadow-xs overflow-hidden flex flex-col min-h-[500px]">
        {/* Chat History */}
        <div className="p-4 sm:p-6 space-y-6 flex-1 overflow-y-auto max-h-[600px] bg-stone-50/40">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 sm:gap-4 ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role === "advisor" && (
                <div className="w-8 h-8 rounded-xl bg-stone-900 text-amber-300 flex items-center justify-center shrink-0 shadow-2xs mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 sm:p-5 shadow-2xs ${
                  msg.role === "user"
                    ? "bg-emerald-800 text-white rounded-tr-xs"
                    : "bg-white border border-stone-200 text-stone-800 rounded-tl-xs"
                }`}
              >
                {/* Uploaded Image Preview if attached to message */}
                {msg.image && (
                  <div className="mb-3 rounded-xl overflow-hidden border border-emerald-700/50">
                    <img
                      src={msg.image.previewUrl}
                      alt="Görsel Analizi"
                      className="max-h-60 w-auto rounded-lg object-contain bg-stone-900"
                    />
                    <div className="text-[10px] bg-emerald-900/60 p-1.5 text-emerald-200 flex items-center gap-1">
                      <ImageIcon className="w-3 h-3" />
                      Görsel Danışmana Gönderildi
                    </div>
                  </div>
                )}

                {/* Content formatted with typography */}
                <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line font-normal">
                  {msg.content}
                </div>

                {/* Footer time & copy */}
                <div className="flex items-center justify-between gap-4 mt-3 pt-2 border-t border-stone-100 text-[10px] text-stone-600">
                  <span>{msg.timestamp}</span>
                  {msg.role === "advisor" && (
                    <button
                      onClick={() => copyToClipboard(msg.content, msg.id)}
                      className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-900 transition-colors"
                      title="Yanıtı Kopyala"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Kopyalandı</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Metni Kopyala</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-xl bg-emerald-950 text-white flex items-center justify-center shrink-0 shadow-2xs mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 items-center text-stone-500 text-xs py-2">
              <div className="w-8 h-8 rounded-xl bg-stone-900 text-amber-300 flex items-center justify-center shrink-0">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-white border border-stone-200 p-3.5 rounded-2xl text-xs text-stone-700 shadow-2xs flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span>Danışmanımız klasik Arapça kaynakları ve 6 kişilik VIP lojistiğini inceliyor...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Selected image preview badge before sending */}
        {selectedImage && (
          <div className="px-4 py-2 bg-amber-50/80 border-t border-amber-200 flex items-center justify-between text-xs text-amber-900">
            <div className="flex items-center gap-2">
              <img
                src={selectedImage.previewUrl}
                alt="Seçili Görsel"
                className="w-10 h-8 object-cover rounded-md border border-amber-300"
              />
              <span className="font-semibold">Fotoğraf eklendi; mesajınızla birlikte analiz edilecektir.</span>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="text-stone-500 hover:text-red-700 p-1"
              title="Fotoğrafı Kaldır"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Error notification if any */}
        {errorText && (
          <div className="px-4 py-2 bg-red-50 text-red-800 text-xs flex items-center gap-2 border-t border-red-200">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{errorText}</span>
          </div>
        )}

        {/* Chat Input Bar */}
        <div className="p-4 bg-white border-t border-stone-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-2.5 rounded-xl border border-stone-300 hover:border-emerald-600 text-stone-600 hover:text-emerald-800 hover:bg-stone-50 transition-colors"
              title="Mekan / Kitabe Fotoğrafı Yükle"
            >
              <UploadCloud className="w-5 h-5" />
            </button>

            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Örn: 6 kişilik grubumuz için Medine az bilinen mescidler rotası hazırla veya fotoğraf sor..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-stone-300 focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 text-xs sm:text-sm outline-hidden text-stone-900 placeholder:text-stone-600"
              disabled={isLoading}
            />

            <button
              type="submit"
              disabled={isLoading || (!inputPrompt.trim() && !selectedImage)}
              className="px-4 py-2.5 bg-stone-900 hover:bg-emerald-900 disabled:opacity-40 text-amber-300 font-semibold rounded-xl text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow-xs"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Gönder</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
          <p className="text-[11px] text-stone-600 mt-2 text-center sm:text-left">
            İpucu: Bir mescid, kitabe veya vadi fotoğrafı yüklediğinizde danışmanımız önce görseli tanımlar, ardından VIP rotanıza uyarlar.
          </p>
        </div>
      </div>

      {/* Mandatory Regulatory & Medical Disclaimer Card (Rule 6) */}
      <LegalNotice />
    </div>
  );
};
