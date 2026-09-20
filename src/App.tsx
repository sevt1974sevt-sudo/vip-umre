import React, { useState } from "react";
import { Navbar, NavTabType } from "./components/Navbar";
import { PricingPackageView } from "./components/PricingPackageView";
import { ItineraryView } from "./components/ItineraryView";
import { AiConsultantView } from "./components/AiConsultantView";
import { VipStandardsView } from "./components/VipStandardsView";
import { LegalNotice } from "./components/LegalNotice";
import { 
  Compass, 
  MapPin, 
  ShieldCheck, 
  Car, 
  Users, 
  BookOpen, 
  Sparkles,
  PhoneCall
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTabType>("pricing");
  const [activePromptForAi, setActivePromptForAi] = useState<string>("");

  const handleAskAiWithContext = (prompt: string) => {
    setActivePromptForAi(prompt);
    setActiveTab("consultant");
    // Scroll smoothly to chat
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Protocol Ticker */}
      <div className="bg-stone-950 text-stone-300 text-[11px] py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-stone-200">10 Günlük Butik VIP Umre Paketi:</span>
            <span>Maksimum 6 Kişilik Grup • Kişi Başı 60.000 TL • Özel Mercedes Vito & Arapça Siyer Rehberi</span>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span className="hidden md:inline">Kaynaklar: el-Ezrakî, İbn Hişâm, İbn Sa'd Siyerleri</span>
            <span className="text-amber-400 font-serif font-semibold">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "pricing" && (
          <PricingPackageView onAskAiWithContext={handleAskAiWithContext} />
        )}

        {activeTab === "itinerary" && (
          <ItineraryView onAskAiWithContext={handleAskAiWithContext} />
        )}

        {activeTab === "consultant" && (
          <AiConsultantView
            initialPrompt={activePromptForAi}
            onClearInitialPrompt={() => setActivePromptForAi("")}
          />
        )}

        {activeTab === "standards" && (
          <VipStandardsView />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800 py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-500/30">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-sm tracking-wide">
                  VIP UMRE DANIŞMANLIĞI & ARAPÇA REHBERLİK
                </h4>
                <p className="text-[11px] text-stone-400">
                  10 Gün • 6 Kişilik Özel Grup • Kişi Başı 60.000 TL Optimize Butik Konsept
                </p>
              </div>
            </div>

            <div className="text-center md:text-right font-serif text-amber-200/90 text-sm dir-rtl select-all">
              رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ
              <span className="block text-[10px] text-stone-400 font-sans mt-0.5 dir-ltr">
                "Rabbimiz! Bizden kabul buyur; şüphesiz Sen her şeyi hakkıyla işiten ve bilensin." (Bakara, 127)
              </span>
            </div>
          </div>

          <div className="text-[11px] text-stone-400 leading-relaxed text-center sm:text-left space-y-1">
            <p>
              Bu sistem, butik VIP Umre heyetleri (maksimum 6 kişi) için 10 günlük manevi rota, siyer araştırmaları ve şeffaf fiyatlandırma optimizasyonu aracıdır.
            </p>
            <p>
              Yasal Uyarı: Tıbbi bir tavsiye veya resmi vize/biletleme danışmanlığı verilmemektedir. Tüm resmi vize ve seyahat sözleşmeleri yetkili A Grubu seyahat acentaları üzerinden gerçekleştirilmelidir.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

