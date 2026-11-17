import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const siteUrl = 'https://adridevportfolio.vercel.app';
const personId = `${siteUrl}/#person`;
const personName = 'Adrien Stiévenart';

const projectMetadata = {
  '/projects/portfolio': {
    title: 'project_title_portfolio',
    description: 'project_description_portfolio',
    repository: 'https://github.com/Rusius02/AdriDev',
  },
  '/projects/mytasker': {
    title: 'project_title_mytasker',
    description: 'project_description_mytasker',
    repository: 'https://github.com/Rusius02/myTasker',
  },
  '/projects/nisolnicole': {
    title: 'project_title_nisolnicole',
    description: 'project_description_nisolnicole',
    repository: 'https://github.com/Rusius02/NicoleNisol',
  },
  '/projects/finovo': {
    title: 'project_title_finovo',
    description: 'project_description_finovo',
    repository: 'https://github.com/Rusius02/Finovo-frontend',
  },
  '/projects/justgaming': {
    title: 'project_title_justgaming',
    description: 'project_description_justgaming',
  },
  '/projects/longlove': {
    title: 'project_title_longlove',
    description: 'project_description_longlove',
    repository: 'https://github.com/Rusius02/LongLove',
  },
  '/projects/cardforge': {
    title: 'project_title_cardforge',
    description: 'project_description_cardforge',
    repository: 'https://github.com/Rusius02/TrumpsCardsGames',
  },
};

const setNamedMeta = (name, content) => {
  let element = document.head.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
};

const setPropertyMeta = (property, content) => {
  let element = document.head.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.content = content;
};

const SeoMetadata = () => {
  const { pathname } = useLocation();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/';
    const project = projectMetadata[path];
    const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0];
    const languageLocales = {
      de: 'de_DE',
      en: 'en_US',
      es: 'es_ES',
      fr: 'fr_BE',
      nl: 'nl_BE',
    };
    const isKnownPage = path === '/' || path === '/projects' || Boolean(project);
    const pageTitle = path === '/'
      ? `${personName} | ${t('home_title_1')}`
      : project
        ? `${t(project.title)} | ${personName}`
        : path === '/projects'
          ? `${t('projects_list_title')} | ${personName}`
          : `Page not found | ${personName}`;
    const description = path === '/'
      ? t('home_intro')
      : project
        ? t(project.description)
        : path === '/projects'
          ? t('projects_list_subtitle')
          : t('home_intro');
    const canonicalUrl = `${siteUrl}${path === '/' ? '/' : path}`;

    document.documentElement.lang = language;
    document.title = pageTitle;
    setNamedMeta('description', description);
    setNamedMeta('robots', isKnownPage ? 'index, follow, max-image-preview:large' : 'noindex, follow');
    setNamedMeta('twitter:card', 'summary_large_image');
    setNamedMeta('twitter:title', document.title);
    setNamedMeta('twitter:description', description);
    setNamedMeta('twitter:image', `${siteUrl}/profile-adrien.jpg`);
    setPropertyMeta('og:type', project ? 'article' : 'website');
    setPropertyMeta('og:site_name', 'Adrien Stiévenart');
    setPropertyMeta('og:title', document.title);
    setPropertyMeta('og:description', description);
    setPropertyMeta('og:url', canonicalUrl);
    setPropertyMeta('og:image', `${siteUrl}/profile-adrien.jpg`);
    setPropertyMeta('og:locale', languageLocales[language] || 'fr_BE');

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const pageSchema = {
      '@context': 'https://schema.org',
      '@type': path === '/'
        ? 'ProfilePage'
        : project
          ? 'SoftwareSourceCode'
          : path === '/projects'
            ? 'CollectionPage'
            : 'WebPage',
      name: pageTitle,
      description,
      url: canonicalUrl,
      inLanguage: language,
      isPartOf: { '@id': `${siteUrl}/#website` },
      ...(project && {
        author: { '@id': personId },
        ...(project.repository && { codeRepository: project.repository }),
      }),
      ...(path === '/' && { mainEntity: { '@id': personId } }),
    };

    let schemaScript = document.getElementById('route-structured-data');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'route-structured-data';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(pageSchema);
  }, [i18n.language, i18n.resolvedLanguage, pathname, t]);

  return null;
};

export default SeoMetadata;
