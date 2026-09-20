import React from "react";
import { VIP_STANDARTS } from "../data/mekkeItinerary";
import { LegalNotice } from "./LegalNotice";
import { 
  Users, 
  Car, 
  BookOpen, 
  SunMedium, 
  Coffee, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

export const VipStandardsView: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-5 h-5 text-amber-700" />,
    Car: <Car className="w-5 h-5 text-emerald-700" />,
    BookOpen: <BookOpen className="w-5 h-5 text-amber-700" />,
    SunMedium: <SunMedium className="w-5 h-5 text-emerald-700" />,
    Coffee: <Coffee className="w-5 h-5 text-amber-700" />,
    Clock: <Clock className="w-5 h-5 text-emerald-700" />,
  };

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-800">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Butik ve Aile Sıcaklığında Seyahat İlkeleri</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-wide">
            6 Kişilik Özel Grubumuza Huzurlu Hizmet Anlayışımız
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
            Kitle turizminin telaşından, kalabalık otobüs beklemelerinden ve yüzeysel anlatımlardan uzak; her bir adımı manevi derinlik, edep, aile sıcaklığı ve sükunetle örülmüş müstesna bir ziyaret tecrübesi.
          </p>
        </div>
      </div>

      {/* Grid of 6 Standards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {VIP_STANDARTS.map((std, i) => (
          <div
            key={i}
            className="bg-white border border-stone-200 rounded-2xl p-6 shadow-2xs hover:border-amber-400/70 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center mb-4">
                {iconMap[std.icon] || <CheckCircle2 className="w-5 h-5 text-emerald-700" />}
              </div>
              <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
                {std.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {std.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Birebir İlgi & Huşu Taahhüdü</span>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison: 50-Person Bus vs 6-Person VIP Vito */}
      <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
        <div className="p-5 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
          <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <Car className="w-4 h-4 text-emerald-800" />
            <span>Huzur Karşılaştırması: 50 Kişilik Kalabalık Tur vs 6 Kişilik Butik Özel Araç</span>
          </h3>
        </div>

        <div className="p-5 overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-stone-200 text-stone-500 uppercase text-[11px]">
                <th className="p-3 w-1/4">Kriter</th>
                <th className="p-3 w-3/8 text-stone-500 bg-stone-50">Standart 50 Kişilik Otobüs Turu</th>
                <th className="p-3 w-3/8 text-emerald-900 bg-emerald-50/60 font-bold">6 Kişilik Özel Butik Yolculuğumuz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Dar Sokaklara Erişim</td>
                <td className="p-3 bg-stone-50 text-stone-500">
                  Bi'r-i Tuvâ, Şi'b vadisi, Gazzâ gibi tarihi bölgelere otobüs giremez; 1-2 km yürünür veya uzaktan geçilir.
                </td>
                <td className="p-3 bg-emerald-50/40 text-emerald-950 font-medium">
                  Özel aracımız kapının hemen önüne kadar yanaşır; yürüme mesafesi ve yorgunluk sıfıra yakındır.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Zaman ve Hareket Hızı</td>
                <td className="p-3 bg-stone-50 text-stone-500">
                  50 kişinin toplanması, inip binmesi her durakta en az 30-40 dakika zaman kaybına yol açar.
                </td>
                <td className="p-3 bg-emerald-50/40 text-emerald-950 font-medium">
                  6 kişi aile sıcaklığında anında hareket eder; bekleme olmaz, huşu ve tefekkür korunur.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Güneş ve Sıcak Saatleri</td>
                <td className="p-3 bg-stone-50 text-stone-500">
                  Genelde 10:00 - 15:00 arası en yakıcı saatlerde gezilir; misafirler aşırı yorulur.
                </td>
                <td className="p-3 bg-emerald-50/40 text-emerald-950 font-medium">
                  Öğle sıcağında (12:00-16:30) Harem ve otel istirahati; sabah serinliği ve ikindi sonrası ziyaret.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Siyer ve Kaynak Derinliği</td>
                <td className="p-3 bg-stone-50 text-stone-500">
                  Hoparlörden genel ve yüzeysel bilgiler verilir, soru sormak güçtür.
                </td>
                <td className="p-3 bg-emerald-50/40 text-emerald-950 font-medium">
                  Klasik Arapça kaynaklardan (el-Ezrakî, İbn Hişâm) orijinal metinler, kitabe okumaları ve fısıltı rehber kulaklığı.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Official & Medical Safeguard */}
      <LegalNotice />
    </div>
  );
};
