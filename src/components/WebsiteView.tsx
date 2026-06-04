import React, { useState, useEffect } from 'react';
import { 
  Thermometer, 
  Award, 
  Cpu, 
  ShieldCheck, 
  Building, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  Search,
  Filter,
  X,
  LayoutGrid,
  List,
  FileText,
  Download,
  Camera,
  Play,
  Pause,
  Eye
} from 'lucide-react';
import { AppState, PageId, Language, CMSPost, ProductSpec, EquipmentSpec, Certificate } from '../types';
import { getVideo } from './videoDb';
import { PRODUCTS_LIST as STATIC_PRODUCTS_LIST, CERTIFICATES_LIST, TIMELINE_ITEMS, EQUIPMENT_LIST as STATIC_EQUIPMENT_LIST } from '../data';

interface BrandLogoProps {
  isLight?: boolean;
  className?: string;
  logoUrl?: string;
}

export function BrandLogo({ isLight = false, className = "", logoUrl }: BrandLogoProps) {
  const iconColor = isLight ? '#F8FAFC' : '#123C8A';
  const textColor = isLight ? '#FFFFFF' : '#123C8A';
  const starColor = '#8DC63F';

  if (logoUrl) {
    return (
      <div className={`flex items-center gap-2 select-none ${className}`}>
        <div className={`p-1 px-1.5 rounded-md flex items-center justify-center ${isLight ? 'bg-white/95 shadow-xs border border-slate-700/30' : 'bg-transparent'}`}>
          <img 
            src={logoUrl} 
            alt="SensorNine Logo" 
            className="h-8 max-h-8 object-contain w-auto block max-w-[160px]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1 leading-none select-none ${className}`}>
      {/* Text Part (Sensor) */}
      <div className="flex items-baseline" style={{ fontFamily: 'Georgia, Garamond, "Times New Roman", serif' }}>
        <span className="text-2xl font-bold leading-none" style={{ color: textColor }}>S</span>
        <span className="text-[18px] font-bold tracking-wide leading-none" style={{ color: textColor, fontVariant: 'all-small-caps' }}>ensor</span>
      </div>
      
      {/* Icon Part (9 Balloon) */}
      <svg viewBox="0 0 100 100" className="w-[26px] h-[26px] shrink-0" style={{ transform: 'translateY(-1px)' }}>
        <path 
          d="M 50 12 A 33 33 0 1 0 79 61 C 82 72 79 85 64 100 C 85 85 88 65 83 50 A 33 33 0 0 0 50 12 Z" 
          fill={iconColor} 
        />
        <polygon 
          points="50,22 54.5,34 67,34 56.5,41.5 61,53.5 50,45.5 39,53.5 43.5,41.5 33,34 45.5,34" 
          fill={starColor} 
          transform="rotate(-8 50 42)" 
        />
      </svg>
    </div>
  );
}


function ScrollFadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.05, rootMargin: '0px 0px -80px 0px' });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 transform ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
}


