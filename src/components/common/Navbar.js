import React, { useState } from 'react';
import { FaChevronDown, FaHandsHelping, FaInfoCircle, FaCar, FaDollarSign, FaQuestionCircle, FaTag, FaHome, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openLangMenu, setOpenLangMenu] = useState(false);

  const { language, changeLanguage, translate } = useLanguage();

  const countries = [
    { flag: '🇺🇸', code: 'en', name: translate('language.english') },
    { flag: '🇷🇴', code: 'ro', name: translate('language.romanian') },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const closeLangMenu = () => setOpenLangMenu(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const resourceLinks = [
    { to: '/services', icon: FaHandsHelping, label: 'navbar.services', desc: 'navbar.servicesDescription' },
    { to: '/pricing', icon: FaDollarSign, label: 'navbar.pricing', desc: 'navbar.pricingDescription' },
    { to: '/about', icon: FaInfoCircle, label: 'navbar.about', desc: 'navbar.aboutDescription' },
    { to: '/frequent-questions', icon: FaQuestionCircle, label: 'navbar.faq', desc: 'navbar.faqDescription' },
    { to: '/cars', icon: FaCar, label: 'navbar.cars', desc: 'navbar.carsDescription' },
    { to: '/special-offers', icon: FaTag, label: 'navbar.specialOffers', desc: 'navbar.specialOffersDescription' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-primary-700 text-xl md:text-2xl font-extrabold">
          <FaCar className="text-primary-500" />
          Adam Maricel <span className="text-primary-500">PFA</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-2">
          <Link to="/" className="text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-primary-50 hover:text-primary-700 transition duration-300">
            {translate('navbar.home')}
          </Link>

          <div className="relative">
            <button
              className="text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-primary-50 hover:text-primary-700 transition duration-300 flex items-center"
              onClick={toggleMenu}>
              {translate('navbar.resources')}
              <FaChevronDown className={`ml-2 text-sm transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-[620px] bg-white shadow-xl border border-gray-100 rounded-xl mt-3 z-10 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
              }`}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4">
                {resourceLinks.map(({ to, icon: Icon, label, desc }) => (
                  <Link
                    key={to}
                    to={to}
                    className="flex items-center text-gray-700 font-semibold py-3 px-3 rounded-lg hover:bg-primary-50 transition duration-300"
                    onClick={closeMenu}>
                    <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg text-primary-600 shrink-0">
                      <Icon className="text-xl" />
                    </div>
                    <div className="flex flex-col ml-3 w-full">
                      <div className="text-sm font-semibold">{translate(label)}</div>
                      <div className="text-xs text-gray-500 mt-1 line-clamp-2">{translate(desc)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/contact" className="text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-primary-50 hover:text-primary-700 transition duration-300">
            {translate('navbar.contact')}
          </Link>
        </div>

        {/* Language selector */}
        <div className="relative ml-4 hidden md:block">
          <button
            className="text-gray-700 font-semibold py-2 px-3 rounded-md hover:bg-primary-50 hover:text-primary-700 transition duration-300 flex items-center"
            onClick={() => setOpenLangMenu(!openLangMenu)}>
            <span className="mr-2">{countries.find(({ code }) => code === language)?.flag}</span>
            <span className="text-sm">{countries.find(({ code }) => code === language)?.name}</span>
            <FaChevronDown className={`ml-2 text-xs transform transition-transform duration-300 ${openLangMenu ? 'rotate-180' : ''}`} />
          </button>

          {openLangMenu && (
            <div className="absolute right-0 w-40 bg-white shadow-xl border border-gray-100 rounded-lg mt-2 z-10 overflow-hidden">
              {countries.map(({ code, name, flag }) => (
                <button
                  key={code}
                  className={`w-full flex items-center space-x-2 font-medium py-2 px-4 transition duration-300 ${
                    code === language ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    changeLanguage(code);
                    closeLangMenu();
                  }}>
                  <span>{flag}</span>
                  <span>{name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-primary-700" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md p-4 space-y-1">
          <Link
            to="/"
            className="flex items-center space-x-3 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-primary-50 transition duration-300"
            onClick={closeMobileMenu}>
            <FaHome className="text-xl text-primary-500" />
            <span>{translate('navbar.home')}</span>
          </Link>
          {resourceLinks.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center space-x-3 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-primary-50 transition duration-300"
              onClick={closeMobileMenu}>
              <Icon className="text-xl text-primary-500" />
              <span>{translate(label)}</span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="flex items-center space-x-3 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-primary-50 transition duration-300"
            onClick={closeMobileMenu}>
            <FaEnvelope className="text-xl text-primary-500" />
            <span>{translate('navbar.contact')}</span>
          </Link>

          <div className="pt-2 border-t border-gray-100 mt-2 flex gap-2">
            {countries.map(({ code, name, flag }) => (
              <button
                key={code}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md font-medium ${
                  code === language ? 'bg-primary-100 text-primary-700' : 'bg-gray-50 text-gray-600'
                }`}
                onClick={() => changeLanguage(code)}>
                <span>{flag}</span>
                <span className="text-sm">{name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
