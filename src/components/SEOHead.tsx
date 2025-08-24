import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
  alternateLanguages?: { [key: string]: string };
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://ishtopchi.uz/logo.jpg",
  structuredData,
  alternateLanguages
}) => {
  const { language } = useLanguage();
  const location = useLocation();

  React.useEffect(() => {
    // Update document language
    document.documentElement.setAttribute('lang', language);
    
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update robots meta
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Update author meta
    let authorMeta = document.querySelector('meta[name="author"]');
    if (!authorMeta) {
      authorMeta = document.createElement('meta');
      authorMeta.setAttribute('name', 'author');
      document.head.appendChild(authorMeta);
    }
    authorMeta.setAttribute('content', 'IshTopchi Team');

    // Update revisit-after meta
    let revisitMeta = document.querySelector('meta[name="revisit-after"]');
    if (!revisitMeta) {
      revisitMeta = document.createElement('meta');
      revisitMeta.setAttribute('name', 'revisit-after');
      document.head.appendChild(revisitMeta);
    }
    revisitMeta.setAttribute('content', '1 days');

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Update hreflang links
    if (alternateLanguages) {
      // Remove existing hreflang links
      const existingHreflangs = document.querySelectorAll('link[hreflang]');
      existingHreflangs.forEach(link => link.remove());
      
      // Add new hreflang links
      Object.entries(alternateLanguages).forEach(([lang, url]) => {
        const hreflangLink = document.createElement('link');
        hreflangLink.setAttribute('rel', 'alternate');
        hreflangLink.setAttribute('hreflang', lang);
        hreflangLink.setAttribute('href', url);
        document.head.appendChild(hreflangLink);
      });
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) {
      ogDescription.setAttribute('content', description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && canonical) {
      ogUrl.setAttribute('content', canonical);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', ogImage);
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle && title) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription && description) {
      twitterDescription.setAttribute('content', description);
    }

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl && canonical) {
      twitterUrl.setAttribute('content', canonical);
    }

    // Add structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('#structured-data');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        structuredDataScript.setAttribute('id', 'structured-data');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }

  }, [title, description, keywords, canonical, ogImage, language, structuredData, alternateLanguages]);

  return null;
};

export default SEOHead;