export type Language = 'KR' | 'EN';

export type PageId = 'home' | 'about' | 'products' | 'equipment' | 'rd' | 'quality' | 'notices' | 'contact';

export interface Certificate {
  id: string;
  titleKR: string;
  titleEN: string;
  imageUrl: string;
}

export interface ProductSpec {
  id: string;
  model: string;
  category: string;
  nameKR: string;
  nameEN: string;
  range: string;
  accuracy: string;
  ratingKR: string;
  ratingEN: string;
  appKR: string;
  appEN: string;
  imageAlt: string;
  imageUrl?: string;
  isManual?: boolean;
}

export interface CMSPost {
  id: string;
  titleKR: string;
  titleEN: string;
  contentKR: string;
  contentEN: string;
  categoryKR: string;
  categoryEN: string;
  date: string;
  author: string;
  views?: number;
  imageUrl?: string;
}

export interface StylingConfig {
  primaryColor: string; // Hex color for tech blue e.g. #2563EB
  secondaryColor: string; // Hex color for precision green e.g. #10B981
  fontFamily: 'sans' | 'serif' | 'mono' | 'grotesk';
  accentTheme: 'standard' | 'deep' | 'forest' | 'classic';
}

export interface SEOMetadata {
  metaTitleKR: string;
  metaTitleEN: string;
  metaDescriptionKR: string;
  metaDescriptionEN: string;
  keywordsKR: string;
  keywordsEN: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: 'pending' | 'resolved';
}

export interface CustomContent {
  heroTitleKR: string;
  heroTitleEN: string;
  heroSubKR: string;
  heroSubEN: string;
  aboutGreetingKR: string;
  aboutGreetingEN: string;
  aboutIntroKR: string;
  aboutIntroEN: string;
  companyNameKR: string;
  companyNameEN: string;
  logoUrl?: string;
  aboutImageUrl?: string;
  aboutFacilityBadgeKR?: string;
  aboutFacilityBadgeEN?: string;
  aboutFacilityTitleKR?: string;
  aboutFacilityTitleEN?: string;
  aboutFacilityDescKR?: string;
  aboutFacilityDescEN?: string;
  aboutFacilityPoint1KR?: string;
  aboutFacilityPoint1EN?: string;
  aboutFacilityPoint2KR?: string;
  aboutFacilityPoint2EN?: string;
  aboutFacilityPoint3KR?: string;
  aboutFacilityPoint3EN?: string;
  kpi1Value?: string;
  kpi1TitleKR?: string;
  kpi1TitleEN?: string;
  kpi1DescKR?: string;
  kpi1DescEN?: string;
  kpi2Value?: string;
  kpi2TitleKR?: string;
  kpi2TitleEN?: string;
  kpi2DescKR?: string;
  kpi2DescEN?: string;
  kpi3Value?: string;
  kpi3TitleKR?: string;
  kpi3TitleEN?: string;
  kpi3DescKR?: string;
  kpi3DescEN?: string;
  
  // Custom Slide 1
  slide1BadgeKR?: string;
  slide1BadgeEN?: string;
  slide1TitleKR?: string;
  slide1TitleEN?: string;
  slide1SeriesKR?: string;
  slide1SeriesEN?: string;
  slide1DescKR?: string;
  slide1DescEN?: string;
  slide1ProductFilterValue?: string;
  slide1ImageUrl?: string;

  // Custom Slide 2
  slide2BadgeKR?: string;
  slide2BadgeEN?: string;
  slide2TitleKR?: string;
  slide2TitleEN?: string;
  slide2SeriesKR?: string;
  slide2SeriesEN?: string;
  slide2DescKR?: string;
  slide2DescEN?: string;
  slide2ProductFilterValue?: string;
  slide2ImageUrl?: string;

  // Custom Slide 3
  slide3BadgeKR?: string;
  slide3BadgeEN?: string;
  slide3TitleKR?: string;
  slide3TitleEN?: string;
  slide3SeriesKR?: string;
  slide3SeriesEN?: string;
  slide3DescKR?: string;
  slide3DescEN?: string;
  slide3ProductFilterValue?: string;
  slide3ImageUrl?: string;

  // Custom Slide 4
  slide4BadgeKR?: string;
  slide4BadgeEN?: string;
  slide4TitleKR?: string;
  slide4TitleEN?: string;
  slide4SeriesKR?: string;
  slide4SeriesEN?: string;
  slide4DescKR?: string;
  slide4DescEN?: string;
  slide4ProductFilterValue?: string;
  slide4ImageUrl?: string;

  // Custom Core Portfolio (Hompage)
  homePortfolioBadgeKR?: string;
  homePortfolioBadgeEN?: string;
  homePortfolioTitleKR?: string;
  homePortfolioTitleEN?: string;
  homePortfolioBtnKR?: string;
  homePortfolioBtnEN?: string;

  // Homepage Featured Products IDs
  featuredProduct1Id?: string;
  featuredProduct2Id?: string;
  featuredProduct3Id?: string;

  // R&D Custom Content
  carouselVideoUrl?: string;
  rdHeroVideoUrl?: string;
  rdHeroSloganKR?: string;
  rdHeroSloganEN?: string;
  rdHeroSubSloganKR?: string;
  rdHeroSubSloganEN?: string;
  rdTech1TitleKR?: string;
  rdTech1TitleEN?: string;
  rdTech1DescKR?: string;
  rdTech1DescEN?: string;
  rdTech1VideoUrl?: string;
  rdTech2TitleKR?: string;
  rdTech2TitleEN?: string;
  rdTech2DescKR?: string;
  rdTech2DescEN?: string;
  rdTech2VideoUrl?: string;
  rdTech3TitleKR?: string;
  rdTech3TitleEN?: string;
  rdTech3DescKR?: string;
  rdTech3DescEN?: string;
  rdTech3VideoUrl?: string;
  certificatesJson?: string;
}

export interface EquipmentSpec {
  id: string;
  nameKR: string;
  nameEN: string;
  model: string;
  specKR: string;
  specEN: string;
  descKR: string;
  descEN: string;
  count: number;
  categoryKR: string;
  categoryEN: string;
  imageUrl?: string;
}

export interface AppState {
  currentLang: Language;
  currentPage: PageId;
  previewMode: 'desktop' | 'tablet' | 'mobile';
  styling: StylingConfig;
  customContent: CustomContent;
  seo: SEOMetadata;
  posts: CMSPost[];
  inquiries: Inquiry[];
  products: ProductSpec[];
  equipment: EquipmentSpec[];
}
