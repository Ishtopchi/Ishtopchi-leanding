import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
  alternateLanguages?: { [key: string]: string };
}

/**
 * Per-route <head> via react-helmet-async. Because Helmet renders on the server
 * too, every prerendered page ships its own title/description/canonical/hreflang/
 * OG tags and JSON-LD baked into the HTML — no JS required for search engines.
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://ishtopchi.uz/logo.jpg',
  structuredData,
  alternateLanguages,
}) => {
  const { language } = useLanguage();

  return (
    <Helmet>
      <html lang={language} />
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* hreflang alternates */}
      {alternateLanguages &&
        Object.entries(alternateLanguages).map(([lng, url]) => (
          <link key={lng} rel="alternate" hrefLang={lng} href={url} />
        ))}

      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {canonical && <meta name="twitter:url" content={canonical} />}
      <meta name="twitter:image" content={ogImage} />

      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
