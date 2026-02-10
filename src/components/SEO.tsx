import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    ogImage?: string;
    ogTitle?: string;
    ogDescription?: string;
    canonical?: string;
    lang?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    ogImage,
    ogTitle,
    ogDescription,
    canonical,
    lang = 'ro'
}) => {
    useEffect(() => {
        // Basic Meta Tags
        document.title = title;

        updateMetaTag('name', 'description', description);

        // Open Graph
        updateMetaTag('property', 'og:title', ogTitle || title);
        updateMetaTag('property', 'og:description', ogDescription || description);
        updateMetaTag('property', 'og:type', 'website');

        if (ogImage) {
            updateMetaTag('property', 'og:image', ogImage);
        }

        // Twitter
        updateMetaTag('name', 'twitter:card', 'summary_large_image');
        updateMetaTag('name', 'twitter:title', ogTitle || title);
        updateMetaTag('name', 'twitter:description', ogDescription || description);
        if (ogImage) {
            updateMetaTag('name', 'twitter:image', ogImage);
        }

        // Canonical Link
        if (canonical) {
            let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
            if (link) {
                link.setAttribute('href', canonical);
            } else {
                link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                link.setAttribute('href', canonical);
                document.head.appendChild(link);
            }
        }

        // Language
        document.documentElement.lang = lang;

    }, [title, description, ogImage, ogTitle, ogDescription, canonical, lang]);

    return null;
};

function updateMetaTag(attr: 'name' | 'property', key: string, content: string) {
    let element = document.querySelector(`meta[${attr}="${key}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
}

export default SEO;
