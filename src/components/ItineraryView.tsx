import React, { useState } from "react";
import { MEKKE_2_GUNLUK_VIP_ROTA } from "../data/mekkeItinerary";
import { ZiyaretStop } from "../types";
import { StopCard } from "./StopCard";
import { StopDetailModal } from "./StopDetailModal";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Sun, 
  Car, 
  Table, 
  LayoutGrid, 
  Printer, 
  Sparkles,
  Info
} from "lucide-react";

interface ItineraryViewProps {
  onAskAiWithContext: (prompt: string) => void;
}

export const ItineraryView: React.FC<ItineraryViewProps> = ({ onAskAiWithContext }) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  const [selectedStop, setSelectedStop] = useState<ZiyaretStop | null>(null);

  const currentPlan = MEKKE_2_GUNLUK_VIP_ROTA.find((p) => p.dayNumber === activeDay) || MEKKE_2_GUNLUK_VIP_ROTA[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Day Selector & View Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-stone-200/90 rounded-2xl p-4 shadow-xs">
        {/* Day buttons */}
        <div className="flex items-center gap-2">
          {MEKKE_2_GUNLUK_VIP_ROTA.map((plan) => (
            <button
              key={plan.dayNumber}
              onClick={() => setActiveDay(plan.dayNumber)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
                activeDay === plan.dayNumber
                  ? "bg-stone-900 text-amber-300 shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200/70"
              }`}
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{plan.dayNumber}. Gün Programı</span>
            </button>
          ))}
        </div>

        {/* View toggles & Print */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setViewMode("cards")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                viewMode === "cards" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
              }`}
              title="Kart Görünümü"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Kartlar</span>
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                viewMode === "table" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
              }`}
              title="Saatlik Akış Tablosu"
            >
              <Table className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Huzurlu Akış Tablosu</span>
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold transition-colors"
            title="Programı Yazdır / PDF Al"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Yazdır</span>
          </button>
        </div>
      </div>

      {/* Day Overview Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-emerald-950 text-white rounded-2xl p-6 sm:p-7 shadow-sm border border-stone-800">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Maksimum 6 Kişilik Butik ve Huzurlu Grup</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100">
            {currentPlan.title}
          </h2>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
            {currentPlan.summary}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-xs border-t border-stone-800/80">
            <div className="flex items-center gap-2 text-stone-300 bg-stone-800/60 px-3 py-2 rounded-xl">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="block text-stone-400 text-[10px] uppercase">Hareket Saati</span>
                <span className="font-semibold text-stone-200">{currentPlan.recommendedStartTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-stone-300 bg-stone-800/60 px-3 py-2 rounded-xl">
              <Sun className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="block text-stone-400 text-[10px] uppercase">Öğle Sıcağı & Harem İstirahati</span>
                <span className="font-semibold text-stone-200">{currentPlan.haremRestTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-stone-300 bg-stone-800/60 px-3 py-2 rounded-xl">
              <Car className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="block text-stone-400 text-[10px] uppercase">Araç & Güzergah</span>
                <span className="font-semibold text-stone-200">Mercedes Vito VIP (~{currentPlan.totalDistanceKm} km)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Cards View vs Table View */}
      {viewMode === "cards" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentPlan.stops.map((stop, index) => (
            <StopCard
              key={stop.id}
              stop={stop}
              index={index}
              onSelect={(s) => setSelectedStop(s)}
            />
          ))}
        </div>
      ) : (
        /* Okunaklı VIP Günlük Program Tablosu (Kural 5'e tam riayet) */
        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-sm">
              <Table className="w-4 h-4 text-amber-700" />
              <span>{currentPlan.dayNumber}. Gün Saatlik Akış ve Lojistik Tablosu</span>
            </div>
            <span className="text-xs text-stone-600">6 Kişilik Özel Vito Planlaması</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100 text-stone-700 font-semibold border-b border-stone-200 uppercase text-[11px] tracking-wider">
                  <th className="p-3.5 w-28">Saat Aralığı</th>
                  <th className="p-3.5 min-w-[200px]">Ziyaret Mekanı & Arapça İsim</th>
                  <th className="p-3.5 min-w-[220px]">Tarihi / Dini Önemi (Siyer)</th>
                  <th className="p-3.5 min-w-[200px]">6 Kişilik VIP Vito Lojistiği</th>
                  <th className="p-3.5 min-w-[150px]">Sıcak & Kalabalık Önlemi</th>
                  <th className="p-3.5 w-20 text-center">İncele</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200/70 text-stone-700">
                {currentPlan.stops.map((stop, i) => (
                  <tr key={stop.id} className="hover:bg-stone-50/80 transition-colors">
                    <td className="p-3.5 align-top font-semibold text-stone-900 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-amber-900">
                        <Clock className="w-3.5 h-3.5 text-amber-700" />
                        <span>{stop.timeSlot}</span>
                      </div>
                      <span className="text-[10px] text-stone-600 block mt-0.5">{stop.durationMinutes} dk</span>
                    </td>

                    <td className="p-3.5 align-top">
                      <div className="font-serif font-bold text-stone-900 text-sm">{stop.nameTr}</div>
                      <div className="font-serif text-amber-800 text-base dir-rtl py-0.5 select-all font-normal">
                        {stop.nameAr}
                      </div>
                      <div className="text-[11px] text-stone-600 italic mt-0.5">{stop.meaningTr}</div>
                      <div className="text-[10px] font-mono text-emerald-800 mt-1 font-semibold">
                        Ref: {stop.historicalSiyarSource.split(";")[0]}
                      </div>
                    </td>

                    <td className="p-3.5 align-top leading-relaxed text-stone-600">
                      {stop.importance}
                    </td>

                    <td className="p-3.5 align-top leading-relaxed bg-stone-50/50 text-stone-700">
                      <div className="flex items-start gap-1.5 text-xs text-stone-800">
                        <Car className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{stop.vitoLogistics}</span>
                      </div>
                    </td>

                    <td className="p-3.5 align-top text-xs text-stone-600 leading-relaxed">
                      {stop.crowdAvoidanceStrategy}
                    </td>

                    <td className="p-3.5 align-top text-center">
                      <button
                        onClick={() => setSelectedStop(stop)}
                        className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-900 hover:text-white rounded-lg text-xs font-semibold text-stone-700 transition-colors"
                      >
                        Detay
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Midday Heat Management Advisory */}
      <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <Sun className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-serif font-bold text-stone-900">
              VIP Sıcak ve İbadet Yönetimi Protokolü
            </h4>
            <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
              12:00 ile 16:30 arasındaki yakıcı sıcaklarda programımıza ara verilir. Misafirlerimiz klimalı otellerinde istirahat eder, öğle namazını Harem-i Şerif'te eda ederek ikindi serinliğinde dinç bir şekilde rotaya devam eder.
            </p>
          </div>
        </div>

        <button
          onClick={() => onAskAiWithContext(`${activeDay}. gün programının zamanlamasını veya duraklarını 6 kişilik grubumuz için revize edebilir misiniz?`)}
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-amber-300 rounded-xl text-xs font-semibold transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Danışmandan Özelleştirme İste</span>
        </button>
      </div>

      {/* Stop Detail Modal */}
      <StopDetailModal
        stop={selectedStop}
        onClose={() => setSelectedStop(null)}
        onAskAi={(stop) => {
          onAskAiWithContext(
            `Kıymetli Danışmanım, '${stop.nameTr}' (${stop.nameAr}) hakkında klasik siyer kitaplarında (el-Ezrakî, İbn Hişâm vb.) yer alan daha derinlemesine rivayetleri ve 6 kişilik VIP grubumuz için dikkat edilmesi gereken manevi ve lojistik nüansları paylaşır mısınız?`
          );
        }}
      />
    </div>
  );
};
