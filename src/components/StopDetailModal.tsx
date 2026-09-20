import React from "react";
import { ZiyaretStop } from "../types";
import { X, Clock, MapPin, BookOpen, Compass, Shield, Sparkles, MessageSquare } from "lucide-react";

interface StopDetailModalProps {
  stop: ZiyaretStop | null;
  onClose: () => void;
  onAskAi: (stop: ZiyaretStop) => void;
}

export const StopDetailModal: React.FC<StopDetailModalProps> = ({ stop, onClose, onAskAi }) => {
  if (!stop) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
      <div 
        className="bg-white border border-stone-200 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-stone-900 text-stone-100 p-6 flex items-start justify-between z-10 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{stop.timeSlot}</span>
              <span className="text-stone-500">•</span>
              <span>{stop.durationMinutes} Dakika Tefekkür</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
              {stop.nameTr}
            </h3>
            <p className="text-2xl sm:text-3xl font-serif text-amber-200 mt-2 font-normal dir-rtl text-right sm:text-left select-all">
              {stop.nameAr}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-2 rounded-lg hover:bg-stone-800 transition-colors"
            title="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 text-stone-800">
          {/* Meaning Banner */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4">
            <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-700" />
              Arapça Anlamı ve Lugat İzahı
            </div>
            <p className="text-sm font-medium text-amber-950">
              {stop.meaningTr}
            </p>
          </div>

          {/* Historical Siyar Significance */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-emerald-700" />
              Tarihi ve Dini Önemi (Siyer-i Nebî)
            </div>
            <p className="text-sm leading-relaxed text-stone-700">
              {stop.importance}
            </p>
          </div>

          {/* Classical Arabic Excerpt & Source */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between text-xs text-stone-500">
              <span className="font-semibold text-stone-700">Klasik Arapça Kaynak Rivayeti</span>
              <span className="font-mono text-emerald-700 font-semibold">{stop.historicalSiyarSource}</span>
            </div>
            <div className="p-3 bg-white border border-stone-200/70 rounded-lg text-right dir-rtl font-serif text-lg leading-loose text-stone-900 select-all">
              {stop.siyarExcerpt}
            </div>
          </div>

          {/* Vito VIP Logistics */}
          <div className="border-t border-stone-200 pt-4">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-amber-700" />
              6 Kişilik VIP Vito Lojistiği & Büyük Otobüs Farkı
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700 bg-stone-100/70 p-3.5 rounded-xl border border-stone-200">
              {stop.vitoLogistics}
            </p>
          </div>

          {/* Crowd Strategy & Comfort Features */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3.5">
              <div className="text-xs font-bold text-emerald-950 flex items-center gap-1.5 mb-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-700" />
                Kalabalık ve Sıcak Yönetimi
              </div>
              <p className="text-xs leading-relaxed text-emerald-900">
                {stop.crowdAvoidanceStrategy}
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5">
              <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Özel İkram ve Konfor
              </div>
              <ul className="text-xs space-y-1 text-stone-700">
                {stop.comfortFeatures.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {stop.tags.map((tag, i) => (
              <span key={i} className="text-[11px] bg-stone-200 text-stone-700 px-2 py-0.5 rounded-md font-medium">
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => {
              onClose();
              onAskAi(stop);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
            <span>Bu Mekan Hakkında Danışmana Danış</span>
          </button>
        </div>
      </div>
    </div>
  );
};
