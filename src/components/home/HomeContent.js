import React from 'react';
import { useLanguage } from '../LanguageContext';

const HomeContent = () => {
  const { translate: t } = useLanguage();

  return (
    <div>
      <h1>{t('home.hero.title')}</h1>
      <p>{t('home.hero.lead')}</p>
    </div>
  );
};

export default HomeContent;
