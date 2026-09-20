import React from "react";
import { ZiyaretStop } from "../types";
import { Clock, MapPin, ChevronRight, ShieldCheck, BookOpen } from "lucide-react";

interface StopCardProps {
  stop: ZiyaretStop;
  index: number;
  onSelect: (stop: ZiyaretStop) => void;
}

export const StopCard: React.FC<StopCardProps> = ({ stop, index, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(stop)}
      className="group relative bg-white border border-stone-200/90 hover:border-amber-400/80 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Top bar with time and step index */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200/60 rounded-full text-xs font-semibold">
            <Clock className="w-3 h-3 text-amber-700" />
            <span>{stop.timeSlot}</span>
          </div>

          <span className="text-xs font-serif font-bold text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-full">
            Durak {index + 1}
          </span>
        </div>

        {/* Turkish Name and Arabic Calligraphy */}
        <div className="space-y-1 mb-3">
          <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
            {stop.nameTr}
          </h3>
          <div className="text-xl sm:text-2xl font-serif text-amber-800 dir-rtl text-right sm:text-left select-all py-1">
            {stop.nameAr}
          </div>
          <p className="text-xs text-stone-500 italic">
            {stop.meaningTr}
          </p>
        </div>

        {/* Importance snippet */}
        <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed mb-4">
          {stop.importance}
        </p>
      </div>

      {/* Vito Access Badge & Classical Source */}
      <div className="pt-3 border-t border-stone-100 space-y-2">
        <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50/70 px-2.5 py-1.5 rounded-lg border border-emerald-100">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-emerald-700" />
          <span className="truncate font-medium">VIP Vito ile doğrudan kapı erişimi</span>
        </div>

        <div className="flex items-center justify-between text-xs text-stone-600 pt-1">
          <div className="flex items-center gap-1 truncate max-w-[220px]">
            <BookOpen className="w-3 h-3 text-stone-400 shrink-0" />
            <span className="truncate font-mono text-[11px] text-stone-600">{stop.historicalSiyarSource.split(";")[0]}</span>
          </div>
          <span className="inline-flex items-center gap-0.5 text-amber-800 font-semibold group-hover:translate-x-0.5 transition-transform text-xs">
            Detaylar <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
