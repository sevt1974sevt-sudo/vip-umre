export interface ZiyaretStop {
  id: string;
  nameTr: string;
  nameAr: string;
  meaningTr: string;
  timeSlot: string;
  durationMinutes: number;
  importance: string;
  historicalSiyarSource: string;
  siyarExcerpt: string;
  vitoLogistics: string;
  crowdAvoidanceStrategy: string;
  comfortFeatures: string[];
  tags: string[];
  imageUrl?: string;
}

export interface DayPlan {
  dayNumber: number;
  title: string;
  theme: string;
  summary: string;
  totalDistanceKm: number;
  recommendedStartTime: string;
  haremRestTime: string;
  stops: ZiyaretStop[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "advisor";
  content: string;
  image?: {
    data: string;
    mimeType: string;
    previewUrl: string;
  };
  timestamp: string;
}

export interface SampleQuery {
  title: string;
  prompt: string;
  badge: string;
}

export interface DayOverview {
  day: number;
  city: "Mekke-i Mükerreme" | "Medine-i Münevvere" | "İntikal";
  title: string;
  spiritualFocus: string;
  logisticsDetail: string;
  includedMeal: string;
}

export interface CostOptimizationItem {
  category: string;
  massTourPractice: string;
  vipBoutiqueAdvantage: string;
  financialAndSpiritualValue: string;
}

export interface PricingPackageDetails {
  durationDays: number;
  pricePerPersonTL: number;
  currency: string;
  groupSize: number;
  citySplit: string;
  conceptTitle: string;
  conceptSubtitle: string;
  includedServices: string[];
  excludedServices: string[];
  costOptimizationTable: CostOptimizationItem[];
  tenDayOverview: DayOverview[];
  promotionalText: {
    title: string;
    executiveSummary: string;
    keyPoints: string[];
    callToAction: string;
  };
}
