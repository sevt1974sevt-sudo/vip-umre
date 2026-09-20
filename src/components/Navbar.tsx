import React from "react";
import { Compass, Sparkles, Car, Users, MessageSquareText, Shield, CalendarDays } from "lucide-react";

export type NavTabType = "pricing" | "itinerary" | "consultant" | "standards";

interface NavbarProps {
  activeTab: NavTabType;
  onTabChange: (tab: NavTabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange("pricing")}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-300 p-0.5 shadow-md">
              <div className="w-full h-full bg-stone-950 rounded-[14px] flex items-center justify-center">
                <Compass className="w-6 h-6 text-amber-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-serif font-bold tracking-wide text-white">
                  BUTİK UMRE REHBERİ
                </h1>
                <span className="hidden sm:inline-block text-[11px] font-serif text-amber-300/90 dir-rtl">
                  المُرْشِدُ الخَاص
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-sans tracking-tight">
                6 Kişilik Butik Gruplar • Aile Sıcaklığında Rehberlik • 10 Gün (60.000 TL)
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1.5 bg-stone-850/80 p-1.5 rounded-2xl border border-stone-800">
            <button
              onClick={() => onTabChange("pricing")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "pricing"
                  ? "bg-stone-950 text-amber-300 shadow-xs border border-amber-400/30"
                  : "text-stone-300 hover:text-white hover:bg-stone-800/60"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>10 Günlük Paket & Fiyat (60.000 TL)</span>
            </button>

            <button
              onClick={() => onTabChange("itinerary")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "itinerary"
                  ? "bg-stone-950 text-amber-300 shadow-xs border border-amber-400/30"
                  : "text-stone-300 hover:text-white hover:bg-stone-800/60"
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5 text-amber-400" />
              <span>2 Günlük Mekke Butik Rotası</span>
            </button>

            <button
              onClick={() => onTabChange("consultant")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "consultant"
                  ? "bg-stone-950 text-amber-300 shadow-xs border border-amber-400/30"
                  : "text-stone-300 hover:text-white hover:bg-stone-800/60"
              }`}
            >
              <MessageSquareText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Canlı Danışman & Görsel Analiz</span>
            </button>

            <button
              onClick={() => onTabChange("standards")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "standards"
                  ? "bg-stone-950 text-amber-300 shadow-xs border border-amber-400/30"
                  : "text-stone-300 hover:text-white hover:bg-stone-800/60"
              }`}
            >
              <Car className="w-3.5 h-3.5 text-stone-400" />
              <span>Huzurlu Seyahat İlkeleri</span>
            </button>
          </nav>

          {/* Right quick stats / action */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 text-xs bg-amber-500/15 border border-amber-500/30 px-3 py-1.5 rounded-xl text-amber-200">
              <span className="font-semibold text-white">60.000 TL</span>
              <span className="text-stone-400 text-[11px]">/ 10 Gün</span>
            </div>

            <button
              onClick={() => onTabChange("consultant")}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold text-xs rounded-xl shadow-sm transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-stone-950" />
              <span className="hidden sm:inline">Danışmana Danış</span>
              <span className="sm:hidden">Danışman</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="flex md:hidden border-t border-stone-800/80 py-2 gap-1 overflow-x-auto">
          <button
            onClick={() => onTabChange("pricing")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
              activeTab === "pricing" ? "bg-stone-800 text-amber-300" : "text-stone-400"
            }`}
          >
            10 Gün & 60.000 TL Paket
          </button>
          <button
            onClick={() => onTabChange("itinerary")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
              activeTab === "itinerary" ? "bg-stone-800 text-amber-300" : "text-stone-400"
            }`}
          >
            Mekke 2 Günlük Rota
          </button>
          <button
            onClick={() => onTabChange("consultant")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
              activeTab === "consultant" ? "bg-stone-800 text-amber-300" : "text-stone-400"
            }`}
          >
            Danışman & Görsel Analiz
          </button>
          <button
            onClick={() => onTabChange("standards")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
              activeTab === "standards" ? "bg-stone-800 text-amber-300" : "text-stone-400"
            }`}
          >
            Huzurlu Seyahat İlkeleri
          </button>
        </div>
      </div>
    </header>
  );
};

