import { ui, defaultLang, languages } from "./ui";

export function getLangFromUrl(url: URL) {
  const langs = Object.keys(languages);

  const currentLang = langs.find((lang) => url.pathname.includes(`/${lang}/`));

  return currentLang || defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
