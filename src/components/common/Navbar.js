import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../../LanguageContext';

const links = [
  { to: '/', label: 'navbar.home' },
  { to: '/#preturi', label: 'navbar.pricing' },
  { to: '/#masini', label: 'navbar.cars' },
  { to: '/#cum-functioneaza', label: 'navbar.howItWorks' },
  { to: '/#contact', label: 'navbar.contact' },
];

const LanguageSwitch = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-xs font-semibold">
      {['ro', 'en'].map((code, i) => (
        <React.Fragment key={code}>
          {i > 0 && <span className="text-white/30">/</span>}
          <button
            type="button"
            onClick={() => changeLanguage(code)}
            aria-pressed={language === code}
            className={`uppercase transition-colors ${language === code ? 'text-white' : 'text-white/45 hover:text-white/80'}`}>
            {code}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { translate: t } = useLanguage();
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-asphalt/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Logo */}
        <Link to="/" onClick={close} className="flex items-center gap-2.5">
          <span className="rounded bg-signal px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-asphalt">Școală</span>
          <span className="text-[15px] font-extrabold tracking-tight">Adam Maricel</span>
        </Link>

        {/* Linkuri desktop */}
        <ul className="hidden items-center gap-7 text-[13px] font-medium md:flex">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="text-white/80 transition-colors hover:text-white">
                {t(label)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dreapta desktop */}
        <div className="hidden items-center gap-5 md:flex">
          <LanguageSwitch />
          <Link to="/#contact" className="btn-yellow px-4 py-2">
            {t('navbar.enroll')}
          </Link>
        </div>

        {/* Buton meniu mobil */}
        <button
          type="button"
          className="p-2 text-xl md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? t('navbar.closeMenu') : t('navbar.openMenu')}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Meniu mobil */}
      {open && (
        <div className="border-t border-white/10 px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} onClick={close} className="block border-b border-white/5 py-3 font-semibold text-white/85">
                  {t(label)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between">
            <LanguageSwitch />
            <Link to="/#contact" onClick={close} className="btn-yellow px-4 py-2">
              {t('navbar.enroll')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
