import React from 'react';
import { useLanguage } from '../../LanguageContext';

const Footer = () => {
  const { translate: t } = useLanguage();

  return (
    <footer className="py-8 bg-gray-800 text-white text-center">
      <p>{t('footer.rights')}</p>
    </footer>
  );
};

export default Footer;
