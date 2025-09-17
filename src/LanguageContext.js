import React, { createContext, useState, useContext, useMemo } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

/**
 * Returnează o valoare dintr-un obiect pe baza unei chei nested,
 * ex: getByPath(obj, 'home.hero.title')
 */
function getByPath(obj, path) {
  const parts = Array.isArray(path) ? path : String(path).split('.');
  let cur = obj;
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
      cur = cur[p];
    } else {
      return undefined;
    }
  }
  return cur;
}

export const LanguageProvider = ({ children }) => {
  // limba implicită
  const [language, setLanguage] = useState('ro');

  const changeLanguage = (lang) => setLanguage(lang);

  /**
   * t('home.hero.title')
   * - dacă cheia nu există, întoarce cheia ca fallback (util pentru debugging)
   * - poate întoarce string, obiect sau array (în funcție de traduceri)
   */
  const translate = useMemo(() => {
    return (key) => {
      const val = getByPath(translations[language], key);
      return val !== undefined ? val : key;
    };
  }, [language]);

  return <LanguageContext.Provider value={{ language, changeLanguage, translate }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
