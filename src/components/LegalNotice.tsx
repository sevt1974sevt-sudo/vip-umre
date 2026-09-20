import React from "react";
import { ShieldCheck, AlertCircle } from "lucide-react";

export const LegalNotice: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="bg-amber-50/80 border border-amber-200/80 rounded-lg p-3 text-xs text-amber-900/90 flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-amber-950">Yasal & Tıbbi Bildirim:</span> Bu sistem manevi seyahat danışmanlığı ve siyer coğrafyası rehberliği sağlar; tıbbi tavsiye veya resmi vize/biletleme hizmeti içermez. Resmi işlemler yetkili acentalar üzerinden yürütülmelidir.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-100/90 border border-stone-200 rounded-2xl p-6 text-sm text-stone-700 shadow-sm">
      <div className="flex items-center gap-3 mb-3 text-stone-900 font-semibold">
        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-base font-serif font-bold text-stone-900">Resmi Yetki, Yasal Uyarı ve Sağlık Güvencesi</h4>
          <p className="text-xs text-stone-500 font-normal">Hac, Umre ve Ziyaret Programları Güvenlik Esasları</p>
        </div>
      </div>
      <div className="space-y-2 text-xs leading-relaxed text-stone-600 pl-11">
        <p>
          <strong className="text-stone-800">1. Danışmanlık ve Rehberlik Kapsamı:</strong> İşbu VIP Umre program taslağı ve yapay zeka destekli rehberlik hizmeti, münhasıran 6 kişilik butik gruplar için manevi derinlik, siyer coğrafyası araştırmaları ve VIP lojistik planlama danışmanlığı mahiyetindedir.
        </p>
        <p>
          <strong className="text-stone-800">2. Vize, Uçak Bileti ve Sözleşme:</strong> Tarafımızca doğrudan resmi vize tanzimi, uçak bileti satışı veya nihai seyahat sigortası poliçesi düzenlenmemektedir. Tüm resmi rezervasyonlar, vize işlemleri ve sözleşmeler T.C. Kültür ve Turizm Bakanlığı ve TÜRSAB A Grubu yetkili seyahat acentaları ile Suudi Arabistan Krallığı Hac ve Umre Bakanlığı (Nusuk platformu) lisanslı kurumları vasıtasıyla icra edilmelidir.
        </p>
        <p>
          <strong className="text-stone-800">3. Sağlık ve Tıbbi Tavsiye Muafiyeti:</strong> Programda sunulan istirahat ve sıcaktan korunma önerileri genel konfor prensipleridir; kişiye özel tıbbi teşhis, tedavi veya ilaç tavsiyesi niteliği taşımaz. Kronik rahatsızlığı bulunan misafirlerimizin seyahat öncesinde hekimlerine danışmaları esastır.
        </p>
      </div>
    </div>
  );
};
