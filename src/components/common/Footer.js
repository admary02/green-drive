import React from 'react';
import { useLanguage } from '../../LanguageContext';
import { site } from '../../siteConfig';

const Footer = () => {
  const { translate: t } = useLanguage();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-xs text-white/50 lg:flex-row lg:items-center lg:justify-between">
        <p className="shrink-0">
          © {new Date().getFullYear()} {t('footer.rights')}
        </p>
        <p className="flex flex-wrap gap-x-2">
          <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            {site.address}
          </a>
          <span>·</span>
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
          {site.socials.map(({ label, href }) => (
            <React.Fragment key={href}>
              <span>·</span>
              <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {label}
              </a>
            </React.Fragment>
          ))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
