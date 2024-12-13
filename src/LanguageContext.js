import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations'; // Adaugă importul traducerilor

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ro'); // Limba implicită

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Returnează traducerea corespunzătoare pentru limba aleasă
  const translate = (key) => {
    return translations[language][key] || key;
  };

  return <LanguageContext.Provider value={{ language, changeLanguage, translate }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
