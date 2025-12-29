
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface BrandAnalysis {
  strategy: string;
  recommendations: string[];
  targetAudience: string;
}