function ScrollSlideIn({ children, className = "", direction = "right" }: { children: React.ReactNode; className?: string; direction?: "left" | "right" }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.05, rootMargin: '0px 0px -80px 0px' });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const translateClass = direction === "right" 
    ? (isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6')
    : (isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6');

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out transform ${translateClass} ${className}`}
    >
      {children}
    </div>
  );
}


function ScrollLinkedSlide({ children, direction = "right" }: { children: React.ReactNode; direction?: "left" | "right" }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(direction === "right" ? 140 : -140);
  const [opacity, setOpacity] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const completedRef = React.useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (completedRef.current) return;
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Starts sliding when element is near the bottom (85% height) and finishes at 40% height for instant responsiveness
      const startOffset = viewportHeight * 0.85;
      const endOffset = viewportHeight * 0.40;
      
      let activePhase = 0;
      if (rect.top <= startOffset) {
        const range = startOffset - endOffset;
        const progressInsideRange = (startOffset - rect.top) / range;
        activePhase = Math.max(0, Math.min(1, progressInsideRange));
      }
      
      const maxTranslate = 140; // amount of side movement
      const calculatedTranslate = direction === "right" 
        ? maxTranslate * (1 - activePhase) 
        : -maxTranslate * (1 - activePhase);
        
      setTranslateX(calculatedTranslate);
      setOpacity(activePhase);

      if (activePhase >= 1) {
        completedRef.current = true;
        setHasCompleted(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const scroller = document.getElementById("preview-viewport-scroller");
    if (scroller) {
      scroller.addEventListener("scroll", handleScroll, { passive: true });
    }

    handleScroll();
    
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scroller) {
        scroller.removeEventListener("scroll", handleScroll);
      }
      clearTimeout(timer);
    };
  }, [direction]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translateX(${hasCompleted ? 0 : translateX}px)`,
        opacity: hasCompleted ? 1 : opacity,
        transition: 'transform 0.1s ease-out, opacity 0.15s ease-out',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}


function ScrollLinkedHeroAndVideo({ 
  isKR, 
  customContent, 
  primaryColor, 
  secondaryColor, 
  resolvedVideos, 
  isHeroVideoMuted 
}: { 
  isKR: boolean; 
  customContent: any; 
  primaryColor: string; 
  secondaryColor: string; 
  resolvedVideos: Record<string, string>; 
  isHeroVideoMuted: boolean; 
}) {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center bg-transparent">
      {/* Background Video */}
      <video
        key={resolvedVideos['rdHero'] || customContent.rdHeroVideoUrl || "default-hero-video"}
        autoPlay
        loop
        muted={isHeroVideoMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
        style={{
          transform: 'scale(1.02)',
          willChange: 'transform'
        }}
        referrerPolicy="no-referrer"
      >
        <source src={resolvedVideos['rdHero'] || customContent.rdHeroVideoUrl || "/videos/sensor_R&D_v2.mp4" /* sensor_image_video_hero - [위치: '연구개발(R&D)' 페이지 최상단 대형 메인 비디오 배경 (기계 로봇팔 장치 동작 영상)] */} type="video/mp4" />
      </video>

      {/* Text Container Box on Top - Non-reactive and fully visible statics */}
      <div className="relative z-20 text-center p-6 sm:p-8 max-w-2xl mx-auto space-y-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
        {/* 1. Badge div */}
        <div 
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/25 text-white text-[10px] font-black tracking-widest uppercase"
        >
          <Sparkles size={11} className="text-amber-400" />
          {isKR ? '센서나인 독자 연구 핵심 기술' : 'SENSOR9 ORIGINAL RESEARCH & DEV'}
        </div>
        
        {/* 2. Title h1 */}
        <h1 
          className="text-2xl sm:text-4xl font-black text-white italic tracking-tight leading-tight uppercase font-sans whitespace-pre-line"
        >
          {isKR 
            ? (customContent.rdHeroSloganKR || '세상을 감지하는 정밀함,\n센서나인의 원천기술') 
            : (customContent.rdHeroSloganEN || 'Sensing the World with Precision,\nSensorNine\'s Original R&D Tech')}
        </h1>

        {/* 3. Description p */}
        <p 
          className="text-[10px] sm:text-xs text-slate-300 max-w-xl mx-auto leading-relaxed font-light"
        >
          {isKR 
            ? (customContent.rdHeroSubSloganKR || '보일러 및 가전 시스템의 스마트 컨트롤러부터 고성능 EV 배터리 열폭주 차단까지, 타협 없는 철저한 품질과 신기술 개발로 앞서갑니다.')
            : (customContent.rdHeroSubSloganEN || 'From smart boiler controllers override to high-performance EV battery thermal runaway protection, leading with rigorous quality standards and patented sensory development.')}
        </p>

        {/* 4. Explore Button */}
        <div 
          className="pt-2 flex justify-center items-center gap-3"
        >
          <a
            href="#core-tech-section"
            className="flex items-center gap-1.5 px-3 py-1 rounded text-[10px] font-bold text-white transition-all hover:translate-y-0.5 cursor-pointer"
            style={{ backgroundColor: primaryColor }}
          >
            <span>{isKR ? '기술 둘러보기' : 'Explore Tech'}</span>
            <ArrowRight size={10} />
          </a>
        </div>
      </div>
    </div>
  );
}


interface WebsiteViewProps {
  state: AppState;
  onPageChange: (page: PageId) => void;
  onLangChange: (lang: Language) => void;
  onAddInquiry: (name: string, email: string, phone: string, subject: string, message: string) => void;
}

export default function WebsiteView({ 
  state, 
  onPageChange, 
  onLangChange, 
  onAddInquiry 
}: WebsiteViewProps) {
  const { currentLang, currentPage, styling, customContent, posts } = state;
  const isKR = currentLang === 'KR';

  // Real-time dynamic list overrides from state with automatic static fallbacks
  const PRODUCTS_LIST = state.products || STATIC_PRODUCTS_LIST;
  const EQUIPMENT_LIST = state.equipment || STATIC_EQUIPMENT_LIST;

  // Dynamic style generators
  const primaryColor = styling.primaryColor;
  const secondaryColor = styling.secondaryColor;

  // Contact Page Local Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Products Page Filter State
  const [productFilter, setProductFilter] = useState<string>('All');
  const [productSearch, setProductSearch] = useState('');
  const [productViewMode, setProductViewMode] = useState<'grid' | 'table'>('grid');
  const [downloadingManual, setDownloadingManual] = useState<string | null>(null);
  const [productsPage, setProductsPage] = useState<number>(1);

  // Equipment Page Filter & Selection State
  const [equipmentFilter, setEquipmentFilter] = useState<string>('All');
  const [selectedEquipmentId, setSelectedEquipmentId] = useState<string>('eq-1');

  // Hero Product Showcase Carousel State
  const [heroSlideIndex, setHeroSlideIndex] = useState<number>(0);
  const [heroSlidePlaying, setHeroSlidePlaying] = useState<boolean>(true);

  // R&D Interactive States
  const [activeRdStep, setActiveRdStep] = useState<number>(0);
  const [activeRdVideoUrl, setActiveRdVideoUrl] = useState<string | null>(null);
  const [activeRdVideoTitle, setActiveRdVideoTitle] = useState<string>('');
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);
  const [selectedCustomCert, setSelectedCustomCert] = useState<Certificate | null>(null);
  const [isHeroVideoMuted, setIsHeroVideoMuted] = useState<boolean>(true);

  // Local video custom resolver for client upload support
  const [resolvedVideos, setResolvedVideos] = useState<Record<string, string>>({});

  useEffect(() => {
    let active = true;
    const urlsToResolve = [
      { key: 'rdHero', field: customContent.rdHeroVideoUrl },
      { key: 'carouselVideo', field: customContent.carouselVideoUrl },
      { key: 'rdTech1', field: customContent.rdTech1VideoUrl },
      { key: 'rdTech2', field: customContent.rdTech2VideoUrl },
      { key: 'rdTech3', field: customContent.rdTech3VideoUrl },
    ];

    const objectUrlsToRevoke: string[] = [];

    const resolveLocalVideos = async () => {
      const nextResolved: Record<string, string> = {};
      for (const item of urlsToResolve) {
        if (item.field && item.field.startsWith('localdb:')) {
          try {
            const file = await getVideo(item.field);
            if (file && active) {
              const objUrl = URL.createObjectURL(file);
              nextResolved[item.key] = objUrl;
              objectUrlsToRevoke.push(objUrl);
            }
          } catch (e) {
            console.error(`Error loading local video for ${item.key}:`, e);
          }
        }
      }
      if (active) {
        setResolvedVideos(nextResolved);
      }
    };

    resolveLocalVideos();

    return () => {
      active = false;
      objectUrlsToRevoke.forEach(url => URL.revokeObjectURL(url));
    };
  }, [
    customContent.rdHeroVideoUrl,
    customContent.carouselVideoUrl,
    customContent.rdTech1VideoUrl,
    customContent.rdTech2VideoUrl,
    customContent.rdTech3VideoUrl
  ]);

  useEffect(() => {
    if (!heroSlidePlaying) return;
    const interval = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, [heroSlidePlaying]);

  // Scroll viewport container to top on page switches/categories
  useEffect(() => {
    const scroller = document.getElementById('preview-viewport-scroller');
    if (scroller) {
      scroller.scrollTop = 0;
    }
  }, [currentPage]);

  // Dynamic product category classification & display helpers
  const matchesProductCategory = (prod: typeof PRODUCTS_LIST[0], filter: string) => {
    if (filter === 'All') return true;
    
    const cat = (prod.category || '').toLowerCase();
    const name = (prod.nameKR || '').toLowerCase();
    const nameEN = (prod.nameEN || '').toLowerCase();
    const model = (prod.model || '').toLowerCase();

    switch (filter) {
      case '온도센서':
        return cat.includes('기본형') || (cat.includes('온도센서') && !cat.includes('배관') && !cat.includes('외기') && !cat.includes('실내') && !cat.includes('k-type') && !cat.includes('바이메탈') && !cat.includes('수위'));
      case '배관용온도센서':
        return cat.includes('배관');
      case '외기용온도센서':
        return cat.includes('외기') || name.includes('외기') || model.includes('out');
      case '실내온도센서':
        return cat.includes('실내') || name.includes('실내') || model.includes('in-');
      case 'K-TYPE센서':
        return cat.includes('k-type') || name.includes('k-type') || model.includes('ktype') || name.includes('pt100') || model.includes('pt100');
      case '바이메탈센서':
        return cat.includes('바이메탈') || name.includes('바이메탈') || model.includes('bim');
      case '불꽃감지센서':
        return cat.includes('불꽃') || name.includes('불꽃') || model.includes('flame');
      case '수위감지센서':
        return cat.includes('수위');
      case '기타':
        return cat.includes('기타') || cat.includes('부속품') || cat.includes('케이스') || cat.includes('소켓');
      default:
        return prod.category === filter;
    }
  };

  const getProductCategoryDisplay = (prod: typeof PRODUCTS_LIST[0]) => {
    const cat = (prod.category || '').toLowerCase();
    const name = (prod.nameKR || '').toLowerCase();
    const model = (prod.model || '').toLowerCase();

    if (cat.includes('기본형') || (cat.includes('온도센서') && !cat.includes('배관') && !cat.includes('외기') && !cat.includes('실내') && !cat.includes('k-type') && !cat.includes('바이메탈') && !cat.includes('수위'))) {
      return isKR ? '온도센서' : 'Temp Sensor';
    }
    if (cat.includes('배관')) {
      return isKR ? '배관용온도센서' : 'Pipe Temp Sensor';
    }
    if (cat.includes('외기') || name.includes('외기') || model.includes('out')) {
      return isKR ? '외기용온도센서' : 'Outdoor Temp Sensor';
    }
    if (cat.includes('실내') || name.includes('실내') || model.includes('in-')) {
      return isKR ? '실내온도센서' : 'Indoor Temp Sensor';
    }
    if (cat.includes('k-type') || name.includes('k-type') || model.includes('ktype') || name.includes('pt100') || model.includes('pt100')) {
      return isKR ? 'K-TYPE센서' : 'K-Type Sensor';
    }
    if (cat.includes('바이메탈') || name.includes('바이메탈') || model.includes('bim')) {
      return isKR ? '바이메탈센서' : 'Bi-Metal Sensor';
    }
    if (cat.includes('불꽃') || name.includes('불꽃') || model.includes('flame')) {
      return isKR ? '불꽃감지센서' : 'Flame Sensor';
    }
    if (cat.includes('수위')) {
      return isKR ? '수위감지센서' : 'Water Level Sensor';
    }
    return isKR ? '기타 부속품' : 'Accessories';
  };

  // Selected news notice item modal state
  const [selectedPost, setSelectedPost] = useState<CMSPost | null>(null);
  const [noticesPage, setNoticesPage] = useState<number>(1);

  // Policy Modal state ('terms' or 'privacy' or 'email' or null)
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'email' | null>(null);

  // Handle Contact Form Submit
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormError(isKR ? '모든 필수 항목(*)을 채워주세요.' : 'Please fill all required fields(*).');
      return;
    }
    setFormError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mbdbvkjz', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'N/A',
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        onAddInquiry(
          formData.name,
          formData.email,
          formData.phone || 'N/A',
          formData.subject,
          formData.message
        );
        setFormSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => {
          setFormSuccess(false);
        }, 5000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        const serverError = errorData.error || (isKR ? '폼 전송에 실패했습니다. 다시 시도해 주세요.' : 'Form submission failed.');
        setFormError(`${serverError} (Formspree)`);
      }
    } catch (err) {
      console.error('Error submitting Formspree inquiry:', err);
      // Fallback locally to ensure data is still collected in admin session even if offline or blocked
      onAddInquiry(
        formData.name,
        formData.email,
        formData.phone || 'N/A',
        formData.subject,
        formData.message
      );
      setFormSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Font setup
  const fontClass = () => {
    switch (styling.fontFamily) {
      case 'serif': return 'font-serif';
      case 'mono': return 'font-mono';
      case 'grotesk': return 'font-sans tracking-tight';
      default: return 'font-sans';
    }
  };

  const activeLinkStyle = { borderBottom: `2px solid ${primaryColor}`, color: primaryColor };

  return (
    <div className={`w-full h-full flex flex-col bg-slate-50 text-slate-800 ${fontClass()} transition-colors duration-300`}>
      {/* Dynamic Inline CSS Injection for Styling updates */}
      <style>{`
        .text-primary-custom { color: ${primaryColor}; }
        .bg-primary-custom { background-color: ${primaryColor}; }
        .border-primary-custom { border-color: ${primaryColor}; }
        .text-secondary-custom { color: ${secondaryColor}; }
        .bg-secondary-custom { background-color: ${secondaryColor}; }
        .border-secondary-custom { border-color: ${secondaryColor}; }
        .hover-bg-primary-custom:hover { background-color: ${primaryColor}dd; }
        .focus-ring-primary:focus { ring-color: ${primaryColor}; }
      `}</style>

      {/* Website Top Utility Header Bar */}
      <header className="h-16 bg-white border-b border-slate-200 shadow-xs relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => onPageChange('home')}>
            {/* Real Company Logo Reflected */}
            <BrandLogo logoUrl={customContent.logoUrl} />
            <div className="flex flex-col border-l border-slate-200 pl-2.5">
              <span 
                className="text-[15px] sm:text-[15px] font-black tracking-wide leading-none" 
                style={{ color: '#243f90', fontWeight: 900 }}
              >
                {isKR ? '센서나인(주)' : 'SENSOR NINE Co., Ltd.'}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex flex-nowrap items-center gap-3 lg:gap-5 xl:gap-7 text-xs lg:text-sm font-semibold tracking-wide text-slate-600 shrink-0 whitespace-nowrap">
            {(['home', 'about', 'products', 'equipment', 'rd', 'quality', 'notices', 'contact'] as PageId[]).map((page) => {
              const isActive = currentPage === page;
              const labels: Record<PageId, { KR: string; EN: string }> = {
                home: { KR: '홈', EN: 'HOME' },
                about: { KR: '회사소개', EN: 'ABOUT US' },
                products: { KR: '제품소개', EN: 'PRODUCTS' },
                equipment: { KR: '장비보유현황', EN: 'EQUIPMENT' },
                rd: { KR: '기술 및 연구', EN: 'R&D' },
                quality: { KR: '품질 및 인증현황', EN: 'QUALITY & CERTIFICATION' },
                notices: { KR: '공지사항', EN: 'ANNOUNCEMENTS' },
                contact: { KR: '고객문의', EN: 'CONTACT US' }
              };
              return (
                <button
                  key={page}
                  id={`nav-${page}`}
                  onClick={() => onPageChange(page)}
                  style={isActive ? activeLinkStyle : {}}
                  className={`py-5 transition-all uppercase hover:text-slate-900 whitespace-nowrap ${
                    isActive ? 'font-bold' : 'hover:border-b-2 hover:border-slate-300'
                  }`}
                >
                  {isKR ? labels[page].KR : labels[page].EN}
                </button>
              );
            })}
          </nav>

          {/* Language & Action Toggles */}
          <div className="flex items-center gap-3 lg:gap-4 shrink-0">
            <div className="bg-slate-100 rounded-full p-0.5 flex gap-1 border border-slate-200 font-mono" id="lang-switch-toggle">
              <button
                onClick={() => onLangChange('KR')}
                className={`text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full transition-all font-semibold ${
                  isKR 
                    ? 'bg-white shadow-xs text-slate-900 scale-105' 
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                KR
              </button>
              <button
                onClick={() => onLangChange('EN')}
                className={`text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full transition-all font-semibold ${
                  !isKR 
                    ? 'bg-white shadow-xs text-slate-900 scale-105' 
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                EN
              </button>
            </div>
            
            <button 
              id="mobile-nav-action-btn"
              onClick={() => onPageChange('contact')}
              style={{ backgroundColor: secondaryColor }}
              className="hidden lg:inline-block text-[11px] text-white px-3.5 py-1.5 rounded-md font-bold tracking-wider hover:opacity-95 transition-opacity"
            >
              {isKR ? '빠른 문의' : 'QUICK INQUIRY'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav bar summary for small screens */}
      <div className="md:hidden flex border-b border-rose-100 bg-white overflow-x-auto overflow-y-hidden text-xs font-semibold justify-between px-2 py-2 text-slate-500 shrink-0">
        {(['home', 'about', 'products', 'equipment', 'rd', 'quality', 'notices', 'contact'] as PageId[]).map((page) => {
          const isActive = currentPage === page;
          const labels: Record<PageId, { KR: string; EN: string }> = {
            home: { KR: '홈', EN: 'Home' },
            about: { KR: '소개', EN: 'About' },
            products: { KR: '제품', EN: 'Products' },
            equipment: { KR: '장비', EN: 'Equipment' },
            rd: { KR: '연구', EN: 'R&D' },
            quality: { KR: '품질', EN: 'Quality' },
            notices: { KR: '공지사항', EN: 'Notices' },
            contact: { KR: '문의', EN: 'Contact' }
          };
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap ${
                isActive 
                  ? 'bg-slate-100 font-bold' 
                  : 'hover:text-slate-800'
              }`}
              style={isActive ? { color: primaryColor } : {}}
            >
              {isKR ? labels[page].KR : labels[page].EN}
            </button>
          );
        })}
      </div>

      {/* Main Preview Container Viewport */}
      <div className="flex-1 overflow-y-auto" id="preview-viewport-scroller">

        {/* ==================== PAGE: HOME ==================== */}
        {currentPage === 'home' && (
          <div className="animate-fade-in bg-white text-slate-800">
            {/* Elegant Editorial Hero Grid */}
            <section className="bg-white border-b border-slate-200">
              <div className="flex flex-col w-full">
                
                {/* 1. Dynamic Product Showcase Slideshow / Carousel (Top block) */}
                <div className="w-full bg-slate-50 relative border-b border-slate-200/50 overflow-hidden" id="hero-showcase-carousel">

                  <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center min-h-[440px] lg:min-h-[490px] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 relative z-10 gap-10">
                    
                    {/* The state-driven sliding feature content */}
                    {(() => {
                      const carouselSlides = [
                        {
                          badge: { 
                            KR: customContent.slide1BadgeKR || "STEADY / 최고인정 고신뢰성", 
                            EN: customContent.slide1BadgeEN || "DURABLE / ACCURATE" 
                          },
                          title: { 
                            KR: customContent.slide1TitleKR || "오차 범위 ±0.05°C 극도로 정밀하고 미세 온도 흐트러짐 없는 완벽 제어", 
                            EN: customContent.slide1TitleEN || "Extremely Precise, Stable Feedback with Accuracy Level to ±0.05°C" 
                          },
                          series: { 
                            KR: customContent.slide1SeriesKR || "이중관 소켓형 온도 센서 SN-DBT Series", 
                            EN: customContent.slide1SeriesEN || "Double-Well Threaded Thermistor (SN-DBT Series)" 
                          },
                          desc: { 
                            KR: customContent.slide1DescKR || "특허받은 NTC 써미스터 칩과 견고한 이중 차폐 격벽 소켓 기술을 결합하여, 화학 용매 대류와 초고압 배관 속에서도 유체 흐름 왜곡 없이 정밀 복사 열제어를 수행합니다.", 
                            EN: customContent.slide1DescEN || "Patented NTC thermistor technology packed with rugged dual-wall protective sleeves, enabling precise digital thermal calibration under harsh flow speed and intense chemical pressure." 
                          },
                          productFilterValue: customContent.slide1ProductFilterValue || "온도센서", image: customContent.slide1ImageUrl,
                          svg: (
                            <svg viewBox="0 0 450 280" className="w-full h-full max-h-[200px] sm:max-h-[240px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="200" cy="140" r="110" fill="url(#fluidGlow0)" opacity="0.35" />
                              <defs>
                                <radialGradient id="fluidGlow0" cx="50%" cy="50%" r="50%">
                                  <stop offset="0%" stopColor={primaryColor} />
                                  <stop offset="100%" stopColor="#f4f5f7" stopOpacity="0" />
                                </radialGradient>
                                <linearGradient id="metalBody" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#e2e8f0" />
                                  <stop offset="50%" stopColor="#94a3b8" />
                                  <stop offset="100%" stopColor="#475569" />
                                </linearGradient>
                                <linearGradient id="brassHex" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#fef08a" />
                                  <stop offset="50%" stopColor="#ca8a04" />
                                  <stop offset="100%" stopColor="#854d0e" />
                                </linearGradient>
                                <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
                                  <stop offset="50%" stopColor="#f97316" />
                                  <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              <path d="M 330 200 Q 370 210 420 170" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" opacity="0.75" />
                              <path d="M 330 200 Q 360 220 430 190" stroke="#10b981" strokeWidth="4" strokeLinecap="round" opacity="0.75" />
                              <g transform="translate(60, 40)">
                                <rect x="0" y="86" width="180" height="12" rx="4" fill="url(#metalBody)" />
                                <rect x="0" y="86" width="180" height="4" rx="2" fill="#ffffff" opacity="0.4" />
                                <rect x="110" y="80" width="80" height="24" rx="3" fill="url(#metalBody)" stroke="#334155" strokeWidth="1" />
                                <path d="M 190 70 L 210 70 L 215 76 L 215 108 L 210 114 L 190 114 Z" fill="url(#brassHex)" />
                                <rect x="195" y="74" width="12" height="36" fill="#fef08a" opacity="0.3" />
                                <rect x="215" y="78" width="18" height="28" rx="2" fill="url(#metalBody)" />
                                <line x1="218" y1="82" x2="218" y2="102" stroke="#475569" strokeWidth="2" />
                                <line x1="223" y1="82" x2="223" y2="102" stroke="#475569" strokeWidth="2" />
                                <line x1="228" y1="82" x2="228" y2="102" stroke="#475569" strokeWidth="2" />
                                <rect x="233" y="72" width="75" height="40" rx="6" fill="#1e293b" />
                                <text x="270" y="96" fill="#94a3b8" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">SENS9 - PRO</text>
                                <rect x="233" y="76" width="75" height="3" fill="#ffffff" opacity="0.1" />
                              </g>
                              <circle cx="90" cy="126" r="24" stroke={secondaryColor} strokeWidth="1.5" strokeDasharray="3,3" opacity="0.8" />
                              <circle cx="90" cy="126" r="8" fill={secondaryColor} />
                              <line x1="10" y1="126" x2="440" y2="126" stroke="url(#glowLine)" strokeWidth="1.5" />
                            </svg>
                          )
                        },
                        {
                          badge: { 
                            KR: customContent.slide2BadgeKR || "EASY FIT / 밀착형 스프링", 
                            EN: customContent.slide2BadgeEN || "SNAP-ON / EASY INSTALL" 
                          },
                          title: { 
                            KR: customContent.slide2TitleKR || "배관 용접이나 홀 가공 없이 원터치 완전 구면 밀착을 실현하는", 
                            EN: customContent.slide2TitleEN || "Zero Welding and Leak Risk with Direct Clamp-on Pipe Integration" 
                          },
                          series: { 
                            KR: customContent.slide2SeriesKR || "지능형 배관 밀착형 온도센서 SN-PIPE Series", 
                            EN: customContent.slide2SeriesEN || "Clamping/Strap-on Pipe Sensor (SN-PIPE Series)" 
                          },
                          desc: { 
                            KR: customContent.slide2DescKR || "금속 배관 외부 표면에 균일하게 래핑 밀착되는 고탄성 장력 스프링 시스 구조를 적용하여, 배관 내벽 가공 없이 0.1초의 급격한 열원 대류까지 오차 없이 실시간으로 추출해 냅니다.", 
                            EN: customContent.slide2DescEN || "Designed with responsive structural thermistor clamps wrapping completely around standard plumbing. Extracts fast temperature flow metrics with zero fluid restriction." 
                          },
                          productFilterValue: customContent.slide2ProductFilterValue || "배관용온도센서", image: customContent.slide2ImageUrl,
                          svg: (
                            <svg viewBox="0 0 450 280" className="w-full h-full max-h-[200px] sm:max-h-[240px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="40" y="80" width="370" height="120" rx="8" fill="url(#pipeMetallic)" />
                              <rect x="40" y="100" width="370" height="80" fill="url(#fluidFlowGrad)" opacity="0.25" />
                              <defs>
                                <linearGradient id="pipeMetallic" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#64748b" />
                                  <stop offset="30%" stopColor="#cbd5e1" />
                                  <stop offset="50%" stopColor="#f8fafc" />
                                  <stop offset="70%" stopColor="#94a3b8" />
                                  <stop offset="100%" stopColor="#475569" />
                                </linearGradient>
                                <linearGradient id="fluidFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#3b82f6" />
                                  <stop offset="50%" stopColor="#10b981" />
                                  <stop offset="100%" stopColor="#ef4444" />
                                </linearGradient>
                              </defs>
                              <path d="M 60 140 L 75 135 L 75 145 Z" fill="#ffffff" opacity="0.6" />
                              <path d="M 140 140 L 155 135 L 155 145 Z" fill="#ffffff" opacity="0.6" />
                              <path d="M 310 140 L 325 135 L 325 145 Z" fill="#ffffff" opacity="0.6" />
                              <g transform="translate(185, 45)">
                                <rect x="15" y="30" width="60" height="120" rx="30" fill="none" stroke="#e2e8f0" strokeWidth="8" opacity="0.9" />
                                <rect x="15" y="30" width="60" height="120" rx="30" fill="none" stroke="#1e293b" strokeWidth="4" />
                                <rect x="5" y="10" width="80" height="55" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                                <rect x="5" y="15" width="80" height="4" fill="#ffffff" opacity="0.1" />
                                <text x="45" y="32" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1" opacity="0.9">SENS9</text>
                                <circle cx="28" cy="48" r="4" fill="#10b981" />
                                <circle cx="45" cy="48" r="4" fill="#3b82f6" />
                                <circle cx="62" cy="48" r="4" fill="#f59e0b" />
                                <path d="M 45 10 Q 45 -10 80 -15" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
                              </g>
                              <path d="M 225 185 Q 225 210 240 220" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeDasharray="3,3" />
                              <path d="M 215 185 Q 215 208 200 215" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeDasharray="3,3" />
                            </svg>
                          )
                        },
                        {
                          badge: { 
                            KR: customContent.slide3BadgeKR || "ULTRA HIGH / 화염 가열로", 
                            EN: customContent.slide3BadgeEN || "ULTRA HIGH TEMP" 
                          },
                          title: { 
                            KR: customContent.slide3TitleKR || "최대 1200°C 화염의 초고온 가열로 및 고압 용사 로재 내벽에 대응하는", 
                            EN: customContent.slide3TitleEN || "Extremely Resilient K-TYPE Sensors Certified up to +1200°C" 
                          },
                          series: { 
                            KR: customContent.slide3SeriesKR || "초고속 반응 K-TYPE 및 고온 전주 센서 SN-KTYPE Series", 
                            EN: customContent.slide3SeriesEN || "Heavy Industrial K-Type Probe (SN-KTYPE Series)" 
                          },
                          desc: { 
                            KR: customContent.slide3DescKR || "진보한 세라믹 인슐레이터 격막과 하스텔로이 보호 공법을 입혀 산화 부식을 철저히 극소화하였으며, 금속 제련 연구 및 가마 연소 환경 최상단에서 수명을 온전히 유지합니다.", 
                            EN: customContent.slide3DescEN || "High-level magnesium oxide mineral insulation encased within heat-resistant Superalloy protective sheathing. Built for steel mills, glass foundries, and incinerators." 
                          },
                          productFilterValue: customContent.slide3ProductFilterValue || "K-TYPE센서", image: customContent.slide3ImageUrl,
                          svg: (
                            <svg viewBox="0 0 450 280" className="w-full h-full max-h-[200px] sm:max-h-[240px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="160" cy="140" r="100" fill="url(#furnaceGlow)" opacity="0.35" />
                              <defs>
                                <radialGradient id="furnaceGlow" cx="40%" cy="50%" r="50%">
                                  <stop offset="0%" stopColor="#f97316" />
                                  <stop offset="50%" stopColor="#b91c1c" />
                                  <stop offset="100%" stopColor="#f4f5f7" stopOpacity="0" />
                                </radialGradient>
                                <linearGradient id="armorSheath" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#94a3b8" />
                                  <stop offset="30%" stopColor="#cbd5e1" />
                                  <stop offset="70%" stopColor="#475569" />
                                  <stop offset="100%" stopColor="#1e293b" />
                                </linearGradient>
                                <linearGradient id="fireGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                                  <stop offset="70%" stopColor="#f97316" stopOpacity="0.8" />
                                  <stop offset="100%" stopColor="#facc15" />
                                </linearGradient>
                              </defs>
                              <path d="M 60 210 Q 80 180 70 140 T 60 80" stroke="url(#fireGradient)" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
                              <path d="M 100 220 Q 120 190 110 150 T 100 90" stroke="url(#fireGradient)" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
                              <g transform="translate(140, 60)">
                                <g transform="rotate(15, 200, 80)">
                                  <path d="M 180 80 Q 230 110 270 90" stroke="url(#armorSheath)" strokeWidth="12" strokeLinecap="round" />
                                  <path d="M 180 80 Q 230 110 270 90" stroke="#f1f5f9" strokeWidth="12" strokeLinecap="round" strokeDasharray="2,3" opacity="0.3" />
                                  <rect x="130" y="68" width="50" height="24" rx="2" fill="url(#armorSheath)" stroke="#1e293b" strokeWidth="1" />
                                  <circle cx="155" cy="80" r="6" fill="#ca8a04" />
                                  <rect x="0" y="74" width="130" height="12" rx="6" fill="url(#armorSheath)" />
                                  <path d="M 0 74 L 15 74 L 15 86 L 0 86 Q -8 80 0 74 Z" fill="#b91c1c" />
                                  <rect x="1" y="78" width="128" height="3" rx="1.5" fill="#ffffff" opacity="0.3" />
                                </g>
                              </g>
                              <g transform="translate(260, 24)">
                                <rect x="0" y="0" width="130" height="36" rx="6" fill="#111827" opacity="0.95" />
                                <text x="15" y="22" fill="#ef4444" fontSize="13" fontWeight="bold" fontFamily="monospace" letterSpacing="1">1185.4 °C</text>
                                <circle cx="112" cy="18" r="4" fill="#ef4444" />
                              </g>
                            </svg>
                          )
                        },
                        {
                          badge: { 
                            KR: customContent.slide4BadgeKR || "DOUBLE DETECT / 누수 및 기포 방어", 
                            EN: customContent.slide4BadgeEN || "SAFETY LEVEL WATCH" 
                          },
                          title: { 
                            KR: customContent.slide4TitleKR || "액밀 고강도 프리즘과 다중 정전 전극으로 침전 오동작 방지하는 수위 감지", 
                            EN: customContent.slide4TitleEN || "Smart Non-contact Level Tracking Prevents False Failures" 
                          },
                          series: { 
                            KR: customContent.slide4SeriesKR || "수위 감지 및 특수 산업 보안 센서 SN-SAFETY Series", 
                            EN: customContent.slide4SeriesEN || "Intelligent Water Level Casing (SN-SAFETY Series)" 
                          },
                          desc: { 
                            KR: customContent.slide4DescKR || "진보한 광전 센싱 소자와 전극 감도를 내장하여, 오일-물 믹서기 등 복잡한 잔여 세정액 조건에서도 침전물 오작동 없이 정확한 레벨 및 유출 소화 조각을 감지 방어합니다.", 
                            EN: customContent.slide4DescEN || "Applies patented impedance vector analysis algorithms filters out build-up scales or persistent fluid bubbles, ensuring zero alarm faults in oil-water mixers, bio chambers, and tank walls." 
                          },
                          productFilterValue: customContent.slide4ProductFilterValue || "수위감지센서", image: customContent.slide4ImageUrl,
                          svg: (
                            <svg viewBox="0 0 450 280" className="w-full h-full max-h-[200px] sm:max-h-[240px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="50" y="110" width="350" height="110" rx="8" fill="#3b82f6" opacity="0.1" />
                              <path d="M 50 110 Q 137.5 100 225 110 T 400 110 L 400 220 L 50 220 Z" fill="#3b82f6" opacity="0.15" />
                              <defs>
                                <linearGradient id="safetyMetallic" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#e2e8f0" />
                                  <stop offset="40%" stopColor="#94a3b8" />
                                  <stop offset="100%" stopColor="#334155" />
                                </linearGradient>
                                <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
                                  <stop offset="0%" stopColor="#10b981" />
                                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                </radialGradient>
                              </defs>
                              <circle cx="100" cy="180" r="5" fill="#3b82f6" opacity="0.5" />
                              <circle cx="120" cy="150" r="8" fill="#3b82f6" opacity="0.3" />
                              <circle cx="310" cy="130" r="4" fill="#3b82f6" opacity="0.6" />
                              <g transform="translate(200, 30)">
                                <rect x="20" y="30" width="10" height="160" fill="url(#safetyMetallic)" />
                                <rect x="20" y="30" width="3" height="160" fill="#ffffff" opacity="0.5" />
                                <rect x="15" y="90" width="20" height="15" rx="2" fill="#ca8a04" stroke="#475569" strokeWidth="1" />
                                <rect x="15" y="140" width="20" height="15" rx="2" fill="#ca8a04" stroke="#475569" strokeWidth="1" />
                                <rect x="10" y="105" width="30" height="18" rx="4" fill="#1e293b" />
                                <rect x="10" y="109" width="30" height="3" fill="#ffffff" opacity="0.3" />
                                <circle cx="25" cy="30" r="28" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                                <circle cx="25" cy="30" r="20" fill="url(#ringGlow)" opacity="0.3" />
                                <text x="25" y="34" fill="#10b981" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">SAFE</text>
                                <path d="M 45 15 Q 65 -5 85 -5" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                              </g>
                              <ellipse cx="225" cy="190" rx="30" ry="10" stroke="#10b981" strokeWidth="2" opacity="0.7" />
                            </svg>
                          )
                        }
                      ];

                      const currentSlide = carouselSlides[heroSlideIndex];

                      return (
                        <div className="lg:col-span-12 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-14 animate-fade-in">
                          
                          {/* Inner Slide Left Hand Column */}
                          <div className="lg:col-span-7 flex flex-col justify-center text-left">
                            <div className="mb-4">
                              <span className="inline-flex items-center gap-1.5 bg-rose-600 text-[10px] font-black text-white uppercase tracking-widest px-3 py-1 rounded-md shadow-xs select-none">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                                {currentSlide.badge[isKR ? 'KR' : 'EN']}
                              </span>
                            </div>

                            <h2 className="text-xl sm:text-2xl lg:text-3.5xl font-black text-slate-900 leading-tight tracking-tight mb-5 min-h-[58px] sm:min-h-[72px] transition-all duration-300">
                              {currentSlide.title[isKR ? 'KR' : 'EN']}
                            </h2>

                            {/* Divider strip */}
                            <div className="w-14 h-[3px] mb-5 rounded-full" style={{ backgroundColor: secondaryColor }}></div>

                            <div className="text-base sm:text-lg font-extrabold tracking-wide mb-3 flex items-center gap-2" style={{ color: secondaryColor }}>
                              {currentSlide.series[isKR ? 'KR' : 'EN']}
                            </div>

                            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8 max-w-xl min-h-[66px] transition-all duration-300 font-medium">
                              {currentSlide.desc[isKR ? 'KR' : 'EN']}
                            </p>

                            {/* Bullet navigation dot control deck */}
                            <div className="flex flex-wrap items-center gap-4 mt-2 select-none">
                              {/* Slidable dots */}
                              <div className="flex items-center gap-2 bg-slate-200/50 p-1.5 px-2.5 rounded-full border border-slate-300/30">
                                {carouselSlides.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => {
                                      setHeroSlideIndex(idx);
                                      setHeroSlidePlaying(false);
                                    }}
                                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                                      heroSlideIndex === idx
                                        ? 'bg-slate-900 w-5 rounded-md'
                                        : 'bg-slate-400/70 hover:bg-slate-600'
                                    }`}
                                  />
                                ))}
                              </div>

                              {/* Play / Pause toggle icon */}
                              <button
                                onClick={() => setHeroSlidePlaying(!heroSlidePlaying)}
                                className="p-1 px-1.5 h-8 w-8 rounded-full bg-slate-200/50 hover:bg-slate-300/60 border border-slate-300/30 cursor-pointer flex items-center justify-center text-slate-700 transition shadow-2xs"
                                title={heroSlidePlaying ? 'Pause Slideshow' : 'Play Slideshow'}
                              >
                                {heroSlidePlaying ? <Pause size={9} className="fill-slate-700 stroke-none" /> : <Play size={9} className="fill-slate-700 stroke-none ml-[1px]" />}
                              </button>

                              {/* Target filter shortcut */}
                              <button
                                onClick={() => {
                                  onPageChange('products');
                                  setProductFilter(currentSlide.productFilterValue);
                                  setProductSearch('');
                                }}
                                className="text-[10px] font-bold tracking-wider text-slate-700 hover:text-slate-950 flex items-center gap-1.5 transition uppercase ml-2 bg-white hover:bg-slate-50 border border-slate-300/50 px-3.5 py-1.5 rounded-md cursor-pointer shadow-2xs"
                              >
                                {isKR ? '해당 제품라인 바로가기' : 'Explore Series'}
                                <ArrowRight size={11} strokeWidth={2.5} />
                              </button>
                            </div>
                          </div>

                          {/* Inner Slide Right Hand Column with Interactive Holographic Design */}
                          <div className="lg:col-span-5 flex items-center justify-center p-6 bg-transparent rounded-2xl min-h-[240px] lg:min-h-auto transition-all duration-300">
                            <div className="w-full h-full flex items-center justify-center relative">
                              
                              {/* Ambient Scanning Signal Rings */}
                              <div className="absolute w-72 h-72 rounded-full bg-blue-500/5 blur-3xl animate-pulse pointer-events-none" />
                              <div className="absolute w-44 h-44 rounded-full border border-blue-500/10 animate-[ping_3.5s_linear_infinite] pointer-events-none" />
                              <div className="absolute w-56 h-56 rounded-full border border-teal-500/10 animate-[spin_16s_linear_infinite] border-dashed pointer-events-none" />

                              {/* Transparent container for product view (supports background-removed cutouts) */}
                              <div className="w-full max-w-[390px] aspect-[4/3] p-5 flex items-center justify-center hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
                                
                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                  {currentSlide.image ? (
                                    <img
                                      src={currentSlide.image}
                                      alt={currentSlide.series[isKR ? 'KR' : 'EN']}
                                      className="w-full max-w-[300px] max-h-[190px] sm:max-h-[220px] object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.04)] group-hover:scale-[1.04] transition-all duration-500 ease-out"
                                      referrerPolicy="no-referrer"
                                    />
                                  ) : (
                                    <div className="w-full max-w-[300px] max-h-[190px] sm:max-h-[220px] flex items-center justify-center group-hover:scale-[1.04] transition-all duration-500 ease-out">
                                      {currentSlide.svg}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      );
                    })()}
                    
                  </div>
                </div>

                {/* 2. Hero Words Block (Moved to Bottom layout) */}
                <div className="w-full relative overflow-hidden bg-slate-50/50" id="hero-bottom-info">
                  {/* Custom Uploaded Background Video for Hero Bottom Section */}
                  {(resolvedVideos['carouselVideo'] || customContent.carouselVideoUrl) && (
                    <video
                      key={resolvedVideos['carouselVideo'] || customContent.carouselVideoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none opacity-100"
                      referrerPolicy="no-referrer"
                    >
                      <source src={resolvedVideos['carouselVideo'] || customContent.carouselVideoUrl} type="video/mp4" /* sensor_image_video_carousel - [위치: 홈(메인) 화면 슬라이드 쇼 바로 아래, '센서나인 주식회사 기술연구원...' 소개 글자가 적힌 영역의 대형 배경 비디오 파일 경로] */ />
                    </video>
                  )}

                  <div className="max-w-[1360px] mx-auto px-6 py-24 sm:px-12 sm:py-32 lg:px-16 lg:py-40 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
                      {/* Editorial left introduction */}
                      <div className="lg:col-span-8 text-left space-y-4">
                        <div className="flex items-center gap-2 font-black tracking-widest text-[10px] uppercase" style={{ color: primaryColor }}>
                          <div className="w-8 h-[2px]" style={{ backgroundColor: primaryColor }}></div>
                          {isKR ? '센서나인 주식회사 기술연구원' : 'SENSOR NINE PRECISION LABS'}
                        </div>

                        <h1 className="text-2xl sm:text-3xl lg:text-4.5xl font-black text-slate-950 leading-tight tracking-tight whitespace-normal sm:whitespace-nowrap">
                          {isKR ? customContent.heroTitleKR : customContent.heroTitleEN}
                        </h1>

                        <p className="text-xs sm:text-sm text-white max-w-2xl leading-relaxed font-semibold">
                          {isKR ? customContent.heroSubKR : customContent.heroSubEN}
                        </p>
                      </div>

                      {/* Editorial right layout with action calls */}
                      <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-3 justify-start lg:items-end w-full">
                        <button 
                          onClick={() => {
                            onPageChange('products');
                            setProductFilter('All');
                            setProductSearch('');
                          }}
                          style={{ backgroundColor: primaryColor }}
                          className="text-xs text-white px-6 py-4 rounded-lg font-bold hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 shadow-sm w-full sm:w-auto lg:w-48 cursor-pointer text-center animate-pulse"
                          id="hero-products-btn"
                        >
                          {isKR ? '전체 제품라인 둘러보기' : 'Browse All Products'}
                          <ArrowRight size={14} />
                        </button>
                        <button 
                          onClick={() => onPageChange('contact')}
                          className="text-xs text-slate-700 bg-slate-50 hover:bg-slate-100 px-6 py-4 rounded-lg font-bold transition-all border border-slate-200/80 w-full sm:w-auto lg:w-48 text-center cursor-pointer hover:shadow-2xs active:scale-[0.99]"
                          id="hero-contact-btn"
                        >
                          {isKR ? '설계 컨설팅 문의' : 'Consultation Request'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Structured Editorial Core KPI Metrics with Interactivity and Icons */}
            <ScrollFadeIn>
              <section className="bg-slate-50/40 border-b border-slate-200/80 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/60 relative">
                
                {/* KPI Card 1 */}
                <div className="p-10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group hover:bg-white bg-transparent">
                  {/* Soft Color Highlight strip & Background Blur mesh */}
                  <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-rose-500 transition-all duration-300" />
                  <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-rose-500/5 blur-xl pointer-events-none transition-transform duration-500 group-hover:scale-150" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-4xl lg:text-5xl font-black font-mono tracking-tight" style={{ color: primaryColor }}>
                        {customContent.kpi1Value || '0.01°C'}
                      </div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose-50 text-rose-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                        <Thermometer size={18} strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-xs uppercase text-slate-800 tracking-wider">
                      {isKR ? (customContent.kpi1TitleKR || '정밀 눈금 디그리 오차') : (customContent.kpi1TitleEN || 'Precision Accuracy Limit')}
                    </h4>
                  </div>
                  
                  <p className="text-xs text-slate-400 mt-6 leading-relaxed font-semibold">
                    {isKR 
                      ? (customContent.kpi1DescKR || '정밀 오일교정 항온조에서 전수 전자기 신장 테스트를 통과한 초고위성 감도.') 
                      : (customContent.kpi1DescEN || 'Unsurpassed tolerance limits verified through multi-day calibration chamber processes.')}
                  </p>
                </div>

                {/* KPI Card 2 */}
                <div className="p-10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group hover:bg-white bg-transparent">
                  <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-teal-500 transition-all duration-300" />
                  <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-teal-500/5 blur-xl pointer-events-none transition-transform duration-500 group-hover:scale-150" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-4xl lg:text-5xl font-black font-mono tracking-tight" style={{ color: secondaryColor }}>
                        {customContent.kpi2Value || '45+'}
                      </div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-teal-50 text-teal-600 transition-all duration-500 group-hover:scale-115">
                        <ShieldCheck size={18} strokeWidth={2.5} />
                      </div>
                    </div>

                    <h4 className="font-bold text-xs uppercase text-slate-800 tracking-wider">
                      {isKR ? (customContent.kpi2TitleKR || '보유 지식 특허 및 실용신안') : (customContent.kpi2TitleEN || 'Exclusive Global Patents')}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-400 mt-6 leading-relaxed font-semibold">
                    {isKR 
                      ? (customContent.kpi2DescKR || '박막 소자 응용, 하우징 패킹, 전장 절연 등 자체 특허 포트폴리오를 보유.') 
                      : (customContent.kpi2DescEN || 'We own dynamic key patents securing electrical isolation and robust physical durability.')}
                  </p>
                </div>

                {/* KPI Card 3 */}
                <div className="p-10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group hover:bg-white bg-transparent">
                  <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-slate-800 transition-all duration-300" />
                  <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-slate-800/5 blur-xl pointer-events-none transition-transform duration-500 group-hover:scale-150" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-4xl lg:text-5xl font-black font-mono tracking-tight text-slate-800">
                        {customContent.kpi3Value || '24/7'}
                      </div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100/90 text-slate-600 transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110">
                        <Cpu size={18} strokeWidth={2.5} />
                      </div>
                    </div>

                    <h4 className="font-bold text-xs uppercase text-slate-800 tracking-wider">
                      {isKR ? (customContent.kpi3TitleKR || '무정전 열 모니터링 시스템') : (customContent.kpi3TitleEN || 'Smart Fault Isolation')}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-400 mt-6 leading-relaxed font-semibold">
                    {isKR 
                      ? (customContent.kpi3DescKR || '가혹조건인 화학 공정, 전력 변전소, 전기배틀 등에서 반영구적 성능 획득.') 
                      : (customContent.kpi3DescEN || 'Semi-permanent service lifespan demonstrated across dense chemical storage units.')}
                  </p>
                </div>

              </section>
            </ScrollFadeIn>

            {/* Core Highlights & Products Highlight Grid wrapped in ScrollFadeIn */}
            <ScrollFadeIn>
              <section className="py-16 sm:py-20 px-6 sm:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: primaryColor }}>
                      {isKR 
                        ? (customContent.homePortfolioBadgeKR || 'CORE PORTFOLIO') 
                        : (customContent.homePortfolioBadgeEN || 'CORE PORTFOLIO')}
                    </div>
                    <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight text-slate-930 italic">
                      {isKR 
                        ? (customContent.homePortfolioTitleKR || '제품 소개') 
                        : (customContent.homePortfolioTitleEN || 'Product Lineup')}
                    </h2>
                  </div>
                  <button 
                    onClick={() => {
                      onPageChange('products');
                      setProductFilter('All');
                      setProductSearch('');
                    }}
                    className="font-bold text-xs flex items-center gap-1 group active:translate-x-1 transition-transform cursor-pointer"
                    style={{ color: primaryColor }}
                  >
                    {isKR 
                      ? (customContent.homePortfolioBtnKR || '전체 사양 및 단가 확인하기') 
                      : (customContent.homePortfolioBtnEN || 'Discover entire specs table')}
                    <ChevronRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>

                {/* Premium Bento representation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="product-highlight-grid">
                  {(() => {
                    const featuredList: any[] = [];
                    const p1 = PRODUCTS_LIST.find(p => p.id === customContent.featuredProduct1Id);
                    const p2 = PRODUCTS_LIST.find(p => p.id === customContent.featuredProduct2Id);
                    const p3 = PRODUCTS_LIST.find(p => p.id === customContent.featuredProduct3Id);

                    if (p1) featuredList.push(p1);
                    if (p2) featuredList.push(p2);
                    if (p3) featuredList.push(p3);

                    const rem = PRODUCTS_LIST.filter(p => !featuredList.some(f => f.id === p.id));
                    while (featuredList.length < 3 && rem.length > 0) {
                      featuredList.push(rem.shift());
                    }

                    const displayList = featuredList.length >= 3 ? featuredList.slice(0, 3) : PRODUCTS_LIST.slice(0, 3);

                    return displayList.map((prod) => (
                      <div key={prod.model} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
                        <div>
                          {/* Image Box: Enlarge the picture beautifully */}
                          <div className="w-full h-44 bg-gradient-to-b from-slate-50 to-slate-100/40 border border-slate-100 rounded-lg overflow-hidden flex items-center justify-center p-4 relative mb-4 shadow-3xs select-none">
                            {prod.imageUrl ? (
                              <img
                                src={prod.imageUrl}
                                alt={isKR ? prod.nameKR : prod.nameEN}
                                className="max-w-full max-h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500 ease-out"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div className="flex flex-col items-center justify-center text-slate-300 gap-2 group-hover:text-slate-400 transition-colors">
                                <Thermometer className="w-10 h-10 stroke-[1.5]" />
                                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 font-mono">SENSOR NINE SPEC</span>
                              </div>
                            )}
                          </div>

                          <div className="flex justify-between items-center mb-3">
                            <span className="text-[10px] font-mono font-extrabold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md">
                              {prod.model}
                            </span>
                            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-md tracking-wider uppercase" style={{ backgroundColor: secondaryColor + '10', color: secondaryColor }}>
                              {prod.category} Sensor
                            </span>
                          </div>
                          
                          <h3 className="font-extrabold text-base text-slate-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-1">
                            {isKR ? prod.nameKR : prod.nameEN}
                          </h3>
                          
                          <div className="space-y-2 border-t border-b border-rose-100/40 py-3 mb-4">
                            <div className="flex justify-between text-xs">
                              <span className="text-slate-400 font-medium">{isKR ? '측정 범위' : 'Temp Range'}</span>
                              <span className="font-mono font-bold text-slate-700">{prod.range}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-slate-400 font-medium">{isKR ? '보증 정확도' : 'Accuracy'}</span>
                              <span className="font-mono font-black text-slate-950">{prod.accuracy}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-slate-400 font-medium">{isKR ? '설계 공법' : 'Structure'}</span>
                              <span className="text-slate-700 truncate max-w-44 text-right font-medium">{isKR ? prod.ratingKR : prod.ratingEN}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 flex items-center justify-between pt-2 border-t border-slate-50">
                          <span className="text-[10px] text-slate-400 font-semibold truncate max-w-40">
                            {isKR ? prod.appKR : prod.appEN}
                          </span>
                          <button 
                            onClick={() => {
                              onPageChange('products');
                              const categories = [
                                '온도센서',
                                '배관용온도센서',
                                '외기용온도센서',
                                '실내온도센서',
                                'K-TYPE센서',
                                '바이메탈센서',
                                '불꽃감지센서',
                                '수위감지센서',
                                '기타'
                              ];
                              const matchedCat = categories.find(cat => matchesProductCategory(prod, cat)) || 'All';
                              setProductFilter(matchedCat);
                              setProductSearch('');
                            }}
                            className="p-1 px-3 rounded-md text-[10px] font-extrabold border border-slate-200 transition-all duration-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 cursor-pointer shadow-3xs"
                          >
                            {isKR ? '상세 스펙' : 'Specs'}
                          </button>
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              </section>
            </ScrollFadeIn>

            {/* Premium Corporate Styled News & Notices CMS Block */}
            <ScrollFadeIn>
              <section className="bg-gradient-to-b from-slate-50 to-[#f1f3f7] border-t border-slate-200/80 py-16 sm:py-20">
                <div className="px-6 sm:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Left Asymmetric Title Card */}
                  <div className="lg:col-span-4 flex flex-col justify-start space-y-4">
                    <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: primaryColor }}>
                      LATEST MEDIA CMS
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 italic leading-none">
                      {isKR ? '센서나인 공지사항' : 'SensorNine Announcements'}
                    </h2>
                    <div className="w-12 h-[3px] bg-slate-400 rounded-full" />
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold max-w-md pt-2">
                      {isKR 
                        ? '사내 연구 진척 보고, 주력 특허 및 대형 글로벌 기술 전시회 참가 이력을 게시합니다.' 
                        : 'Transparency in technology updates, certificates, and overseas assembly developments.'}
                    </p>
                  </div>

                  {/* Right Content Cards Stack */}
                  <div className="lg:col-span-8 space-y-4" id="home-news-column">
                    {posts.length === 0 ? (
                      <div className="bg-white rounded-xl p-10 text-center text-slate-400 text-xs border border-slate-200 shadow-2xs">
                        {isKR ? '현재 등록된 게시물이 없습니다.' : 'There are currently no active posts.'}
                      </div>
                    ) : (
                      <>
                        {posts.slice(0, 4).map((post) => (
                          <div key={post.id} className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all duration-300 flex flex-col sm:flex-row justify-between sm:items-center gap-4 group">
                            <div className="space-y-2 max-w-xl">
                              <div className="flex items-center gap-3">
                                <span className="text-[9px] font-black uppercase bg-slate-100 text-[#FF4E00] px-2.5 py-1 rounded-md select-none">
                                  {isKR ? post.categoryKR : post.categoryEN}
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono tracking-wider font-semibold">
                                  {post.date}
                                </span>
                              </div>
                              <h4 
                                className="font-extrabold text-sm sm:text-base text-slate-930 group-hover:text-[#FF4E00] transition-colors cursor-pointer leading-tight" 
                                onClick={() => setSelectedPost(post)}
                              >
                                {isKR ? post.titleKR : post.titleEN}
                              </h4>
                              <p className="text-xs text-slate-400 line-clamp-1 font-medium select-none">
                                {isKR ? post.contentKR : post.contentEN}
                              </p>
                            </div>
                            <div className="flex items-center gap-4 shrink-0 text-xs text-slate-400">
                              <button 
                                onClick={() => setSelectedPost(post)}
                                className="bg-slate-50 hover:bg-slate-900 hover:text-white p-2 px-3.5 rounded-md border border-slate-200 text-slate-600 font-black text-[10px] transition-all cursor-pointer shadow-3xs animate-none"
                              >
                                {isKR ? '더보기' : 'Read'}
                              </button>
                            </div>
                          </div>
                        ))}
                        
                        {posts.length > 4 && (
                          <div className="flex justify-end pt-2">
                            <button
                              onClick={() => {
                                onPageChange('notices');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="text-xs font-bold text-slate-700 hover:text-[#FF4E00] transition-all flex items-center gap-1 group cursor-pointer"
                            >
                              <span>{isKR ? '전체 공지사항 보러가기' : 'View All Announcements'}</span>
                              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </section>
            </ScrollFadeIn>
          </div>
        )}

        {/* ==================== PAGE: ABOUT ==================== */}
        {currentPage === 'about' && (
          <div className="py-12 px-4 sm:px-8 max-w-5xl mx-auto animate-fade-in space-y-24">
            {/* Elegant Header with Scroll Reaction Header Block */}
            <ScrollFadeIn>
              <div className="border-b border-slate-200 pb-8">
                <div className="text-xs font-bold uppercase tracking-widest mb-1 font-mono" style={{ color: primaryColor }}>
                  CORPORATE OVERVIEW
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight italic">
                  {isKR ? '회사 소개' : 'ABOUT US'}
                </h1>
              </div>
            </ScrollFadeIn>

            {/* Interactive 3D Robot & CEO Vision Split Layout */}
            <ScrollFadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Side: CEO message & Philosophy Details */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="border-l-4 pl-5 border-slate-300 italic">
                    <blockquote className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed whitespace-pre-line">
                      "{isKR ? customContent.aboutGreetingKR : customContent.aboutGreetingEN}"
                    </blockquote>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xs uppercase text-slate-400 font-extrabold tracking-widest">
                      Philosophy & Dedication
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed whitespace-pre-line font-medium">
                      {isKR ? customContent.aboutIntroKR : customContent.aboutIntroEN}
                    </p>
                  </div>
                </div>

                {/* Right Side: High-tech minimalist container with cropped Spline 3D Robot Model */}
                <div className="lg:col-span-6">
                  <div className="relative w-full h-[380px] md:h-[420px] rounded-2xl bg-transparent overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300">
                    {/* Embedding requested Spline 3D Robot Iframe with cropped bottom */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <iframe 
                        src='https://my.spline.design/nexbotrobotcharacterconcept-k9YLueYUae8Q1ZZ5w7VaNXwK/' 
                        frameBorder='0' 
                        className="absolute top-0 left-0 w-full h-[142%] border-0"
                        style={{ pointerEvents: 'auto', border: 'none' }}
                        title="SensorNine 3D Dynamic Sensor Robot Core"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Elegant Building Showcase Section */}
            <ScrollFadeIn>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200/60 p-6 md:p-8 rounded-2xl shadow-3xs overflow-hidden">
                <div className="md:col-span-6 space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#243f90] bg-[#243f90]/5 px-2.5 py-1 rounded-sm font-mono">
                    {isKR ? (customContent.aboutFacilityBadgeKR || '신사옥 전경') : (customContent.aboutFacilityBadgeEN || 'CORPORATE FACILITY')}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight leading-tight">
                    {isKR ? (customContent.aboutFacilityTitleKR || '센서나인(주) 본사 및 기술연구소') : (customContent.aboutFacilityTitleEN || 'Sensor Nine Co., Ltd. headquarters & R&D Center')}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-semibold">
                    {isKR 
                      ? (customContent.aboutFacilityDescKR || '정밀 온도센서 설계부터 양산까지 완벽한 클린룸 시설과 첨단 계측 및 분석 장비를 갖춘 최적의 인텔리전트 엔지니어링 허브입니다.') 
                      : (customContent.aboutFacilityDescEN || 'A state-of-the-art intelligent engineering hub equipped with full dust-free cleanroom facilities and advanced diagnostic instrumentation, supporting seamless sensor research through high-capacity manufacturing.')}
                  </p>
                  
                  {/* Visual spec checklist */}
                  <div className="space-y-2 pt-2 text-[11px] font-bold text-slate-600 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#243f90]" />
                      <span>{isKR ? (customContent.aboutFacilityPoint1KR || '연구소 인가: 기업부설 기술연구소 기술인정법인') : (customContent.aboutFacilityPoint1EN || 'Certified Corporate R&D Laboratory')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#243f90]" />
                      <span>{isKR ? (customContent.aboutFacilityPoint2KR || '생산 능력: NTC 써미스터센서 연간 약 3,000만 개 이상') : (customContent.aboutFacilityPoint2EN || 'Production Volume: Over 30M sensors annually')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#243f90]" />
                      <span>{isKR ? (customContent.aboutFacilityPoint3KR || '품질 인증: ISO 9001 / ISO 14001 인증 사업장') : (customContent.aboutFacilityPoint3EN || 'Quality Auditing: ISO 9001 / ISO 14001 Registered')}</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-6 overflow-hidden rounded-xl">
                  {/* Slide-in horizontally linked to the scroll position progress */}
                  <ScrollLinkedSlide direction="right">
                    <div className="relative group max-w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-50">
                      <img 
                        src={customContent.aboutImageUrl || '/images/sensor_company_i1.jpeg' /* sensor_image_video_about - [위치: 메인 화면의 '회사 소개(About Us)' 섹션 우측 장비/신사옥 소개 배경 이미지] */} 
                        alt="Sensor Nine Corporate Headquarters Building" 
                        className="w-full h-auto block group-hover:scale-105 transition-all duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                        <span className="text-[11px] text-white font-semibold">
                          {isKR ? '센서나인(주) 사옥 전경' : 'Sensor Nine Co., Ltd. Head Facility'}
                        </span>
                      </div>
                    </div>
                  </ScrollLinkedSlide>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Graphic Bento Box Core Value - Scrolling staggered entries */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <ScrollFadeIn className="h-full">
                <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-2xs h-full transition-transform hover:-translate-y-1 hover:shadow-xs duration-300">
                  <div className="w-8 h-8 rounded mb-4 flex items-center justify-center text-white" style={{ backgroundColor: primaryColor }}>
                    <Cpu size={16} />
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-800 uppercase tracking-widest">{isKR ? '초정밀 온도 감지' : 'High-Precision Sensing'}</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed font-semibold">
                    {isKR 
                      ? '보일러 및 에어컨 등 스마트 가전과 산업 장비의 효율을 극대화하기 위해 미세한 온도 변화까지 오차 없이 완벽하게 감지합니다.'
                      : 'Seamlessly detecting even the slightest temperature fluctuations to maximize the efficiency of smart appliances and industrial equipment, such as boilers and air conditioners.'}
                  </p>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn className="h-full">
                <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-2xs h-full transition-transform hover:-translate-y-1 hover:shadow-xs duration-300">
                  <div className="w-8 h-8 rounded mb-4 flex items-center justify-center text-white" style={{ backgroundColor: secondaryColor }}>
                    <Award size={16} />
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-800 uppercase tracking-widest">{isKR ? '완벽한 제어와 신뢰' : 'Perfect Control & Trust'}</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed font-semibold">
                    {isKR 
                      ? '고성능 콘트롤러 시스템 기술력과 ISO9001 기반의 철저한 품질 관리를 바탕으로, 고객사 제품의 스마트화와 안전성을 동시에 완성합니다.'
                      : 'Delivering both smart integration and safety for client products, built on high-performance controller systems and rigorous ISO 9001-certified quality control.'}
                  </p>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn className="h-full">
                <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-2xs h-full transition-transform hover:-translate-y-1 hover:shadow-xs duration-300">
                  <div className="w-8 h-8 rounded mb-4 flex items-center justify-center text-slate-800 bg-slate-100">
                    <ShieldCheck size={16} />
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-800 uppercase tracking-widest">{isKR ? '맞춤형 최적 설계' : 'Customized Engineering'}</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed font-semibold">
                    {isKR 
                      ? '특수한 환경을 위한 이중관 소켓 및 브라켓 체결용 센서 등 고객사가 필요로 하는 다양한 산업 스펙트럼에 맞춰 최적의 솔루션을 제공합니다.'
                      : 'Providing optimal, tailor-made solutions for diverse industrial requirements, including double-pipe socket and bracket-mounted sensors engineered for specialized environments.'}
                  </p>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Corporate Timeline History */}
            <ScrollFadeIn>
              <div className="border-t border-slate-200 pt-16">
                <h3 className="text-lg font-bold text-slate-900 mb-8 uppercase tracking-widest italic flex items-center gap-2 font-mono">
                  <Clock size={18} style={{ color: primaryColor }} />
                  {isKR ? '연혁 및 주요 실적' : 'Chronology & Milestones'}
                </h3>
                
                <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-10" id="corporate-timeline">
                  {TIMELINE_ITEMS.map((item, index) => (
                    <div key={item.year} className="relative group">
                      {/* Circle timeline dot */}
                      <div 
                        className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-white transition-transform group-hover:scale-125"
                        style={{ 
                          borderColor: index === 0 ? primaryColor : secondaryColor,
                          backgroundColor: index === 0 ? primaryColor : 'white'
                        }}
                      />
                      
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                        <span className="text-lg font-bold font-mono tracking-wider text-slate-900 shrink-0">
                          {item.year}
                        </span>
                        <div>
                          <h4 className="font-extrabold text-sm text-slate-800">
                            {isKR ? item.titleKR : item.titleEN}
                          </h4>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed font-medium">
                            {isKR ? item.descKR : item.descEN}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        )}

        {/* ==================== PAGE: PRODUCTS ==================== */}
        {currentPage === 'products' && (() => {
          const filteredProducts = PRODUCTS_LIST.filter(prod => {
            const matchesCategory = matchesProductCategory(prod, productFilter);
            const matchesSearch = 
              prod.model.toLowerCase().includes(productSearch.toLowerCase()) ||
              prod.nameKR.toLowerCase().includes(productSearch.toLowerCase()) ||
              prod.nameEN.toLowerCase().includes(productSearch.toLowerCase()) ||
              prod.appKR.toLowerCase().includes(productSearch.toLowerCase()) ||
              prod.appEN.toLowerCase().includes(productSearch.toLowerCase());
            return matchesCategory && matchesSearch;
          });

          const PRODUCTS_PER_PAGE = 12;
          const totalProductPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
          const activeProductPage = Math.min(Math.max(1, productsPage), Math.max(1, totalProductPages));
          const startIndex = (activeProductPage - 1) * PRODUCTS_PER_PAGE;
          const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

          return (
            <div className="py-12 px-4 sm:px-8 max-w-6xl mx-auto animate-fade-in">
              {/* Header */}
              <div className="border-b border-slate-200 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: primaryColor }}>
                    DATASHEETS
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 italic tracking-tight whitespace-nowrap">
                    {isKR ? '제품 소개' : 'PRODUCTS'}
                  </h1>
                </div>

                {/* Advanced search/filters */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder={isKR ? "모델명 또는 용도 검색..." : "Search Model or Apps..."}
                      value={productSearch}
                      onChange={(e) => { setProductSearch(e.target.value); setProductsPage(1); }}
                      className="pl-9 pr-4 py-1.5 text-xs rounded-md border border-slate-300 w-48 sm:w-64 bg-white focus:outline-hidden focus:border-blue-500 placeholder-slate-400"
                    />
                  </div>

                  {/* Dynamic Category Tabs */}
                  <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-lg border border-slate-200 shrink-0 select-none">
                    {[
                      { value: 'All', labelKR: '전체', labelEN: 'All' },
                      { value: '온도센서', labelKR: '온도센서', labelEN: 'Temp Sensors' },
                      { value: '배관용온도센서', labelKR: '배관용온도센서', labelEN: 'Pipe Temp Sensors' },
                      { value: '외기용온도센서', labelKR: '외기용온도센서', labelEN: 'Outdoor Temp Sensors' },
                      { value: '실내온도센서', labelKR: '실내온도센서', labelEN: 'Indoor Temp Sensors' },
                      { value: 'K-TYPE센서', labelKR: 'K-TYPE센서', labelEN: 'K-Type Sensors' },
                      { value: '바이메탈센서', labelKR: '바이메탈센서', labelEN: 'Bi-Metal Sensors' },
                      { value: '불꽃감지센서', labelKR: '불꽃감지센서', labelEN: 'Flame Sensors' },
                      { value: '수위감지센서', labelKR: '수위감지센서', labelEN: 'Water Level Sensors' },
                      { value: '기타', labelKR: '기타', labelEN: 'Others' }
                    ].map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => { setProductFilter(cat.value); setProductsPage(1); }}
                        className={`text-[10px] px-3 py-1.5 rounded transition-all font-bold cursor-pointer ${
                          productFilter === cat.value
                            ? 'bg-white shadow-xs text-slate-800 border border-slate-200/50'
                            : 'text-slate-400 hover:text-slate-700'
                        }`}
                        style={productFilter === cat.value ? { color: primaryColor } : {}}
                      >
                        {isKR ? cat.labelKR : cat.labelEN}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Mode & Count Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 select-none">
                <div className="text-xs text-slate-500 font-medium">
                  {isKR ? '총' : 'Total'} <span className="font-bold text-slate-800 font-mono text-sm">{filteredProducts.length}</span> {isKR ? '개의 고정밀 센서 규격 제공' : 'high-precision sensor specifications listed'}
                </div>

                {/* Grid / Table Toggle Controls */}
                <div className="bg-slate-100 p-0.5 rounded-md flex gap-0.5 border border-slate-200 shrink-0">
                  <button
                    onClick={() => setProductViewMode('grid')}
                    className={`p-1 px-3 rounded transition-all flex items-center gap-1 text-[10px] font-bold cursor-pointer ${
                      productViewMode === 'grid'
                        ? 'bg-white border border-slate-200/40 text-slate-900 shadow-2xs'
                        : 'text-slate-400 hover:text-slate-700'
                    }`}
                    style={productViewMode === 'grid' ? { color: primaryColor } : {}}
                  >
                    <LayoutGrid size={11} />
                    {isKR ? '카탈로그형 (카드)' : 'Catalog (Grid)'}
                  </button>
                  <button
                    onClick={() => setProductViewMode('table')}
                    className={`p-1 px-3 rounded transition-all flex items-center gap-1 text-[10px] font-bold cursor-pointer ${
                      productViewMode === 'table'
                        ? 'bg-white border border-slate-200/40 text-slate-900 shadow-2xs'
                        : 'text-slate-400 hover:text-slate-700'
                    }`}
                    style={productViewMode === 'table' ? { color: primaryColor } : {}}
                  >
                    <List size={11} />
                    {isKR ? '전체 상세사양 (표)' : 'Specs List (Table)'}
                  </button>
                </div>
              </div>

              {/* Display Products: Grid Mode */}
              {productViewMode === 'grid' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" id="product-grid-layout">
                  {paginatedProducts.map((prod) => {
                    const categoryName = getProductCategoryDisplay(prod);
                    const isWaterLevel = categoryName.includes('수위');
                    const isPipe = categoryName.includes('배관');
                    const isAmbient = categoryName.includes('외기') || categoryName.includes('실내');
                    const isHighTemp = categoryName.includes('K-TYPE') || categoryName.includes('바이메탈');
                    const isAccessory = categoryName.includes('기타');

                    return (
                      <div 
                        key={prod.model} 
                        className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                      >
                        <div>
                          {/* Image area with structured vector styling placeholders */}
                          <div className="relative aspect-video w-full bg-slate-50 border-b border-slate-100 flex items-center justify-center overflow-hidden">
                            {prod.imageUrl ? (
                              <img 
                                src={prod.imageUrl} 
                                alt={isKR ? prod.nameKR : prod.nameEN} 
                                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div className="flex flex-col items-center gap-2 select-none text-slate-400 p-4">
                                {/* Category Specific SVG Icons */}
                                {isPipe ? (
                                  <svg className="w-10 h-10 stroke-slate-300 group-hover:stroke-blue-400 transition-colors" fill="none" strokeWidth="1.2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M3 15h18M12 3v12M12 9a2 2 0 110-4 2 2 0 010 4z" />
                                  </svg>
                                ) : isAmbient ? (
                                  <svg className="w-10 h-10 stroke-slate-300 group-hover:stroke-blue-400 transition-colors" fill="none" strokeWidth="1.2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
                                  </svg>
                                ) : isHighTemp ? (
                                  <svg className="w-10 h-10 stroke-slate-300 group-hover:stroke-blue-400 transition-colors" fill="none" strokeWidth="1.2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                  </svg>
                                ) : isWaterLevel ? (
                                  <svg className="w-10 h-10 stroke-slate-300 group-hover:stroke-blue-400 transition-colors" fill="none" strokeWidth="1.2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .9-.6 1.6-1.5 1.6H5.25c-.9 0-1.5-.7-1.5-1.6v-4.25m16.5 0a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25 2.25" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m-3-12h6" />
                                  </svg>
                                ) : isAccessory ? (
                                  <svg className="w-10 h-10 stroke-slate-300 group-hover:stroke-blue-400 transition-colors" fill="none" strokeWidth="1.2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593v18H9.594v-18z" />
                                    <circle cx="12" cy="12" r="2" />
                                  </svg>
                                ) : (
                                  <svg className="w-10 h-10 stroke-slate-300 group-hover:stroke-blue-400 transition-colors" fill="none" strokeWidth="1.2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v15m0 0a3 3 0 100 6 3 3 0 000-6zm-4-9h8" />
                                  </svg>
                                )}
                                <span className="text-[10px] font-mono tracking-wider font-extrabold text-slate-400 uppercase mt-1">
                                  {isKR ? '도면 사양 커스텀' : 'DESIGN ON REQUEST'}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Content description mapping */}
                          <div className="p-5">
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span className="font-mono text-[10px] font-black text-slate-400 tracking-wider">
                                {prod.model}
                              </span>
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500 truncate max-w-40 border border-slate-200/40">
                                {getProductCategoryDisplay(prod)}
                              </span>
                            </div>
                            
                            <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 leading-snug mb-3">
                              {isKR ? prod.nameKR : prod.nameEN}
                            </h3>

                            {/* Specification Compact Matrix */}
                            <div className="space-y-1.5 bg-slate-50 rounded-lg p-3 text-[11px] border border-slate-200/40 font-medium font-sans">
                              <div className="flex justify-between items-center py-0.5 border-b border-slate-100">
                                <span className="text-slate-400 font-bold">{isKR ? '측정 범위' : 'Operating Range'}</span>
                                <span className="font-mono text-slate-700 font-bold text-[10px]">{prod.range}</span>
                              </div>
                              <div className="flex justify-between items-center py-0.5 border-b border-slate-100">
                                <span className="text-slate-400 font-bold">{isKR ? '공차 정밀도' : 'Tolerance'}</span>
                                <span className="font-mono text-emerald-600 font-black bg-emerald-50 px-1 py-0.2 rounded text-[10px]">
                                  {prod.accuracy}
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 pt-1">
                                <span className="text-slate-400 font-bold text-[10px]">{isKR ? '보호 등급 / 외경 설계' : 'Protection Rating'}</span>
                                <span className="text-slate-600 text-[10px] truncate">{isKR ? prod.ratingKR : prod.ratingEN}</span>
                              </div>
                            </div>

                            {/* App Scope */}
                            <div className="mt-3.5 text-[11px] text-slate-500 leading-relaxed font-medium">
                              <span className="font-bold text-slate-700 block mb-0.5">{isKR ? '공정 적용분야:' : 'Core Application:'}</span>
                              <p className="line-clamp-2 md:line-clamp-3">{isKR ? prod.appKR : prod.appEN}</p>
                            </div>
                          </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-4 pt-0 border-t border-slate-100 mt-2 bg-slate-50/40 flex items-center justify-between gap-2.5">
                          <div className="w-full flex items-center justify-between">
                            <span className="text-[10px] text-slate-400 font-bold italic">
                              {isKR ? '※ SUS 하우징 규격 설계 지원' : '※ Customized dimensions on request'}
                            </span>
                            <button
                              onClick={() => onPageChange('contact')}
                              className="text-[10px] font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-0.5"
                            >
                              {isKR ? '상담' : 'Quote'}
                              <ArrowRight size={10} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Display Products: Table Mode */}
              {productViewMode === 'table' && (
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs animate-fade-in" id="product-table-layout">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase tracking-widest font-black text-[10px]">
                          <th className="p-4 pl-6 w-1/12">{isKR ? '모델명' : 'Model Code'}</th>
                          <th className="p-4 w-3/12">{isKR ? '카테고리' : 'Category'}</th>
                          <th className="p-4 w-3/12">{isKR ? '상세 제품명' : 'Specification Name'}</th>
                          <th className="p-4 w-2/12">{isKR ? '측정 범위' : 'Operating Range'}</th>
                          <th className="p-4 w-1/12">{isKR ? '공차 정밀도' : 'Tolerance'}</th>
                          <th className="p-4 pr-6 w-2/12">{isKR ? '설계 공법 / 보호 등급' : 'Housing & Rating'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedProducts.map((prod, index) => (
                          <tr 
                            key={prod.model} 
                            className={`border-b border-slate-100 hover:bg-slate-50/80 transition-colors ${
                              index % 2 === 1 ? 'bg-slate-50/30' : ''
                            }`}
                          >
                            <td className="p-4 pl-6 font-mono font-bold text-slate-900 whitespace-nowrap">
                              {prod.model}
                            </td>
                            <td className="p-4">
                              <span 
                                className="font-bold text-[9px] px-2.5 py-1 rounded text-slate-600 bg-slate-100 border border-slate-200/50 block w-max truncate max-w-48"
                              >
                                {getProductCategoryDisplay(prod)}
                              </span>
                            </td>
                            <td className="p-4 font-bold text-slate-800">
                              <div className="flex items-center gap-2">
                                {prod.imageUrl && (
                                  <div className="w-8 h-8 rounded border border-slate-200 bg-white/50 shrink-0 overflow-hidden shadow-2xs">
                                    <img src={prod.imageUrl} alt={prod.nameKR} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                  </div>
                                )}
                                <span>{isKR ? prod.nameKR : prod.nameEN}</span>
                              </div>
                            </td>
                            <td className="p-4 font-mono font-semibold text-slate-700">
                              {prod.range}
                            </td>
                            <td className="p-4">
                              <span className="font-mono text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">
                                {prod.accuracy}
                              </span>
                            </td>
                            <td className="p-4 pr-6 text-slate-500 whitespace-nowrap">
                              {isKR ? prod.ratingKR : prod.ratingEN}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Pagination Control */}
              {totalProductPages > 1 && (
                <div className="flex items-center justify-center gap-1 mt-10 select-none">
                  <button
                    onClick={() => {
                      setProductsPage(1);
                      const scroller = document.getElementById("preview-viewport-scroller");
                      if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    disabled={activeProductPage === 1}
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all bg-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer text-xs"
                  >
                    &laquo;
                  </button>
                  <button
                    onClick={() => {
                      setProductsPage(prev => Math.max(1, prev - 1));
                      const scroller = document.getElementById("preview-viewport-scroller");
                      if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    disabled={activeProductPage === 1}
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all bg-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer text-xs mr-1"
                  >
                    &lsaquo;
                  </button>

                  {Array.from({ length: totalProductPages }, (_, i) => i + 1).map(num => (
                    <button
                      key={num}
                      onClick={() => {
                        setProductsPage(num);
                        const scroller = document.getElementById("preview-viewport-scroller");
                        if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-8 h-8 text-xs font-black transition-all rounded px-2 cursor-pointer ${
                        activeProductPage === num 
                          ? 'text-blue-600 text-sm border border-blue-105 bg-blue-50/50' 
                          : 'text-slate-700 hover:text-blue-600'
                      }`}
                    >
                      {num}
                    </button>
                  ))}

                  <button
                    onClick={() => {
                      setProductsPage(prev => Math.min(totalProductPages, prev + 1));
                      const scroller = document.getElementById("preview-viewport-scroller");
                      if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    disabled={activeProductPage === totalProductPages}
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all bg-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer text-xs ml-1"
                  >
                    &rsaquo;
                  </button>
                  <button
                    onClick={() => {
                      setProductsPage(totalProductPages);
                      const scroller = document.getElementById("preview-viewport-scroller");
                      if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    disabled={activeProductPage === totalProductPages}
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all bg-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer text-xs"
                  >
                    &raquo;
                  </button>
                </div>
              )}

              {/* Empty State Banner */}
              {filteredProducts.length === 0 && (
                <div className="p-16 text-center text-slate-400 bg-white rounded-xl border border-slate-200 border-dashed">
                  <Search size={32} className="mx-auto mb-3 text-slate-300" />
                  <p className="font-bold text-slate-600 text-sm mb-1">
                    {isKR ? '검색 필터와 일치하는 제품이 없습니다.' : 'No sensor models matched your query.'}
                  </p>
                  <p className="text-xs text-slate-400">
                    {isKR ? '단어 철자를 확인해주시거나 다른 카테고리를 선택해보세요.' : 'Double-check spellings or try clearing the current filter.'}
                  </p>
                </div>
              )}

              {/* Industrial Quote */}
              <div className="mt-8 bg-slate-100 rounded-lg p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Custom Probe Manufacturing</span>
                  <p className="text-xs text-slate-700 font-medium">
                    {isKR 
                      ? '설비 도면 규격에 근거하여 SUS 등급 하우징, 리드선 코팅, 프로브 직경 등 일체형 맞춤 사양 커스텀을 지원합니다.' 
                      : 'We fabricate fully customized physical housings, cabling options, and probe diameter metrics for direct integration.'}
                  </p>
                </div>
                <button 
                  onClick={() => onPageChange('contact')}
                  className="bg-white hover:bg-slate-50 px-4 py-2 border rounded-md font-bold text-xs shadow-2xs shrink-0 whitespace-nowrap"
                >
                  {isKR ? '사양 검토 문의' : 'Consult with Engineer'}
                </button>
              </div>
            </div>
          );
        })()}

        {/* ==================== PAGE: EQUIPMENT (장비보유현황) ==================== */}
        {currentPage === 'equipment' && (
          <div className="py-12 px-4 sm:px-8 max-w-6xl mx-auto animate-fade-in">
            {/* Header */}
            <div className="border-b border-slate-200 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: primaryColor }}>
                  PRODUCTION & CALIBRATION FACILITIES
                </div>
                <h1 className="text-4xl font-bold text-slate-900 italic tracking-tight">
                  {isKR ? '장비보유현황' : 'EQUIPMENT STATUS'}
                </h1>
              </div>

              {/* Category Filter Tabs */}
              <div className="bg-slate-100 p-0.5 rounded-md flex gap-1 border border-slate-200 shrink-0 self-start md:self-end">
                {['All', '교정', '계측', '테스트', '생산', '가공'].map((cat) => {
                  const filterValue = cat === 'All' ? 'All' : cat;
                  const labelKR = cat === 'All' ? '전체' : cat;
                  const labelEN = cat === 'All' ? 'All' : cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setEquipmentFilter(filterValue);
                        const filtered = EQUIPMENT_LIST.filter(eq => {
                          if (filterValue === 'All') return true;
                          return eq.categoryKR.includes(filterValue) || eq.categoryEN.includes(filterValue);
                        });
                        if (filtered.length > 0) {
                          setSelectedEquipmentId(filtered[0].id);
                        }
                      }}
                      className={`text-[10px] px-2.5 py-1.5 rounded transition-all font-bold ${
                        equipmentFilter === filterValue
                          ? 'bg-white shadow-xs text-slate-900'
                          : 'text-slate-400 hover:text-slate-700'
                      }`}
                      style={equipmentFilter === filterValue ? { color: primaryColor } : {}}
                    >
                      {isKR ? labelKR : labelEN}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Interactive Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Equipment Interactive Cards List */}
              <div className="lg:col-span-5 space-y-3 max-h-[640px] overflow-y-auto pr-1">
                {EQUIPMENT_LIST.filter(eq => {
                  if (equipmentFilter === 'All') return true;
                  return eq.categoryKR.includes(equipmentFilter) || eq.categoryEN.includes(equipmentFilter);
                }).map((eq) => {
                  const isSelected = selectedEquipmentId === eq.id;
                  return (
                    <div
                      key={eq.id}
                      onClick={() => setSelectedEquipmentId(eq.id)}
                      className={`p-4 rounded-lg border text-left cursor-pointer transition-all duration-200 relative overflow-hidden group ${
                        isSelected 
                          ? 'bg-white border-slate-900 shadow-md ring-1 ring-slate-900/5 translate-x-1' 
                          : 'bg-white/80 hover:bg-white border-slate-200 shadow-2xs hover:shadow-xs'
                      }`}
                    >
                      {/* Left accent bar */}
                      <div 
                        className="absolute left-0 top-0 bottom-0 w-1 transition-all"
                        style={{ backgroundColor: isSelected ? primaryColor : 'transparent' }}
                      />

                      <div className="flex justify-between items-start gap-2 pl-1">
                        <div>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                            {isKR ? eq.categoryKR : eq.categoryEN}
                          </span>
                          <h3 className="font-bold text-sm text-slate-800 tracking-tight leading-tight group-hover:text-slate-900 transition-colors">
                            {isKR ? eq.nameKR : eq.nameEN}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-500 font-semibold mt-1 inline-block">
                            {eq.model}
                          </span>
                        </div>

                        {/* Quantity Badge */}
                        <div className="text-right shrink-0">
                          <span 
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full inline-block"
                            style={{ 
                              backgroundColor: isSelected ? primaryColor + '15' : 'rgba(241, 245, 249, 1)',
                              color: isSelected ? primaryColor : 'rgba(100, 116, 139, 1)'
                            }}
                          >
                            {isKR ? `총 ${eq.count}대` : `QTY: ${eq.count}`}
                          </span>
                        </div>
                      </div>

                      {/* Micro Specs Summary inside card */}
                      <p className="mt-2.5 text-[11px] text-slate-600 line-clamp-1 italic border-t border-slate-100/80 pt-2 font-medium">
                        {isKR ? eq.specKR : eq.specEN}
                      </p>
                    </div>
                  );
                })}

                {EQUIPMENT_LIST.filter(eq => {
                  if (equipmentFilter === 'All') return true;
                  return eq.categoryKR.includes(equipmentFilter) || eq.categoryEN.includes(equipmentFilter);
                }).length === 0 && (
                  <div className="bg-white/50 border border-slate-200 border-dashed rounded-lg p-10 text-center font-mono text-xs text-slate-400">
                    {isKR ? '선택한 카테고리의 보유 설비가 존재하지 않습니다.' : 'No facilities found in this category.'}
                  </div>
                )}
              </div>

              {/* Right Column: High-fidelity Detailed View and Equipment Photo Panel */}
              <div className="lg:col-span-7">
                {(() => {
                  const eq = EQUIPMENT_LIST.find(e => e.id === selectedEquipmentId) || EQUIPMENT_LIST[0];
                  if (!eq) return null;

                  return (
                    <div className="bg-white rounded-xl border border-slate-200/90 shadow-md overflow-hidden flex flex-col h-full animate-fade-in" style={{ contentVisibility: 'auto' }}>
                      {/* Top Title Bar */}
                      <div className="bg-slate-900 text-slate-400 px-6 py-4 flex justify-between items-center border-b border-slate-800 shrink-0">
                        <div className="space-y-0.5">
                          <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold block">
                            {isKR ? '보유 가동 설비 현황 사양' : 'EQUIPMENT SYSTEM METRICS'}
                          </span>
                          <span className="text-white text-xs font-mono font-bold tracking-tight">
                            {eq.model} // SENSOR9_FACILITY_{eq.id.toUpperCase()}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-green-400 font-bold flex items-center gap-1.5 bg-green-950/55 px-2.5 py-1 rounded border border-green-800/40">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                          OP_NORMAL
                        </span>
                      </div>

                      {/* Photo Representation / Equipment Status Image Area */}
                      <div className="bg-slate-50 aspect-video w-full relative sm:h-80 flex items-center justify-center p-6 select-none overflow-hidden shrink-0 border-b border-slate-200">
                        {eq.imageUrl ? (
                          <div className="relative w-full h-full flex items-center justify-center bg-transparent overflow-hidden">
                            <img 
                              src={eq.imageUrl} 
                              alt={eq.nameKR} 
                              className="w-full h-full object-contain max-h-[280px] rounded-lg shadow-sm" 
                              referrerPolicy="no-referrer"
                            />
                            <span className="absolute bottom-3 left-3 bg-slate-900 text-white font-mono text-[9px] px-2 py-0.5 rounded border border-slate-700/50">
                              📷 {isKR ? '실물 사진 등록 완료' : 'Verified Device Photo'}
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center text-center space-y-3.5 p-6 border-2 border-dashed border-slate-200 rounded-xl bg-white/70 max-w-sm">
                            <div className="p-3.5 bg-slate-100 rounded-full text-slate-400">
                              <Camera size={26} strokeWidth={1.5} />
                            </div>
                            <div className="space-y-1">
                              <p className="font-bold text-xs text-slate-700">
                                {isKR ? '보유 장비 실물 사진 준비중' : 'Equipment Photo Pending'}
                              </p>
                              <p className="text-[10px] text-slate-400 leading-relaxed max-w-[240px]">
                                {isKR 
                                  ? '이 공정 장비의 실물 작동 사진 및 부품 실사 이미지는 순차적으로 업데이트 중입니다.' 
                                  : 'Real operational photographs of our manufacturing or testing system are currently being processed.'}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content details block */}
                      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                        <div className="space-y-5">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                              {isKR ? '설비 카테고리 / 현황 사양' : 'CLASSIFICATION SPECIFICATION'}
                            </span>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="text-xs font-bold text-slate-800 bg-slate-100 rounded px-2.5 py-1">
                                {isKR ? eq.categoryKR : eq.categoryEN}
                              </span>
                              <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded px-2.5 py-1">
                                {isKR ? eq.specKR : eq.specEN}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                              {isKR ? eq.nameKR : eq.nameEN}
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                              {isKR ? eq.descKR : eq.descEN}
                            </p>
                          </div>
                        </div>

                        {/* Extra info metrics footer */}
                        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                          <div className="flex items-center gap-4 text-xs">
                            <div className="space-y-0.5">
                              <span className="text-[10px] text-slate-400 font-bold block">{isKR ? '보유 수량' : 'QUANTITY'}</span>
                              <span className="font-bold text-slate-800">{isKR ? `${eq.count} 대 상시 가동 중` : `${eq.count} Units Active`}</span>
                            </div>
                            <div className="border-l border-slate-200 pl-4 space-y-0.5">
                              <span className="text-[10px] text-slate-400 font-bold block">{isKR ? '안정성 등급' : 'CERT LEVEL'}</span>
                              <span className="font-mono font-bold text-green-600">ITS-90 MASTER CAL</span>
                            </div>
                          </div>

                          <button 
                            onClick={() => onPageChange('contact')}
                            className="text-xs font-bold border border-slate-300 hover:border-slate-800 rounded px-4 py-2 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
                          >
                            <span>{isKR ? '원형/맞춤공정 문의' : 'Inquire Facility Spec'}</span>
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

            </div>

            {/* Footnote summary standard calibrations */}
            <div className="mt-12 p-6 bg-slate-100 rounded-lg border border-slate-200">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-slate-800" />
                {isKR ? '정밀도 보정 및 국가 계측 소급성 체계 표준' : 'TRACEABLE PRECISION CALIBRATION METRICS'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {isKR 
                  ? '센서나인(주) 가좌동 본사에 구축된 초정밀 교정 유조(Calibration Oil Bath) 및 이중 환경 챔버 장비군은 한국표준과학연구원(KRISS) 및 공인 계측 기관과의 상시 1차 기준기 ITS-90 소급 연계를 유지하여, 당사에서 공급되는 모든 NTC 써미스터 저항 오차 한도를 0.05% 이내로 엄격하게 생산 관리합니다.'
                  : 'All calibration oil baths and shock chambers deployed in SensorNine factory are traceably interlinked with national metrology standards (ITS-90 standard). This keeps all individual custom temperature probe shipments calibrated within ±0.05% default metrics.'}
              </p>
            </div>
          </div>
        )}

        {/* ==================== PAGE: R&D ==================== */}
        {currentPage === 'rd' && (
          <div className="bg-white min-h-screen text-slate-800 animate-fade-in">
            {/* 1. Cinematic Hero Section with Background Video & Premium Scroll Parallax + Rising Texts */}
            <ScrollLinkedHeroAndVideo 
              isKR={isKR} 
              customContent={customContent} 
              primaryColor={primaryColor} 
              secondaryColor={secondaryColor} 
              resolvedVideos={resolvedVideos}
              isHeroVideoMuted={isHeroVideoMuted}
            />

            {/* Main technology grid content wrapper */}
            <div className="py-16 px-4 sm:px-8 max-w-5xl mx-auto space-y-20" id="core-tech-section">
              
              {/* 2. Core Tech Grid Section */}
              <ScrollFadeIn className="space-y-10">
                <div className="text-center">
                  <span className="text-xs font-black tracking-widest uppercase block mb-1" style={{ color: primaryColor }}>
                    CORE TECHNOLOGIES
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    {isKR ? '센서나인 혁신 기술 포트폴리오' : 'Sensor9 Innovation Engineering Lines'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mt-2 leading-relaxed">
                    {isKR 
                      ? '검증된 다이 어플리케이션 설계 기술과 초압 축 가공 노하우를 바탕으로 완성된 고유 오차율 보상 솔루션을 소개합니다.'
                      : 'Unveiling patented calibration algorithms and high-density micro-sheaths designed to handle rapid convective drifts.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Tech item 1 */}
                  <div className="bg-slate-50 border border-slate-100/80 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div className="space-y-4">
                      {/* Sub tech banner image container with visual styling */}
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-slate-900 border border-slate-200 shadow-xs">
                        <video
                          key={resolvedVideos['rdTech1'] || customContent.rdTech1VideoUrl || "tech1-default"}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        >
                          <source src={resolvedVideos['rdTech1'] || customContent.rdTech1VideoUrl || "/videos/sensor_R&D_v3.mp4" /* sensor_image_video_tech1 - [위치: '연구개발(R&D)' 페이지 '원천 기술' 섹션의 1번 기술 카드 배경 루프 비디오] */} type="video/mp4" />
                        </video>
                        {/* 100% unmodified video background - no dim overlays */}
                        <span className="absolute top-2 left-2 text-[8px] font-mono font-bold bg-blue-600 text-white px-2 py-0.5 rounded shadow uppercase">
                          NTC THERMAL
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-extrabold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                          {isKR 
                            ? (customContent.rdTech1TitleKR || '고정밀 NTC 열적외선 감지 기술') 
                            : (customContent.rdTech1TitleEN || 'High-Precision NTC Thermal Sensing')}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {isKR 
                            ? (customContent.rdTech1DescKR || '특허받은 NTC 박막 써미스터 반도체 칩 기술을 활용하여, 비접촉식 및 가혹한 환경에서도 열대류 오차를 0.01°C 극소 범위 내에서 실시간 제어 및 추출하는 핵심 기술입니다.')
                            : (customContent.rdTech1DescEN || 'Utilizing patented NTC thin-film semiconductor chips to extract real-time ambient thermal fluctuations within a 0.01°C error boundary even in hazardous high-pressure situations.')}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                      <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                        Accuracy: 0.01°C
                      </span>
                      <button
                        onClick={() => {
                          setActiveRdVideoUrl(resolvedVideos['rdTech1'] || customContent.rdTech1VideoUrl || "/videos/sensor_R&D_v3.mp4" /* sensor_image_video_tech1_btn - [위치: '연구개발(R&D)' 페이지 '원천 기술' 섹션의 1번 카드 우측 하단 재생 버튼 클릭 시 모달창에서 재생되는 비디오] */);
                          setActiveRdVideoTitle(isKR ? (customContent.rdTech1TitleKR || '고정밀 NTC 열적외선 감지 기술') : (customContent.rdTech1TitleEN || 'High-Precision NTC Thermal Sensing'));
                        }}
                        className="flex items-center gap-1 px-3 py-1 rounded text-[10px] font-bold text-white shadow-3xs cursor-pointer hover:opacity-90"
                        style={{ backgroundColor: primaryColor }}
                      >
                        <Play size={10} fill="currentColor" />
                        <span>{isKR ? '작동원리 재생' : 'Watch Principle'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Tech item 2 */}
                  <div className="bg-slate-50 border border-slate-100/80 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div className="space-y-4">
                      {/* Sub tech banner image container with visual styling */}
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-slate-900 border border-slate-200 shadow-xs">
                        <video
                          key={resolvedVideos['rdTech2'] || customContent.rdTech2VideoUrl || "tech2-default"}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        >
                          <source src={resolvedVideos['rdTech2'] || customContent.rdTech2VideoUrl || "https://assets.mixkit.co/videos/preview/mixkit-searching-for-data-on-a-computer-screen-41584-large.mp4" /* sensor_image_video_tech2 - [위치: '연구개발(R&D)' 페이지 '원천 기술' 섹션의 2번 기술 카드 배경 루프 비디오] */} type="video/mp4" />
                        </video>
                        {/* 100% unmodified video background - no dim overlays */}
                        <span className="absolute top-2 left-2 text-[8px] font-mono font-bold bg-[#10B981] text-white px-2 py-0.5 rounded shadow uppercase">
                          SIGNAL FILTER
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-extrabold text-base text-slate-900 group-hover:text-emerald-600 transition-colors">
                          {isKR 
                            ? (customContent.rdTech2TitleKR || '스마트 노이즈 필터링 알고리즘') 
                            : (customContent.rdTech2TitleEN || 'Smart Noise Filtering Algorithm')}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {isKR 
                            ? (customContent.rdTech2DescKR || '배관 진동 및 유류 화합물에서 발생하는 정전기적 고주파 아티팩트를 소프트웨어 필터로 전처리하여, 보정 회로를 거치지 않고도 균일하고 안정적인 실시간 시그널 출력을 보장합니다.')
                            : (customContent.rdTech2DescEN || 'Pre-filters high-frequency vibration and electrostatic noise artifact through custom signal processing models, ensuring steady calibration outputs without complex wiring overhead.')}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                      <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                        High Speed Bypass
                      </span>
                      <button
                        onClick={() => {
                          setActiveRdVideoUrl(resolvedVideos['rdTech2'] || customContent.rdTech2VideoUrl || "https://assets.mixkit.co/videos/preview/mixkit-searching-for-data-on-a-computer-screen-41584-large.mp4" /* sensor_image_video_tech2_btn - [위치: '연구개발(R&D)' 페이지 '원천 기술' 섹션의 2번 카드 우측 하단 재생 버튼 클릭 시 모달창에서 재생되는 비디오] */);
                          setActiveRdVideoTitle(isKR ? (customContent.rdTech2TitleKR || '스마트 노이즈 필터링 알고리즘') : (customContent.rdTech2TitleEN || 'Smart Noise Filtering Algorithm'));
                        }}
                        className="flex items-center gap-1 px-3 py-1 rounded text-[10px] font-bold text-white shadow-3xs cursor-pointer hover:opacity-90"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        <Play size={10} fill="currentColor" />
                        <span>{isKR ? '알고리즘 분석' : 'Watch Principle'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Tech item 3 */}
                  <div className="bg-slate-50 border border-slate-100/80 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div className="space-y-4">
                      {/* Sub tech banner image container with visual styling */}
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-slate-900 border border-slate-200 shadow-xs">
                        <video
                          key={resolvedVideos['rdTech3'] || customContent.rdTech3VideoUrl || "tech3-default"}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        >
                          <source src={resolvedVideos['rdTech3'] || customContent.rdTech3VideoUrl || "https://assets.mixkit.co/videos/preview/mixkit-computer-processor-and-circuit-board-details-41582-large.mp4" /* sensor_image_video_tech3 - [위치: '연구개발(R&D)' 페이지 '원천 기술' 섹션의 3번 기술 카드 배경 루프 비디오] */} type="video/mp4" />
                        </video>
                        {/* 100% unmodified video background - no dim overlays */}
                        <span className="absolute top-2 left-2 text-[8px] font-mono font-bold bg-slate-700 text-white px-2 py-0.5 rounded shadow uppercase">
                          MEMS MODULE
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-extrabold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                          {isKR 
                            ? (customContent.rdTech3TitleKR || '초소형 MEMS 센서 패키징') 
                            : (customContent.rdTech3TitleEN || 'Ultra-miniature MEMS Packaging')}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {isKR 
                            ? (customContent.rdTech3DescKR || '이중 장력 차폐 마이크로 시스 케이싱 기술을 통해 극도로 미세하고 좁은 가전 부속 공간이나 배터리 팩 유압 셀 구조물 내부에 완전 밀착 실장하여 방수 및 진동 충격을 원천 방어합니다.')
                            : (customContent.rdTech3DescEN || 'Employs micro-sheath casing techniques allowing packaging into dense electronics and battery layout grids with robust waterproofing, thermal shielding, and shock resistance.')}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                        IP68 WATERPROOF
                      </span>
                      <button
                        onClick={() => {
                          setActiveRdVideoUrl(resolvedVideos['rdTech3'] || customContent.rdTech3VideoUrl || "https://assets.mixkit.co/videos/preview/mixkit-computer-processor-and-circuit-board-details-41582-large.mp4" /* sensor_image_video_tech3_btn - [위치: '연구개발(R&D)' 페이지 '원천 기술' 섹션의 3번 카드 우측 하단 재생 버튼 클릭 시 모달창에서 재생되는 비디오] */);
                          setActiveRdVideoTitle(isKR ? (customContent.rdTech3TitleKR || '초소형 MEMS 센서 패키징') : (customContent.rdTech3TitleEN || 'Ultra-miniature MEMS Packaging'));
                        }}
                        className="flex items-center gap-1 px-3 py-1 rounded text-[10px] font-bold text-white shadow-3xs cursor-pointer hover:opacity-90"
                        style={{ backgroundColor: primaryColor }}
                      >
                        <Play size={10} fill="currentColor" />
                        <span>{isKR ? '정밀공정 보기' : 'Watch Principle'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>

              {/* 3. Interactive R&D Process Flow */}
              <ScrollFadeIn className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 sm:p-10 space-y-8 shadow-xs">
                <div className="text-center md:text-left">
                  <span className="text-xs font-black tracking-widest uppercase block mb-1" style={{ color: secondaryColor }}>
                    DEVELOPMENT WORKFLOW
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {isKR ? '센서나인 R&D 프로세스' : 'Advanced Sensory Development Steps'}
                  </h2>
                  <p className="text-xs text-slate-500 mt-2 max-w-xl">
                    {isKR 
                      ? '기획, 디자인 설계, 극한 환경 시험 및 대규모 양산 구축에 이르기까지 가혹한 품질 4단계를 스마트하게 통합합니다.'
                      : 'Integrating rigorous structural inspections and tracing calibration values through our robust cloud controller standards.'}
                  </p>
                </div>

                {/* Stepper progress indicator gauge */}
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${((activeRdStep + 1) / 4) * 100}%`,
                      background: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
                    }}
                  />
                </div>

                {/* Horizontal Stepper buttons grid for desktop/stacked on mobile */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { titleKR: '01 기획 (Planning)', titleEN: '01 Planning', desc: 'Requirements Modelling' },
                    { titleKR: '02 설계 (Design)', titleEN: '02 Design', desc: 'Sleeve/Sealing Design' },
                    { titleKR: '03 테스트 (Testing)', titleEN: '03 Testing', desc: 'Stress Chamber' },
                    { titleKR: '04 양산 (Production)', titleEN: '04 Production', desc: 'Zero-Defect Quality Assurance' },
                  ].map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveRdStep(idx)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        activeRdStep === idx 
                          ? 'bg-white shadow-md' 
                          : 'bg-slate-100/50 hover:bg-slate-100 border-transparent text-slate-500'
                      }`}
                      style={{ 
                        borderColor: activeRdStep === idx ? primaryColor : 'transparent',
                      }}
                    >
                      <span className="block text-[8px] font-mono tracking-widest font-black uppercase text-slate-400">
                        STAGE {idx + 1}
                      </span>
                      <span className={`block text-xs font-black mt-1 ${activeRdStep === idx ? 'text-slate-900' : 'text-slate-600'}`}>
                        {isKR ? step.titleKR : step.titleEN}
                      </span>
                      <span className="block text-[9px] text-slate-400 mt-1.5 font-sans font-medium truncate">
                        {step.desc}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Active step details panel with checklist */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 min-h-[160px] flex flex-col justify-between animate-fade-in">
                  {activeRdStep === 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-bold">STAGE 01</span>
                        <h4 className="font-extrabold text-sm text-slate-900">{isKR ? '요구 사양 분석 및 수치 모델링' : 'Requirement Analysis & Numerical Modeling'}</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {isKR 
                          ? '고객사의 수위/온도 제어 제약 사양을 정확히 검증하고, NTC 써미스터 소자 및 바이메탈 특성에 최적화된 유동·상전이 수치 모델링을 바탕으로 제품의 기밀 한계를 선제적으로 설정합니다.' 
                          : 'Precisely verifying water level and temperature control requirements, and setting preventive sealing limits based on numerical modeling optimized for NTC thermistors and bimetal characteristics.'}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                        <li className="flex items-center gap-1.5">
                          <span className="text-emerald-500">✓</span> {isKR ? 'NTC 써미스터 및 각종 온도센서 소자 정밀 특성 분석' : 'Precise property analysis of NTC thermistors and temperature sensor elements'}
                        </li>
                        <li className="flex items-center gap-1.5">
                          <span className="text-emerald-500">✓</span> {isKR ? '수동/자동 이중 환경 회로 가배선 설계 및 시뮬레이션' : 'Simulation & modeling of manual/automatic dual-environment wiring circuits'}
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeRdStep === 1 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono bg-emerald-50 text-emerald-600 px-2.5 py-0.5 rounded-full font-bold">STAGE 02</span>
                        <h4 className="font-extrabold text-sm text-slate-900">{isKR ? '슬리브 기밀 및 맞춤형 체결 구조 설계' : 'Sleeve Sealing & Custom Coupler Design'}</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {isKR
                          ? '에어컨, 지열 시스템, 이중관 소켓 및 브라켓 체결형 구조 등 다양한 산업용 가혹 조건에 맞추어 센서를 완벽하게 보호하는 특수 슬리브(Sleeve) 및 실링(Sealing) 기밀 구조를 정밀 설계합니다.'
                          : 'Precision designing protective sleeve and sealing structures that fully shield sensors under extreme industrial environments, including air conditioning, geothermal systems, double-wall sockets, and bracket mounts.'}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                        <li className="flex items-center gap-1.5">
                          <span className="text-emerald-500">✓</span> {isKR ? '이중관 소켓 체결(PT 1/2 TAP) 및 브라켓 체결용 최적 구조 설계' : 'Optimization design for multi-tube socket connections (PT 1/2 TAP) and brackets'}
                        </li>
                        <li className="flex items-center gap-1.5">
                          <span className="text-emerald-500">✓</span> {isKR ? '저수위센서 및 유량조절밸브의 환경 대응형 메커니즘 설계' : 'Designing highly adaptable mechanism models for low water level sensors & control valves'}
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeRdStep === 2 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-bold">STAGE 03</span>
                        <h4 className="font-extrabold text-sm text-slate-900">{isKR ? '극한 환경 및 신뢰성 테스트' : 'Extreme Environmental & Reliability Testing'}</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {isKR
                          ? '자체 스트레스 챔버(Stress Chamber) 및 급속가열(RTP) 검증 장비를 활용하여 고온, 고습, 극저온, 고압 등 실제 필드 이상의 가혹 조건에서 센서의 열충격 수명과 신뢰성을 철저하게 검증합니다.'
                          : 'Rigorous life-span and thermal-shock reliability testing under high-temperature, high-humidity, cryogenic, high-pressure field conditions using our own Stress Chamber and Rapid Thermal Processing (RTP) equipment.'}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                        <li className="flex items-center gap-1.5">
                          <span className="text-emerald-500">✓</span> {isKR ? '스트레스 챔버를 이용한 가속 수명 및 가혹 환경 내구성 평가' : 'Accelerated life-span and environmental durability evaluation via stress chambers'}
                        </li>
                        <li className="flex items-center gap-1.5">
                          <span className="text-emerald-500">✓</span> {isKR ? '센서 기밀성 및 회로 작동 신뢰성의 제로 결함 검증' : 'Zero-defect validation of sealing tightness and circuit operation integrity'}
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeRdStep === 3 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono bg-[#10B981]/10 text-emerald-600 px-2.5 py-0.5 rounded-full font-bold">STAGE 04</span>
                        <h4 className="font-extrabold text-sm text-slate-900">{isKR ? '불량 제로 검수 및 책임 생산 시스템' : 'Zero-Defect Quality Inspection & Accountability System'}</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {isKR
                          ? '안정적인 대량 양산 공정 속에서도 완벽한 품질을 유지하기 위해 철저한 전수 불량 검수 시스템을 가동하여 \'불량률 0%\'를 달성합니다. 또한 공정별로 명확한 품질 책임 담당자를 지정하여 신뢰할 수 있는 고품질 제품만을 출하합니다.'
                          : 'Operating a rigorous all-out inspection system to achieve "0% defect rate" while maintaining high output during mass production processes, along with appointing process accountability managers to ship only highly reliable products.'}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                        <li className="flex items-center gap-1.5">
                          <span className="text-emerald-500">✓</span> {isKR ? '불량률 0% 실현을 위한 생산 라인 내 고정밀 불량 검수 공정 상시 가동' : '24/7 high-precision defect monitoring across production lines for 0% failure rate'}
                        </li>
                        <li className="flex items-center gap-1.5">
                          <span className="text-emerald-500">✓</span> {isKR ? '제조 공정별 품질 책임 담당자 지정을 통한 철저한 품질 책임 생산제 실현' : 'Implementing accountability systems by designating certified quality managers for each manufacturing phase'}
                        </li>
                      </ul>
                    </div>
                  )}

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => onPageChange('contact')}
                      className="text-[10px] font-extrabold flex items-center gap-1 cursor-pointer transition-colors"
                      style={{ color: primaryColor }}
                    >
                      <span>{isKR ? '의뢰 및 기술협력 제안하기' : 'Request Technical Collaboration'}</span>
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </ScrollFadeIn>


            </div>

            {/* Lightbox Modal: Technology Operation principle video player */}
            {activeRdVideoUrl && (
              <div 
                className="fixed inset-0 z-50 bg-slate-950/75 flex items-center justify-center p-4"
                onClick={() => {
                  setActiveRdVideoUrl(null);
                  setActiveRdVideoTitle('');
                }}
              >
                <div 
                  className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 animate-slide-up"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-4 bg-slate-50 border-b border-slate-200/60 flex justify-between items-center">
                    <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                      {activeRdVideoTitle}
                    </h3>
                    <button 
                      onClick={() => {
                        setActiveRdVideoUrl(null);
                        setActiveRdVideoTitle('');
                      }}
                      className="text-slate-400 hover:text-slate-600 p-1 rounded-full cursor-pointer"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Video block */}
                  <div className="aspect-video bg-black relative">
                    <video
                      src={activeRdVideoUrl}
                      autoPlay
                      controls
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-4 bg-slate-50 border-t border-slate-200/60 text-center">
                    <p className="text-[10px] text-slate-400 font-mono font-medium">
                      TECHNICAL VISUAL REPRESENTATION SYSTEM - SENSOR9 LABS
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Lightbox Modal: Certification Detailed Inspection */}
            {selectedCertId && (() => {
              const matchedCert = CERTIFICATES_LIST.find(c => c.id === selectedCertId);
              if (!matchedCert) return null;

              return (
                <div 
                  className="fixed inset-0 z-50 bg-slate-950/75 flex items-center justify-center p-4 animate-fade-in"
                  onClick={() => setSelectedCertId(null)}
                >
                  <div 
                    className="bg-white rounded-2xl max-w-sm sm:max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 flex flex-col items-center space-y-6 animate-scale-up"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-full justify-between items-center flex border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-1 text-[#10B981] font-bold text-[10px] uppercase tracking-wider">
                        <Award size={14} />
                        <span>Certified Authority Doc</span>
                      </div>
                      <button 
                        onClick={() => setSelectedCertId(null)}
                        className="text-slate-400 hover:text-slate-600 p-1 rounded-full cursor-pointer"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    {/* Highly stylized Document certificate frame */}
                    <div className="w-full aspect-[1/1.4] bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-5 flex flex-col justify-between items-center text-center relative max-w-[280px]">
                      {/* Stylized background lines */}
                      <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 to-transparent pointer-events-none" />
                      
                      <div className="space-y-2 relative z-10 w-full mt-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto mb-2 font-black text-xs">
                          S9
                        </div>
                        <h4 className="text-[9px] font-mono tracking-widest font-extrabold text-blue-600 uppercase">
                          OFFICIAL CERTIFICATION DOCUMENT
                        </h4>
                        <div className="h-0.5 w-16 mx-auto" style={{ backgroundColor: primaryColor }} />
                      </div>

                      <div className="space-y-2 relative z-10 w-full">
                        <p className="text-xs font-black text-slate-900 leading-snug px-2">
                          {isKR ? matchedCert.nameKR : matchedCert.nameEN}
                        </p>
                        <span className="inline-block text-[9px] bg-emerald-50 text-emerald-600 border border-emerald-100 rounded px-2 py-0.5 font-bold uppercase tracking-widest">
                          AUTHENTICATED PASS
                        </span>
                      </div>

                      <div className="space-y-1 relative z-10 w-full text-slate-400 text-[8px] font-mono border-t border-slate-200/60 pt-4 mb-2">
                        <div className="flex justify-between">
                          <span>REGISTER:</span>
                          <span className="font-bold text-slate-600">{matchedCert.number}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ISSUER:</span>
                          <span className="font-bold text-slate-600">{matchedCert.issuer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>COMPLIANCE:</span>
                          <span className="font-bold text-[#10B981]">ITS-90 STANDARD</span>
                        </div>
                      </div>
                    </div>

                    {/* Call to action & Description */}
                    <div className="text-center space-y-2 w-full">
                      <h3 className="font-black text-base text-slate-900">{isKR ? '규격 및 인증 검정 원본' : 'Accredited Compliance Record'}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed px-4">
                        {isKR
                          ? `해당 인증서는 ${matchedCert.issuer}에 등록된 정식 공인 규격서로서, 센서나인(주) 온도 교정 장비 및 NTC 제조 라인의 기술 적성 등급을 명확히 보장합니다.`
                          : `Recognized globally under certificate authority bounds of ${matchedCert.issuer} ensuring utmost precision engineering limits.`}
                      </p>
                    </div>

                    <button 
                      onClick={() => setSelectedCertId(null)}
                      className="w-full py-2.5 rounded-xl text-xs font-semibold text-white leading-none hover:opacity-90 transition-all cursor-pointer shadow-sm text-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {isKR ? '확인 및 닫기' : 'Acknowledge Document'}
                    </button>
                  </div>
                </div>
              );
            })()}

          </div>
        )}

        {/* ==================== PAGE: QUALITY ==================== */}
        {currentPage === 'quality' && (() => {
          const certs = (() => {
            try {
              if (customContent.certificatesJson) {
                return JSON.parse(customContent.certificatesJson) as Certificate[];
              }
            } catch (e) {
              // fall through
            }
            return [
              {
                id: 'cert-1',
                titleKR: 'ISO 9001:2015 품질 경영 시스템 인증서',
                titleEN: 'ISO 9001:2015 Quality Management System Certificate',
                imageUrl: 'https://images.unsplash.com/photo-1589330694653-ded6df53f7eb?auto=format&fit=crop&q=80&w=600' /* sensor_image_video_cert1 - [위치: 홈 화면 맨 하단 '품질 및 특허 인증' 갤러리 섹션의 1번째 인증서 이미지 파일 경로] */
              },
              {
                id: 'cert-2',
                titleKR: 'CE 전기안전 적합성 적합인증서',
                titleEN: 'CE Declaration of Conformity Certification',
                imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600' /* sensor_image_video_cert2 - [위치: 홈 화면 맨 하단 '품질 및 특허 인증' 갤러리 섹션의 2번째 인증서 이미지 파일 경로] */
              },
              {
                id: 'cert-3',
                titleKR: 'NTC 써미스터 소자 접합 특허증',
                titleEN: 'Patent: NTC thermistor element binding stability',
                imageUrl: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600' /* sensor_image_video_cert3 - [위치: 홈 화면 맨 하단 '품질 및 특허 인증' 갤러리 섹션의 3번째 인증서 이미지 파일 경로] */
              }
            ] as Certificate[];
          })();

          return (
            <div className="py-12 px-4 sm:px-8 max-w-6xl mx-auto animate-fade-in space-y-12">
              {/* Header block */}
              <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: primaryColor }}>
                    Quality Assurance & Standards
                  </div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {isKR ? '품질 및 인증현황' : 'Quality & Certificates'}
                  </h1>
                </div>
              </div>

              {/* Grid block displaying certificates */}
              {certs.length === 0 ? (
                <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl p-8 shadow-3xs" id="empty-certificates">
                  <Award className="w-12 h-12 mx-auto text-slate-300 mb-3 animate-pulse" />
                  <h3 className="text-sm font-bold text-slate-700">
                    {isKR ? '등록된 인증서가 없습니다' : 'No registered certificates'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {isKR ? '인증서 원본 및 적합 표준 사본은 순차적으로 업데이트 중입니다.' : 'Certificates are being digitized for online verification.'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" id="certificates-grid">
                  {certs.map((cert) => (
                    <div 
                      key={cert.id}
                      onClick={() => setSelectedCustomCert(cert)}
                      className="group bg-white border border-slate-200 hover:border-slate-400 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col"
                      id={`cert-card-${cert.id}`}
                    >
                      {/* Original size block with safe frame wrapping */}
                      <div className="bg-slate-100 p-4 flex items-center justify-center aspect-[4/3] overflow-hidden relative border-b border-slate-150">
                        <img 
                          src={cert.imageUrl} 
                          alt={isKR ? cert.titleKR : cert.titleEN}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-all duration-500 ease-out"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white/95 backdrop-blur-3xs text-[10px] font-black text-slate-800 p-2 py-1 rounded-md shadow-xs flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-all">
                            <Eye size={12} style={{ color: primaryColor }} />
                            {isKR ? '자세히 보기' : 'View Detail'}
                          </span>
                        </div>
                      </div>

                      {/* Header caption */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div className="space-y-1">
                          <span className="text-[9px] uppercase tracking-widest font-black text-[#243f90] bg-[#243f90]/5 px-2 py-0.5 rounded">
                            {isKR ? '공식 증서' : 'OFFICIAL CERTIFICATE'}
                          </span>
                          <h4 className="font-extrabold text-sm text-slate-900 leading-snug pt-1 group-hover:text-blue-600 transition-colors">
                            {isKR ? cert.titleKR : cert.titleEN}
                          </h4>
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold mt-4 block text-right hover:underline">
                          {isKR ? '클릭하여 원본보기 →' : 'Click to inspect original →'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quality Standards checklist highlights/bento */}
              <div className="bg-slate-900 text-slate-300 rounded-2xl p-6 sm:p-10 space-y-6" id="quality-bento">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#10B981] font-mono">SENSOR NINE COMPLIANCE POLICY</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {isKR ? '철저한 수치검정 및 무결점 관리 체계 보증' : 'Systematic Metrology & Zero-defect Assurance'}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                      {isKR 
                        ? '센서나인(주)에서 제작되고 양산되는 모든 NTC 온도의 감지 소자는 국가 및 글로벌 규격에 정밀 대조하는 항온 유조 시설 내에서 계측된 고정밀 캘리브레이션 데이터를 부여받습니다. 규격과 품질에 대해 최고 수준의 책임 의식을 지니고 제품 설계 및 인증을 지속 승인받고 있습니다.'
                        : 'Every thermal chip fabricated at Sensor Nine carries solid electrical certification tracing back to standard thermo-wells. We maintain full accountability through continuously auditing clean rooms and precision testing.'}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-4 space-y-1.5">
                      <span className="text-[11px] font-black text-[#10B981] font-mono">01. ISO 9001:2015</span>
                      <p className="text-[11px] text-slate-300 font-extrabold">{isKR ? '품질경영시스템 준수' : 'Quality Management'}</p>
                    </div>
                    <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-4 space-y-1.5">
                      <span className="text-[11px] font-black text-[#10B981] font-mono">02. ISO 14001</span>
                      <p className="text-[11px] text-slate-300 font-extrabold">{isKR ? '환경경영 우수 사업장' : 'Eco Friendly Operations'}</p>
                    </div>
                    <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-4 space-y-1.5">
                      <span className="text-[11px] font-black text-[#10B981] font-mono">03. RoHS Certified</span>
                      <p className="text-[11px] text-slate-300 font-extrabold">{isKR ? '유해물질 완전 배제' : 'Zero Hazardous Material'}</p>
                    </div>
                    <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-4 space-y-1.5">
                      <span className="text-[11px] font-black text-[#10B981] font-mono">04. CE Compliant</span>
                      <p className="text-[11px] text-slate-300 font-extrabold">{isKR ? '유럽 수출 기기 안전' : 'CE Safety Marked'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lightbox Modal: Custom Certificate Detail Presentation - COMPREHENSIVE ORIGINAL SIZE */}
              {selectedCustomCert && (
                <div 
                  className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-4 sm:p-6 animate-fade-in"
                  onClick={() => setSelectedCustomCert(null)}
                  id="custom-cert-lightbox"
                >
                  <div 
                    className="bg-white rounded-2xl max-w-xl w-full p-4 sm:p-6 shadow-2xl border border-slate-100 flex flex-col space-y-4 animate-scale-up relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-full justify-between items-center flex border-b border-slate-150 pb-3 shrink-0">
                      <div className="flex items-center gap-1.5 text-[#243f90] font-black text-xs uppercase tracking-wider">
                        <Award size={15} />
                        <span>{isKR ? '공식 보증서 및 인증 품질 규격 원본' : 'AUTHENTICATED QUALITY CERTIFICATE'}</span>
                      </div>
                      <button 
                        onClick={() => setSelectedCustomCert(null)}
                        className="text-slate-400 hover:text-slate-600 p-1.5 rounded-full cursor-pointer hover:bg-slate-100 transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    {/* Original size block - no cropping! max aspect support */}
                    <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 flex items-center justify-center overflow-auto max-h-[60vh]">
                      <img 
                        src={selectedCustomCert.imageUrl} 
                        alt={isKR ? selectedCustomCert.titleKR : selectedCustomCert.titleEN}
                        className="max-h-[55vh] h-auto w-auto object-contain block mx-auto rounded shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Header caption */}
                    <div className="text-center space-y-1.5 pt-2 shrink-0">
                      <h3 className="font-extrabold text-[#111827] text-base leading-snug">
                        {isKR ? selectedCustomCert.titleKR : selectedCustomCert.titleEN}
                      </h3>
                    </div>

                    <button 
                      onClick={() => setSelectedCustomCert(null)}
                      className="w-full py-3 rounded-xl text-xs font-bold text-white tracking-widest leading-none hover:opacity-95 transition-all cursor-pointer shadow-md text-center shrink-0 uppercase"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {isKR ? '확인 및 닫기' : 'Close Document'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* ==================== PAGE: NOTICES ==================== */}
        {currentPage === 'notices' && (
          <div className="animate-fade-in bg-[#fbfcfd] text-slate-800">
            {/* Elegant Header */}
            <section className="bg-slate-900 text-white min-h-[180px] flex items-center justify-center p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,78,0,0.06),transparent_50%)]" />
              <div className="relative z-10 max-w-2xl mx-auto space-y-2">
                <span className="text-[10px] font-black tracking-widest uppercase text-[#FF4E00]">
                  {isKR ? '센서나인 공지사항' : 'SensorNine Announcements'}
                </span>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-none">
                  {isKR ? '연구 & 공지사항' : 'R&D & Company Announcements'}
                </h1>
                <p className="text-[11px] text-slate-400 font-medium">
                  {isKR 
                    ? '연구 진척 보고, 주력 특허 및 대형 글로벌 기술 전시회 참가 이력을 게시합니다.' 
                    : 'Posting our R&D progress, flagship patents, and global tech exhibition history.'}
                </p>
              </div>
            </section>

            {/* Content Grid */}
            <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
              {posts.length === 0 ? (
                <div className="bg-slate-50 rounded-xl p-16 text-center text-slate-400 text-xs border border-slate-200 shadow-2xs">
                  {isKR ? '현재 등록된 게시물이 없습니다.' : 'There are currently no active posts.'}
                </div>
              ) : (
                (() => {
                  const POSTS_PER_PAGE = 12;
                  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
                  
                  // Keep noticesPage bounded properly
                  const activePage = Math.min(Math.max(1, noticesPage), Math.max(1, totalPages));
                  const startIndex = (activePage - 1) * POSTS_PER_PAGE;
                  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

                  // Create page numbers to display
                  const pageNumbers = [];
                  for (let i = 1; i <= totalPages; i++) {
                    pageNumbers.push(i);
                  }

                  return (
                    <div>
                      {/* Grid cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedPosts.map((post) => (
                          <div 
                            key={post.id} 
                            onClick={() => setSelectedPost(post)}
                            className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.07)] border border-slate-100/50 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
                          >
                            <div className="flex flex-col">
                              {/* Card Image Thumbnail */}
                              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                <img 
                                  src={post.imageUrl || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'} 
                                  alt={isKR ? post.titleKR : post.titleEN}
                                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>

                              {/* Card Text Content */}
                              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                                <div className="space-y-2">
                                  {/* Custom Orange Badge "공지사항" */}
                                  <span className="block text-[11px] font-bold text-[#FF4E00] tracking-wider uppercase">
                                    {isKR ? post.categoryKR : post.categoryEN}
                                  </span>
                                  {/* Title with hover color change */}
                                  <h4 className="font-extrabold text-[15px] sm:text-[16px] text-slate-900 group-hover:text-[#FF4E00] transition-colors duration-200 leading-snug tracking-tight line-clamp-2">
                                    {isKR ? post.titleKR : post.titleEN}
                                  </h4>
                                </div>
                              </div>
                            </div>

                            {/* Footer Date Block */}
                            <div className="px-6 pb-6 pt-0 mt-auto">
                              <span className="text-[11px] text-slate-400 font-medium font-mono">
                                {post.date}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Pagination Control (Matches mockup precisely) */}
                      {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-1 mt-14 sm:mt-18 select-none">
                          {/* First Page button */}
                          <button
                            onClick={() => {
                              setNoticesPage(1);
                              window.scrollTo({ top: 300, behavior: 'smooth' });
                            }}
                            disabled={activePage === 1}
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200/85 flex items-center justify-center text-slate-400 hover:text-[#FF4E00] hover:border-[#FF4E00] transition-all bg-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer text-xs"
                          >
                            &laquo;
                          </button>

                          {/* Prev Page button */}
                          <button
                            onClick={() => {
                              setNoticesPage(prev => Math.max(1, prev - 1));
                              window.scrollTo({ top: 300, behavior: 'smooth' });
                            }}
                            disabled={activePage === 1}
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200/85 flex items-center justify-center text-slate-400 hover:text-[#FF4E00] hover:border-[#FF4E00] transition-all bg-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer text-xs mr-2"
                          >
                            &lsaquo;
                          </button>

                          {/* Page Numbers */}
                          {pageNumbers.map(num => (
                            <button
                              key={num}
                              onClick={() => {
                                setNoticesPage(num);
                                window.scrollTo({ top: 300, behavior: 'smooth' });
                              }}
                              className={`w-8 h-8 sm:w-9 sm:h-9 text-xs font-black transition-all rounded-md cursor-pointer ${
                                activePage === num 
                                  ? 'text-[#FF4E00] text-sm' 
                                  : 'text-slate-800 hover:text-[#FF4E00]'
                              }`}
                            >
                              {num}
                            </button>
                          ))}

                          {/* Next Page button */}
                          <button
                            onClick={() => {
                              setNoticesPage(prev => Math.min(totalPages, prev + 1));
                              window.scrollTo({ top: 300, behavior: 'smooth' });
                            }}
                            disabled={activePage === totalPages}
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200/85 flex items-center justify-center text-slate-400 hover:text-[#FF4E00] hover:border-[#FF4E00] transition-all bg-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer text-xs ml-2"
                          >
                            &rsaquo;
                          </button>

                          {/* Last Page button */}
                          <button
                            onClick={() => {
                              setNoticesPage(totalPages);
                              window.scrollTo({ top: 300, behavior: 'smooth' });
                            }}
                            disabled={activePage === totalPages}
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200/85 flex items-center justify-center text-slate-400 hover:text-[#FF4E00] hover:border-[#FF4E00] transition-all bg-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer text-xs"
                          >
                            &raquo;
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })()
              )}
            </section>
          </div>
        )}

        {/* ==================== PAGE: CONTACT ==================== */}
        {currentPage === 'contact' && (
          <div className="py-12 px-4 sm:px-8 max-w-5xl mx-auto animate-fade-in">
            {/* Header */}
            <div className="border-b border-slate-200 pb-8 mb-10">
              <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: primaryColor }}>
                ENGINEERING ASSISTANCE
              </div>
              <h1 className="text-4xl font-bold text-slate-900 italic tracking-tight">
                {isKR ? '비즈니스 및 도면 문의' : 'CONTACT US'}
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Office info / Interactive Map Placeholder */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="font-bold text-sm uppercase text-slate-400 tracking-wider">
                    {isKR ? '대표 사무소 및 본사 공장' : 'Headquarters & Factory'}
                  </h3>
                  <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-600">
                    <p className="flex items-start gap-2.5">
                      <Building size={16} className="text-slate-400 shrink-0 mt-0.5" />
                      <span>{isKR ? '인천광역시 서구 백범로 782 (가좌동)' : '782, Baekbeom-ro, Seo-gu, Incheon, Republic of Korea'}</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Phone size={16} className="text-slate-400 shrink-0" />
                      <span>{isKR ? '전화: 032-578-9025' : 'Tel: +82-32-578-9025'}</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Phone strokeDasharray="3 3" size={16} className="text-slate-400 shrink-0" />
                      <span>{isKR ? '팩스: 032-578-9026' : 'Fax: +82-32-578-9026'}</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Mail size={16} className="text-slate-400 shrink-0" />
                      <span>Email: sensor9@hanmail.net</span>
                    </p>
                  </div>
                </div>

                {/* Real interactive Google Map (Embed without API key for simplicity & security) */}
                <div className="border border-slate-200 rounded-lg overflow-hidden bg-slate-100 relative h-60 shadow-2xs">
                  <iframe
                    title="SensorNine Location Map"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent('인천광역시 서구 백범로 782')}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Right Column: Contact Us Input Form */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-6 shadow-2xs">
                {formSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center py-12 text-center space-y-4" id="success-submit-box">
                    <div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
                      <CheckCircle2 size={32} className="stroke-[2.5]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-base text-slate-900">
                        {isKR ? '문의 사항이 안전하게 전송되었습니다.' : 'Inquiry Submitted Successfully.'}
                      </h4>
                      <p className="text-xs text-slate-400 max-w-sm">
                        {isKR
                          ? '센서나인(주) 기술영업 담당자가 입력하신 주소로 조속히 검토 답신을 전송해 드리겠습니다.'
                          : 'Our technical sales team is reviewing your specs list. You will receive a feedback email shortly.'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4" id="contact-form-portal">
                    <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider mb-2">
                      {isKR ? '센서 맞춤 설계 문의서' : 'Technical Specifications Request'}
                    </h3>

                    {formError && (
                      <div className="p-3 bg-red-50 text-red-600 rounded text-xs leading-relaxed flex items-center gap-2">
                        <span>{formError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1.5">
                          {isKR ? '성함 *' : 'Your Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 text-xs rounded p-2.5 focus:outline-hidden focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1.5">
                          {isKR ? '이메일 주소 *' : 'Email Address *'}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 text-xs rounded p-2.5 focus:outline-hidden focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1.5">
                        {isKR ? '연락처 (선택)' : 'Phone Number (Optional)'}
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: 010-1234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-xs rounded p-2.5 focus:outline-hidden focus:border-blue-500 placeholder-slate-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1.5">
                        {isKR ? '문의 제목 *' : 'Subject of Inquiry *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isKR ? "예: NTC 센서 도면 가공 조율" : "Ex: Custom probe temperature ranges"}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-xs rounded p-2.5 focus:outline-hidden focus:border-blue-500 placeholder-slate-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1.5">
                        {isKR ? '상세 요구 사양 및 메시지 *' : 'Message or Specifications *'}
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder={isKR ? "온도 부하 수준, 커스텀 프로브 직경, SUS 등급 사양이나 견적 조율 건을 상세하게 남겨주세요." : "Please specify estimated target temperatures, housing dimensions, lead-wire lengths, or purchase budgets."}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-xs rounded p-2.5 focus:outline-hidden focus:border-blue-500 placeholder-slate-300"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{ backgroundColor: primaryColor, opacity: isSubmitting ? 0.7 : 1 }}
                      className="w-full text-xs text-white p-3 rounded font-bold hover:scale-[1.01] active:scale-[0.99] transition-all disabled:cursor-not-allowed"
                    >
                      {isSubmitting 
                        ? (isKR ? '전송 중...' : 'Submitting...') 
                        : (isKR ? '맞춤 센서 상담 신청서 접수' : 'Submit Core Specifications')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Website Footer Panel block */}
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 p-6 sm:p-10 shrink-0 text-xs w-full mt-auto">
          <div className="w-full px-2 sm:px-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-3 flex-1 w-full max-w-none">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <BrandLogo isLight={true} logoUrl={customContent.logoUrl} />
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <button 
                    onClick={() => setActivePolicy('terms')}
                    className="text-[11px] text-slate-350 hover:text-white font-semibold transition cursor-pointer hover:underline"
                  >
                    {isKR ? '이용약관' : 'Terms of Service'}
                  </button>
                  <span className="text-slate-800 text-[10px] select-none">|</span>
                  <button 
                    onClick={() => setActivePolicy('privacy')}
                    className="text-[11px] text-slate-300 hover:text-white font-black transition cursor-pointer hover:underline"
                  >
                    {isKR ? '개인정보처리방침' : 'Privacy Policy'}
                  </button>
                  <span className="text-slate-800 text-[10px] select-none">|</span>
                  <button 
                    onClick={() => setActivePolicy('email')}
                    className="text-[11px] text-slate-350 hover:text-white font-semibold transition cursor-pointer hover:underline"
                  >
                    {isKR ? '이메일무단수집거부' : 'Email Rejection'}
                  </button>
                </div>
              </div>
              
              <div className="text-[11px] text-slate-500 leading-relaxed max-w-none w-full">
                {isKR ? (
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-x-4 gap-y-1 w-full">
                    <span><strong>상호</strong>: 센서나인(주)</span>
                    <span className="hidden sm:inline text-slate-800">|</span>
                    <span><strong>대표</strong>: 이호균</span>
                    <span className="hidden sm:inline text-slate-800">|</span>
                    <span><strong>사업자등록번호</strong>: 137-86-13645</span>
                    <span className="hidden sm:inline text-slate-800">|</span>
                    <span><strong>주소</strong>: 인천광역시 서구 백범로 782 (가좌동)</span>
                    <span className="hidden sm:inline text-slate-800">|</span>
                    <span><strong>Tel</strong>: 032.578.9025</span>
                    <span className="hidden sm:inline text-slate-800">|</span>
                    <span><strong>Fax</strong>: 032.578.9026</span>
                    <span className="hidden sm:inline text-slate-800">|</span>
                    <span><strong>E-mail</strong>: sensor9@hanmail.net</span>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-x-4 gap-y-1 w-full">
                    <span><strong>Company</strong>: SensorNine Co., Ltd.</span>
                    <span className="hidden sm:inline text-slate-800">|</span>
                    <span><strong>CEO</strong>: Hogyun Lee</span>
                    <span className="hidden sm:inline text-slate-800">|</span>
                    <span><strong>BIZ No</strong>: 137-86-13645</span>
                    <span className="hidden sm:inline text-slate-800">|</span>
                    <span><strong>Address</strong>: 782, Baekbeom-ro, Seo-gu, Incheon, Republic of Korea</span>
                    <span className="hidden sm:inline text-slate-800">|</span>
                    <span><strong>Tel</strong>: +82-32-578-9025</span>
                    <span className="hidden sm:inline text-slate-800">|</span>
                    <span><strong>Fax</strong>: +82-32-578-9026</span>
                    <span className="hidden sm:inline text-slate-800">|</span>
                    <span><strong>E-mail</strong>: sensor9@hanmail.net</span>
                  </div>
                )}
              </div>
            </div>

            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono shrink-0 lg:self-end">
              <span>Copyright (C) 2026 SENSOR9.CO.KR All Rights Reserved.</span>
            </div>
          </div>
        </footer>

      </div>

      {/* Selected News Post Modal Overview */}
      {selectedPost && (
        <div className="fixed inset-0 bg-slate-950/75 flex items-center justify-center p-4 z-50 animate-fade-in" id="news-detail-modal">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200/60 max-w-2xl w-full max-h-[85vh] flex flex-col p-6 overflow-hidden transform scale-100 transition-all duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-wider uppercase bg-slate-100 text-slate-600 px-2.5 py-1 rounded">
                  {isKR ? selectedPost.categoryKR : selectedPost.categoryEN}
                </span>
                <span className="text-[11px] text-slate-400 font-mono font-medium">
                  {selectedPost.date}
                </span>
              </div>
              <button 
                onClick={() => setSelectedPost(null)}
                className="text-slate-450 hover:text-slate-700 p-1.5 hover:bg-slate-100 rounded-lg transition-all focus:outline-hidden cursor-pointer"
                aria-label="Close"
              >
                <X size={18} className="stroke-[2.5]" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto py-6 space-y-4 pr-1" id="news-detail-content">
              {selectedPost.imageUrl && (
                <div className="w-full aspect-[16/10] sm:aspect-[16/9] mb-4 bg-slate-100 rounded-xl overflow-hidden border border-slate-100/60 shadow-2xs">
                  <img
                    src={selectedPost.imageUrl}
                    alt={isKR ? selectedPost.titleKR : selectedPost.titleEN}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                {isKR ? selectedPost.titleKR : selectedPost.titleEN}
              </h3>
              
              <div className="flex items-center gap-4 text-xs text-slate-450 border-b border-slate-100 pb-4 font-medium" id="news-detail-meta">
                <span>{isKR ? `작성자: ${selectedPost.author || '관리자'}` : `By: ${selectedPost.author || 'Admin'}`}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line text-justify pt-2 font-normal">
                {isKR ? selectedPost.contentKR : selectedPost.contentEN}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-100 pt-4 flex justify-end shrink-0">
              <button
                onClick={() => setSelectedPost(null)}
                style={{ backgroundColor: primaryColor }}
                className="text-xs text-white px-5 py-2.5 rounded-md font-bold hover:opacity-90 shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                {isKR ? '닫기' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy and Terms of Service Policy Modal */}
      {activePolicy && (
        <div className="fixed inset-0 bg-slate-950/75 flex items-center justify-center p-4 z-50 animate-fade-in" id="policy-detail-modal">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200/60 max-w-2xl w-full max-h-[85vh] flex flex-col p-6 overflow-hidden transform scale-100 transition-all duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-wider uppercase bg-slate-900 text-white px-2.5 py-1 rounded">
                  {isKR ? '공식 정책 서류' : 'OFFICIAL DOCUMENT'}
                </span>
                <span className="text-sm font-black text-slate-800">
                  {activePolicy === 'privacy' 
                    ? (isKR ? '개인정보처리방침' : 'Privacy Policy') 
                    : activePolicy === 'terms'
                    ? (isKR ? '이용약관' : 'Terms of Service')
                    : (isKR ? '이메일무단수집거부' : 'Email Non-Collection Policy')}
                </span>
              </div>
              <button 
                onClick={() => setActivePolicy(null)}
                className="text-slate-450 hover:text-slate-700 p-1.5 hover:bg-slate-100 rounded-lg transition-all focus:outline-hidden cursor-pointer"
                aria-label="Close"
              >
                <X size={18} className="stroke-[2.5]" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto py-6 pr-1 space-y-4" id="policy-detail-content">
              {activePolicy === 'terms' ? (
                isKR ? (
                  <div className="space-y-4 text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal text-justify">
                    <div>
                      <h4 className="font-bold text-slate-800 text-[12px] sm:text-xs mb-1">제1조 (목적)</h4>
                      <p>본 약관은 센서나인 주식회사(이하 "회사")가 제공하는 센서기술 모니터링 및 카탈로그 안내 등 웹사이트(이하 "서비스")의 이용조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-[12px] sm:text-xs mb-1">제2조 (약관의 명시와 개정)</h4>
                      <p>회사는 본 약관의 내용을 사용자가 쉽게 알 수 있도록 웹사이트의 초기 화면 또는 연결 화면에 게시합니다. 약관의 조정이 있을 시 최소 7일 전부터 사전 고지합니다.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-[12px] sm:text-xs mb-1">제3조 (서비스의 내용 및 제공)</h4>
                      <p>회사가 웹사이트를 통해 제공하는 서비스는 제품 목록 검색, 기술 규격 및 상세 도면 확인, 기계 가공 및 조립 공정 매뉴얼 다운로드, 커스텀 하우징 소켓 컨설팅 상담 신청 서비스가 포함됩니다.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-[12px] sm:text-xs mb-1">제4조 (사용자의 의무 및 면책)</h4>
                      <p>사용자는 사이트에서 무단 복제, 악의적인 도킹 시도 등을 삼가야 합니다. 웹사이트에 등재된 사양 정보는 실제 제작 정밀 공차 조건에 따라 일부 차이가 발생할 수 있으며 보증성 확인은 유선 컨설팅을 거쳐야 합니다.</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-xs text-slate-600 leading-relaxed font-normal text-justify">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Section 1 (Objective)</h4>
                      <p>These terms regulate the general user rules and digital services supplied on the SensorNine corporate web platform.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Section 2 (Provided Solutions)</h4>
                      <p>The service delivers precision specifications for microthermistors, custom enclosures, and professional inquiry routing mechanisms.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Section 3 (Liability Limit)</h4>
                      <p>Specification configurations on this page are provided for illustrative purposes. Valid engineering ratings should be confirmed via direct official consult representatives.</p>
                    </div>
                  </div>
                )
              ) : activePolicy === 'privacy' ? (
                isKR ? (
                  <div className="space-y-4 text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal text-justify">
                    <div>
                      <h4 className="font-bold text-slate-800 text-[12px] sm:text-xs mb-1">1. 수집하는 개인정보 항목</h4>
                      <p>회사는 홈페이지 내 맞춤 센서 설계 상담 신청 접수 시 아래와 같은 최소한의 개인정보를 수집하고 있습니다.</p>
                      <ul className="list-disc pl-4 mt-1 space-y-0.5 font-semibold text-slate-700">
                        <li>수집항목: 회사명/기관명, 담당자 성명, 이메일 주소, 전화번호 혹은 모바일 연락처</li>
                        <li>수집방식: 고객의 직접 기입 방식을 통한 웹 폼 접수</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-[12px] sm:text-xs mb-1">2. 개인정보의 수집 및 이용 목적</h4>
                      <p>회사는 접수된 고객 정보를 다음의 목적에 한하여 성실하게 이용합니다.</p>
                      <ul className="list-disc pl-4 mt-1 space-y-0.5 font-semibold text-slate-700">
                        <li>NTC 써미스터 소켓 외경, 프로브 사양 조율 등 맞춤 설계 상담 지원</li>
                        <li>견적 확인, 기술 검토서 회신 및 유선 피드백 조정</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-[12px] sm:text-xs mb-1">3. 개인정보의 보유 및 이용기간</h4>
                      <p>원칙적으로, 이용자의 개인정보는 수집 및 제공 목적이 달성된 시점 이후 즉시 안전하게 파기 처리합니다. 단, 상담 세부 기록 유지를 위해 내부 방침으로 기술 검토 종료 시부터 최대 1년간 보존한 후 물리적으로 삭제됩니다.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-[12px] sm:text-xs mb-1">4. 동의 거부 권리 및 불이익</h4>
                      <p>이용자는 개인정보 수집에 동의하지 않을 권리가 있으나, 거부 시 본 사이트를 통한 맞춤 센서 조율 컨설팅 상담 신청 서비스가 다소 제한될 수 있습니다.</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-xs text-slate-600 leading-relaxed font-normal text-justify">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">1. Collected Data Elements</h4>
                      <p>We process standard contact metadata including company entity name, lead engineer name, e-mail coordinates, and optional phone numbers.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">2. Utilization Directives</h4>
                      <p>All data inputs are solely restricted to replying to requested thermal calibrations, routing drafts, and consultation appointments.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">3. Retention Policies</h4>
                      <p>Individual records are completely removed once engineering requirements are finalized, or kept for maximum of 1 year for archival record checks.</p>
                    </div>
                  </div>
                )
              ) : (
                isKR ? (
                  <div className="space-y-4 text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal text-justify">
                    <div className="bg-rose-50 border border-rose-100 p-3.5 rounded-lg text-rose-800 font-semibold mb-4 leading-relaxed">
                      본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반시 정보통신망법에 의해 형사 처벌됨을 유념하시기 바랍니다.
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-slate-800 text-[12px] sm:text-xs mb-2 border-b border-slate-100 pb-1">정보통신망 이용촉진 및 정보보호 등에 관한 법률</h4>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-850 text-[11.5px] sm:text-xs font-semibold mb-1">제50조의2 (전자우편주소의 무단 수집행위 등 금지)</h4>
                      <ul className="list-decimal pl-4 space-y-1 text-slate-600">
                        <li>누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.</li>
                        <li>누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매ㆍ유통하여서는 아니된다.</li>
                        <li>누구든지 제1항 및 제2항의 규정에 의하여 수집ㆍ판매 및 유통이 금지된 전자우편주소임을 알고 이를 정보 전송에 이용하여서는 아니된다.</li>
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-100 mt-2">
                      <h4 className="font-bold text-slate-850 text-[11.5px] sm:text-xs font-semibold mb-1">제74조 (벌칙) 다음 각호의 1에 해당하는 자는 1천만원 이하의 벌금에 처한다.</h4>
                      <ul className="list-disc pl-4 space-y-1 text-slate-600">
                        <li>제8조제4항의 규정을 위반하여 표시ㆍ판매 또는 판매할 목적으로 진열한 자</li>
                        <li>제44조의7제1항제1호의 규정을 위반하여 음란한 부호ㆍ문언ㆍ음향ㆍ화상 또는 영상을 배포ㆍ판매ㆍ임대하거나 공연히 전시한 자</li>
                        <li>제44조의7제1항제3호의 규정을 위반하여 공포심이나 불안감을 유발하는 부호ㆍ문언ㆍ음향ㆍ화상 또는 영상을 반복적으로 상대방에게 도달하게 한 자</li>
                        <li>제50조제6항의 규정을 위반하여 기술적 조치를 한 자</li>
                        <li>제50조의8의 규정을 위반하여 광고성 정보를 전송한 자</li>
                        <li>제50조의2의 규정을 위반하여 전자우편 주소를 수집ㆍ판매ㆍ유통 또는 정보전송에 이용한 자</li>
                        <li>제53조제4항을 위반하여 등록사항의 변경등록 또는 사업의 양도ㆍ양수 또는 합병ㆍ상속의 신고를 하지 아니한 자</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-xs text-slate-600 leading-relaxed font-normal text-justify">
                    <div className="bg-rose-50 border border-rose-100 p-3.5 rounded-lg text-rose-800 font-semibold mb-4 leading-relaxed">
                      We reject any unauthorized collection of email addresses published on this website using automated email harvesting programs or other technical devices. Violators will be strictly subject to criminal and civil penalties under relevant information security acts.
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2 border-b border-slate-100 pb-1">Act on Promotion of Information and Communications Network Utilization</h4>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Article 50-2 (Prohibition of Unauthorized Collection of E-mail Addresses)</h4>
                      <ul className="list-decimal pl-4 space-y-1">
                        <li>No person shall harvest e-mail addresses from an internet homepage using automated email harvesting programs or other technical devices without the prior consent of the owner or manager.</li>
                        <li>No person shall sell or distribute e-mail addresses harvested in violation of paragraph (1).</li>
                        <li>No person shall use e-mail addresses for transmitting information, knowing that their collection, sale, or distribution is prohibited under paragraphs (1) and (2).</li>
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <h4 className="font-bold text-slate-800 mb-1">Article 74 (Penal Provisions)</h4>
                      <p>Any person who violates Article 50-2 by harvesting, selling, distributing, or using e-mail addresses for transmitting advertising information shall be subject to a fine not exceeding 10 million KRW.</p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-100 pt-4 flex justify-end shrink-0">
              <button
                onClick={() => setActivePolicy(null)}
                style={{ backgroundColor: primaryColor }}
                className="text-xs text-white px-5 py-2.5 rounded-md font-bold hover:opacity-90 shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                {isKR ? '동의 및 닫기' : 'Acknowledge & Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Download Toast Notification */}
      {downloadingManual && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-950 border border-slate-800 text-white p-4 rounded-xl shadow-2xl max-w-sm flex items-center gap-3 animate-pulse select-none">
          <div className="w-9 h-9 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
            <Download size={18} className="animate-bounce" />
          </div>
          <div>
            <h4 className="text-[11px] font-black text-slate-100 tracking-wide uppercase">
              {isKR ? '센서 지침서 다운로드' : 'Technical Manual Transmission'}
            </h4>
            <p className="text-[10px] text-slate-400 leading-snug font-medium mt-0.5">
              {downloadingManual} {isKR ? '설치 안내서 PDF 전송을 시작합니다.' : 'datasheet PDF simulation initiated.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
