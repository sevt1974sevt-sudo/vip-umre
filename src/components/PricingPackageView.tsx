import React, { useState } from "react";
import { VIP_10_DAY_PACKAGE } from "../data/mekkeItinerary";
import { LegalNotice } from "./LegalNotice";
import {
  CalendarDays,
  Coins,
  Users,
  Car,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Building2,
  BookOpen,
  Coffee,
  ShieldCheck,
  Compass,
  FileText
} from "lucide-react";

interface PricingPackageViewProps {
  onAskAiWithContext: (prompt: string) => void;
}

export const PricingPackageView: React.FC<PricingPackageViewProps> = ({ onAskAiWithContext }) => {
  const [copied, setCopied] = useState(false);
  const [activeTabDay, setActiveTabDay] = useState<number>(1);

  const pkg = VIP_10_DAY_PACKAGE;

  const handleCopyPromotionalText = () => {
    const text = `🕋 ${pkg.promotionalText.title}\n\n${pkg.promotionalText.executiveSummary}\n\nÖNE ÇIKAN AYRICALIKLAR:\n${pkg.promotionalText.keyPoints.map(p => `• ${p}`).join("\n")}\n\nPAKET DETAYLARI:\n• Tur Süresi: ${pkg.durationDays} Gün (6 Gece Mekke + 4 Gece Medine)\n• Grup Büyüklüğü: Maksimum 6 Kişilik Özel Aile / Dost Grubu\n• Paket Fiyatı: Kişi Başı ${pkg.pricePerPersonTL.toLocaleString("tr-TR")} TL\n• Lojistik: Özel Tahsisli Geniş Minibüs (Mercedes Vito)\n• Rehberlik: Yetkin Arapça Mütehassısı & Siyer Araştırmacısı ile Birebir İlgi\n\n${pkg.promotionalText.callToAction}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-10">
      {/* Hero Header & Value Proposition Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-md">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>10 Günlük Butik ve Huzurlu Umre Paketi</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
            6 Kişilik Özel Gruba Aile Sıcaklığında Butik Konsept • 60.000 TL
          </h2>

          <p className="text-sm sm:text-base text-stone-300 font-normal leading-relaxed">
            Büyük kitle turlarının 50 kişilik otobüs gecikmelerinden, aracı acenta komisyonlarından ve hantal genel merkez giderlerinden arındırılmış; doğrudan yerinde sağlanan <strong>özel konforlu araç rahatlığı</strong>, <strong>Arapça siyer rehberliğiyle birebir ilgi</strong> ve <strong>10 günlük sükunet dolu manevi ritim</strong>.
          </p>

          {/* 4 Pillars Highlight */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {pkg.priceHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-stone-850/80 backdrop-blur-xs border border-stone-750/80 rounded-2xl p-4 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xl sm:text-2xl font-serif font-bold text-amber-300 block">
                    {item.metric}
                  </span>
                  <span className="text-xs font-semibold text-white block mt-0.5">
                    {item.label}
                  </span>
                </div>
                <span className="text-[11px] text-stone-400 mt-2 block">
                  {item.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle decorative background watermark */}
        <div className="absolute right-4 -bottom-10 opacity-5 pointer-events-none font-serif text-[180px] select-none">
          ٦٠٠٠٠
        </div>
      </div>

      {/* Strategic Cost Optimization & Pricing Analysis */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg mb-2">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>Hantal Maliyetlerden Arındırılmış Akılcı Model</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Neden 60.000 TL? Büyük Tur Masrafları vs Butik Hizmet Optimizasyonu
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
              Bu paket suni bir lüks hevesi değil; gereksiz aracı komisyonlarının ve 50 kişilik boş otobüs operasyon yükünün sıfırlanıp, doğrudan 6 kişilik grubunuzun huzuruna ve ibadet vaktine dönüştürülmüş halidir.
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-center md:text-right shrink-0">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block">
              10 Günlük Net Paket
            </span>
            <span className="text-2xl font-serif font-bold text-stone-950">
              60.000 TL <span className="text-xs font-normal text-stone-600">/ kişi</span>
            </span>
            <span className="text-[11px] text-emerald-700 block font-medium mt-0.5">
              6 kişilik grup: 360.000 TL
            </span>
          </div>
        </div>

        {/* Cost Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-stone-200 text-stone-500 uppercase text-[11px]">
                <th className="p-3 w-1/4">Maliyet & Hizmet Kalemi</th>
                <th className="p-3 w-3/8 bg-stone-50 text-stone-500">Standart 50 Kişilik Kitle Turları</th>
                <th className="p-3 w-3/8 bg-emerald-50/70 text-emerald-950 font-bold">
                  6 Kişilik Butik Modelimiz (60.000 TL)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              {pkg.costOptimizationTable.map((item, idx) => (
                <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-3.5 font-semibold text-stone-900 align-top">
                    {item.category}
                    <span className="block text-[11px] font-normal text-stone-600 mt-1">
                      {item.financialAndSpiritualValue}
                    </span>
                  </td>
                  <td className="p-3.5 bg-stone-50/60 text-stone-500 align-top leading-relaxed">
                    {item.massTourPractice}
                  </td>
                  <td className="p-3.5 bg-emerald-50/40 text-emerald-950 font-medium align-top leading-relaxed">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{item.vipBoutiqueAdvantage}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 10-Day Master Itinerary Breakdown */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg mb-1">
              <CalendarDays className="w-3.5 h-3.5" />
              <span>10 Günlük Gün-Gün Master Seyahat Çizelgesi</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Mekke-i Mükerreme (6 Gün) & Medine-i Münevvere (4 Gün) Akışı
            </h3>
          </div>

          <button
            onClick={() => onAskAiWithContext("10 günlük 60.000 TL VIP paketimizin günlük saatlendirilmiş detaylı seyahat takvimini incelemek ve grubumuzun tercihlerine göre uyarlamak istiyorum.")}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-amber-300 rounded-xl text-xs font-semibold transition-all shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Planı Danışmanla Özelleştir</span>
          </button>
        </div>

        {/* 10 Days Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pkg.tenDayOverview.map((item) => (
            <div
              key={item.day}
              className={`border rounded-2xl p-5 transition-all flex flex-col justify-between ${
                item.city === "Mekke-i Mükerreme"
                  ? "border-amber-200 bg-gradient-to-br from-white to-amber-50/20"
                  : item.city === "Medine-i Münevvere"
                  ? "border-emerald-200 bg-gradient-to-br from-white to-emerald-50/20"
                  : "border-stone-200 bg-stone-50"
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-stone-900 text-amber-300">
                    {item.day}. Gün
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                    item.city === "Mekke-i Mükerreme"
                      ? "bg-amber-100 text-amber-900"
                      : item.city === "Medine-i Münevvere"
                      ? "bg-emerald-100 text-emerald-900"
                      : "bg-stone-200 text-stone-800"
                  }`}>
                    {item.city}
                  </span>
                </div>

                <h4 className="font-serif font-bold text-stone-900 text-base">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  {item.spiritualFocus}
                </p>

                <div className="pt-2 border-t border-stone-200/70 text-[11px] text-stone-600 flex items-start gap-1.5">
                  <Car className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
                  <span><strong>Özel Araç Kolaylığı:</strong> {item.logisticsDetail}</span>
                </div>
              </div>

              <div className="mt-3 pt-2 text-[11px] text-stone-500 flex items-center justify-between">
                <span>{item.includedMeal}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inclusions & Exclusions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Included Services */}
        <div className="bg-white border border-emerald-200 rounded-3xl p-6 sm:p-7 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-emerald-900">
            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
            <h3 className="font-serif font-bold text-lg">
              Pakete Dahil Olan Butik Hizmetler
            </h3>
          </div>
          <p className="text-xs text-stone-600">
            Kişi başı 60.000 TL'lik sözleşmeye dahil, gizli maliyet içermeyen garantili butik hizmetler:
          </p>
          <ul className="space-y-2.5">
            {pkg.includedServices.map((srv, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-stone-700 leading-relaxed">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{srv}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Excluded Services */}
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-7 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-stone-800">
            <XCircle className="w-5 h-5 text-stone-500" />
            <h3 className="font-serif font-bold text-lg">
              Paket Harici Kalemler & Esneklik
            </h3>
          </div>
          <p className="text-xs text-stone-600">
            Misafirlerimizin şahsi tercihlerine, mil programlarına ve resmi prosedürlere bırakılan kalemler:
          </p>
          <ul className="space-y-2.5">
            {pkg.excludedServices.map((srv, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-stone-700 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5" />
                <span>{srv}</span>
              </li>
            ))}
          </ul>

          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 mt-6">
            <h4 className="text-xs font-bold text-stone-900 mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Acenta ve Sözleşme Güvencesi</span>
            </h4>
            <p className="text-[11px] text-stone-600 leading-relaxed">
              Tüm resmi vize işlemleri ve sözleşmeler, T.C. Kültür ve Turizm Bakanlığı ile TÜRSAB A Grubu yetkili acentalar koordinasyonunda yürütülür.
            </p>
          </div>
        </div>
      </div>

      {/* Ready-to-Copy Proposal / Promotional Text */}
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-800">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 mb-1">
              <FileText className="w-3.5 h-3.5" />
              <span>Heyet ve Aileler İçin Tanıtım & Teklif Metni</span>
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
              {pkg.promotionalText.title}
            </h3>
          </div>

          <button
            onClick={handleCopyPromotionalText}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-xl text-xs font-bold transition-all shadow-sm shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-stone-950" />
                <span>Teklif Metni Kopyalandı!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-stone-950" />
                <span>Teklif Metnini Kopyala</span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
          {pkg.promotionalText.executiveSummary}
        </p>

        <div className="bg-stone-950/70 border border-stone-800 rounded-2xl p-4 sm:p-5 space-y-2">
          <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block">
            Stratejik Değer Özetleri:
          </span>
          <ul className="space-y-1.5 text-xs text-stone-300">
            {pkg.promotionalText.keyPoints.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-stone-400">
          <span>{pkg.promotionalText.callToAction}</span>
          <button
            onClick={() => onAskAiWithContext("60.000 TL'lik 10 günlük paketimiz için 6 kişilik ailemize özel bir tanıtım broşürü ve teklif mektubu hazırlar mısınız?")}
            className="text-amber-300 hover:text-amber-200 font-semibold underline underline-offset-4"
          >
            Danışmandan Kişiye Özel Teklif İste
          </button>
        </div>
      </div>

      {/* Official & Medical Safeguard */}
      <LegalNotice />
    </div>
  );
};
