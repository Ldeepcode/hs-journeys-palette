// Google Analytics 4 Integration for HsTrips Travel Website
// Measurement ID: G-VCVME04YC5

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Analytics configuration
export const GA_MEASUREMENT_ID = 'G-VCVME04YC5';

// Check if gtag is available
const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Generic event tracking function
export const trackEvent = (
  eventName: string,
  parameters: Record<string, any> = {}
): void => {
  if (!isGtagAvailable()) {
    console.warn('Google Analytics not loaded');
    return;
  }

  try {
    window.gtag('event', eventName, {
      ...parameters,
      send_to: GA_MEASUREMENT_ID,
    });
    console.log(`Analytics Event: ${eventName}`, parameters);
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

// Page view tracking
export const trackPageView = (pagePath: string, pageTitle?: string): void => {
  if (!isGtagAvailable()) return;

  try {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle,
    });
    console.log(`Page View: ${pagePath}`, { pageTitle });
  } catch (error) {
    console.error('Page view tracking error:', error);
  }
};

// Contact Form Analytics
export const trackContactFormSubmission = (formData: {
  enquiryType?: string;
  name: string;
  email: string;
  phone: string;
}): void => {
  trackEvent('form_submit', {
    event_category: 'Contact',
    event_label: 'Travel Inquiry Form',
    enquiry_type: formData.enquiryType || 'general',
    form_name: 'contact_form',
    user_provided_data: {
      email_provided: !!formData.email,
      phone_provided: !!formData.phone,
    }
  });

  // Track as conversion
  trackEvent('generate_lead', {
    event_category: 'Conversion',
    event_label: 'Contact Form Lead',
    currency: 'INR',
    value: 1, // Assign a value to leads
  });
};

// Destination Interest Tracking
export const trackDestinationClick = (destinationName: string, category: 'domestic' | 'international' = 'domestic'): void => {
  trackEvent('destination_click', {
    event_category: 'Destinations',
    event_label: destinationName,
    destination_category: category,
    content_type: 'destination_card',
  });
};

// Service Interest Tracking
export const trackServiceClick = (serviceName: string): void => {
  trackEvent('service_click', {
    event_category: 'Services',
    event_label: serviceName,
    content_type: 'service_card',
  });
};

// WhatsApp Click Tracking
export const trackWhatsAppClick = (context: string = 'floating_button'): void => {
  trackEvent('whatsapp_click', {
    event_category: 'Communication',
    event_label: 'WhatsApp Contact',
    contact_method: 'whatsapp',
    context: context,
  });

  // Track as potential lead
  trackEvent('begin_checkout', {
    event_category: 'Engagement',
    event_label: 'WhatsApp Engagement',
  });
};

// Phone Call Tracking
export const trackPhoneClick = (phoneNumber: string, context: string = 'header'): void => {
  trackEvent('phone_click', {
    event_category: 'Communication',
    event_label: 'Phone Call',
    contact_method: 'phone',
    phone_number: phoneNumber,
    context: context,
  });
};

// Email Click Tracking
export const trackEmailClick = (context: string = 'footer'): void => {
  trackEvent('email_click', {
    event_category: 'Communication',
    event_label: 'Email Contact',
    contact_method: 'email',
    context: context,
  });
};

// Scroll Depth Tracking
export const trackScrollDepth = (percentage: number): void => {
  trackEvent('scroll', {
    event_category: 'Engagement',
    event_label: `Scroll ${percentage}%`,
    scroll_depth: percentage,
  });
};

// CTA Button Tracking
export const trackCTAClick = (ctaText: string, location: string): void => {
  trackEvent('cta_click', {
    event_category: 'CTA',
    event_label: ctaText,
    cta_location: location,
    content_type: 'button',
  });
};

// Search/Filter Tracking (for future use)
export const trackSearch = (searchTerm: string, category?: string): void => {
  trackEvent('search', {
    event_category: 'Search',
    search_term: searchTerm,
    search_category: category,
  });
};

// Package Interest Tracking
export const trackPackageInterest = (packageName: string, packageType: string, price?: number): void => {
  trackEvent('package_interest', {
    event_category: 'Packages',
    event_label: packageName,
    package_type: packageType,
    currency: 'INR',
    value: price,
  });
};

// Newsletter Signup (for future use)
export const trackNewsletterSignup = (email: string): void => {
  trackEvent('newsletter_signup', {
    event_category: 'Newsletter',
    event_label: 'Email Subscription',
    method: 'website_form',
  });
};

// Social Media Clicks
export const trackSocialClick = (platform: string, context: string = 'footer'): void => {
  trackEvent('social_click', {
    event_category: 'Social Media',
    event_label: platform,
    social_platform: platform,
    context: context,
  });
};

// User Engagement Metrics
export const trackUserEngagement = (action: string, value?: number): void => {
  trackEvent('user_engagement', {
    event_category: 'Engagement',
    event_label: action,
    engagement_time_msec: value,
  });
};

// Error Tracking
export const trackError = (errorMessage: string, errorContext: string): void => {
  trackEvent('exception', {
    description: errorMessage,
    fatal: false,
    error_context: errorContext,
  });
};

// Initialize scroll tracking
export const initializeScrollTracking = (): void => {
  if (typeof window === 'undefined') return;

  let scrollDepthMarkers = [25, 50, 75, 90];
  let trackedDepths = new Set<number>();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

    scrollDepthMarkers.forEach(marker => {
      if (scrollPercentage >= marker && !trackedDepths.has(marker)) {
        trackScrollDepth(marker);
        trackedDepths.add(marker);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};

// Initialize analytics on app load
export const initializeAnalytics = (): void => {
  if (typeof window === 'undefined') return;

  // Track initial page load
  trackPageView(window.location.pathname, document.title);
  
  // Initialize scroll tracking
  initializeScrollTracking();

  console.log('HsTrips Analytics initialized with ID:', GA_MEASUREMENT_ID);
};

// Export for use in components
export default {
  trackEvent,
  trackPageView,
  trackContactFormSubmission,
  trackDestinationClick,
  trackServiceClick,
  trackWhatsAppClick,
  trackPhoneClick,
  trackEmailClick,
  trackCTAClick,
  trackPackageInterest,
  trackSocialClick,
  trackUserEngagement,
  trackError,
  initializeAnalytics,
};
