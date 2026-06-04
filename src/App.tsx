import { useState, useEffect } from 'react';
import { AppState, PageId, Language, Inquiry } from './types';
import { 
  INITIAL_CUSTOM_CONTENT, 
  INITIAL_SEO_METADATA, 
  INITIAL_CMS_POSTS, 
  INITIAL_INQUIRIES,
  PRODUCTS_LIST,
  EQUIPMENT_LIST
} from './data';
import WebsiteView from './components/WebsiteView';

const LOCAL_STORAGE_KEY = 'sensornine_state_v3';

export default function App() {
  // Initialize AppState from LocalStorage if active, otherwise use defaults
  const [state, setState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure robust structure on restore
        return {
          currentLang: parsed.currentLang || 'KR',
          currentPage: parsed.currentPage || 'home',
          previewMode: parsed.previewMode || 'desktop',
          styling: {
            primaryColor: parsed.styling?.primaryColor || '#2563EB',
            secondaryColor: parsed.styling?.secondaryColor || '#10B981',
            fontFamily: parsed.styling?.fontFamily || 'sans',
            accentTheme: parsed.styling?.accentTheme || 'standard'
          },
          customContent: INITIAL_CUSTOM_CONTENT,
          seo: INITIAL_SEO_METADATA,
          posts: INITIAL_CMS_POSTS,
          inquiries: parsed.inquiries || INITIAL_INQUIRIES,
          products: PRODUCTS_LIST,
          equipment: EQUIPMENT_LIST
        };
      }
    } catch (e) {
      console.error('Could not restore persistent SensorNine state', e);
    }

    return {
      currentLang: 'KR',
      currentPage: 'home',
      previewMode: 'desktop',
      styling: {
        primaryColor: '#2563EB',
        secondaryColor: '#10B981',
        fontFamily: 'sans',
        accentTheme: 'standard'
      },
      customContent: INITIAL_CUSTOM_CONTENT,
      seo: INITIAL_SEO_METADATA,
      posts: INITIAL_CMS_POSTS,
      inquiries: INITIAL_INQUIRIES,
      products: PRODUCTS_LIST,
      equipment: EQUIPMENT_LIST
    };
  });

  // Sync state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('LocalStorage save limit exceeded or unavailable', e);
    }
  }, [state]);

  // Page Switcher
  const handlePageChange = (page: PageId) => {
    setState(prev => ({ ...prev, currentPage: page }));
  };

  // Language Switcher
  const handleLangChange = (lang: Language) => {
    setState(prev => ({ ...prev, currentLang: lang }));
  };

  // Contact Inquiries Submissions (Fallback local collection)
  const handleAddInquiry = (name: string, email: string, phone: string, subject: string, message: string) => {
    const newInquiry: Inquiry = {
      id: `inq-${Date.now()}`,
      name,
      email,
      phone,
      subject,
      message,
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    setState(prev => ({
      ...prev,
      inquiries: [newInquiry, ...prev.inquiries]
    }));
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white" id="applet-viewport-root">
      <WebsiteView
        state={state}
        onPageChange={handlePageChange}
        onLangChange={handleLangChange}
        onAddInquiry={handleAddInquiry}
      />
    </div>
  );
}
