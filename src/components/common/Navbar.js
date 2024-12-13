import React, { useState } from 'react';
import { FaChevronDown, FaHandsHelping, FaInfoCircle, FaCar, FaDollarSign, FaQuestionCircle, FaTag, FaHome, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { translations } from '../../translations';
import { useLanguage } from '../../LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('Română');
  const [openLangMenu, setOpenLangMenu] = useState(false);

  const countries = [
    { flag: '🇺🇸', name: 'English' },
    { flag: '🇷🇴', name: 'Română' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeLangMenu = () => {
    setOpenLangMenu(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#f5f5f5] p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo - left-aligned */}
        <div className="text-[#333] text-2xl font-bold hover:text-[#333]">Green Drive</div>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          <Link to="/" className="text-[#333] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300">
            Home
          </Link>
          <div className="relative">
            <button className="text-[#333] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300 flex items-center" onClick={toggleMenu}>
              Resources
              <FaChevronDown className={`ml-2 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-lg rounded-md mt-2 z-10 opacity-0 transition-opacity duration-300 ${
                isMenuOpen ? 'block opacity-100' : 'hidden'
              }`}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
                <Link
                  to="/services"
                  className="flex items-center text-[#333] font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
                  onClick={() => closeMenu()}>
                  <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-md border border-gray-300 hover:bg-gray-300 transition duration-300">
                    <FaHandsHelping className="text-2xl text-gray-800" />
                  </div>
                  <div className="flex flex-col ml-4 w-full">
                    <div className="text-sm font-semibold">{'Services'}</div>
                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">{'Learn how we can help you achieve your goals'}</div>
                  </div>
                </Link>

                <Link
                  to="/pricing"
                  className="flex items-center text-[#333] font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
                  onClick={() => closeMenu()}>
                  <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-md border border-gray-300 hover:bg-gray-300 transition duration-300">
                    <FaDollarSign className="text-2xl text-gray-800" />
                  </div>
                  <div className="flex flex-col ml-4 w-full">
                    <div className="text-sm font-semibold">{'Prices'}</div>
                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">{'Affordable pricing for your driving lessons'}</div>
                  </div>
                </Link>

                <Link
                  to="/about"
                  className="flex items-center text-[#333] font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
                  onClick={() => closeMenu()}>
                  <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-md border border-gray-300 hover:bg-gray-300 transition duration-300">
                    <FaInfoCircle className="text-2xl text-gray-800" />
                  </div>
                  <div className="flex flex-col ml-4 w-full">
                    <div className="text-sm font-semibold">{'About Us'}</div>

                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">"Meet the team and learn about our dedication"</div>
                  </div>
                </Link>

                <Link
                  to="/frequent-questions"
                  className="flex items-center text-[#333] font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
                  onClick={() => closeMenu()}>
                  <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-md border border-gray-300 hover:bg-gray-300 transition duration-300">
                    <FaQuestionCircle className="text-2xl text-gray-800" />
                  </div>
                  <div className="flex flex-col ml-4 w-full">
                    <div className="text-sm font-semibold">Frequent Questions</div>
                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">Find answers to common questions</div>
                  </div>
                </Link>

                <Link to="/cars" className="flex items-center text-[#333] font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition duration-300" onClick={() => closeMenu()}>
                  <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-md border border-gray-300 hover:bg-gray-300 transition duration-300">
                    <FaCar className="text-2xl text-gray-800" />
                  </div>
                  <div className="flex flex-col ml-4 w-full">
                    <div className="text-sm font-semibold">{'Cars'}</div>
                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">See our available cars for driving lessons</div>
                  </div>
                </Link>

                <Link
                  to="/special-offers"
                  className="flex items-center text-[#333] font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
                  onClick={() => closeMenu()}>
                  <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-md border border-gray-300 hover:bg-gray-300 transition duration-300">
                    <FaTag className="text-2xl text-gray-800" />
                  </div>
                  <div className="flex flex-col ml-4 w-full">
                    <div className="text-sm font-semibold">Special Offers</div>
                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">Explore limited-time deals and bundles</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link to="/contact" className="text-[#333] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300">
            Contact Us
          </Link>
        </div>

        {/* Language selector */}
        <div className="relative ml-6">
          <button
            className="text-[#333] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300 flex items-center"
            onClick={() => setOpenLangMenu(!openLangMenu)}>
            <span className="mr-2">{countries.find(({ name }) => name === lang)?.flag}</span>
            <span>{countries.find(({ name }) => name === lang)?.name}</span>
            <FaChevronDown className={`ml-2 transform transition-transform duration-300 ${openLangMenu ? 'rotate-180' : ''}`} />
          </button>
          {openLangMenu && (
            <div className="absolute left-0 w-32 bg-white shadow-lg rounded-md mt-2 z-10">
              {countries.map(({ name, flag }) => (
                <Link
                  key={name}
                  to="#"
                  className="flex items-center space-x-2 text-[#333] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
                  onClick={() => {
                    setLang(name);
                    closeLangMenu(); // Închide meniul după selectarea limbii
                  }}>
                  <span>{flag}</span>
                  <span>{name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-[#333]" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <Link to="/" className="flex items-center space-x-3 text-[#333] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300" onClick={closeMobileMenu}>
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
          <Link
            to="/services"
            className="flex items-center space-x-3 text-[#333] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
            onClick={closeMobileMenu}>
            <FaHandsHelping className="text-xl" />
            <span>Services</span>
          </Link>
          <Link
            to="/pricing"
            className="flex items-center space-x-3 text-[#333] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
            onClick={closeMobileMenu}>
            <FaDollarSign className="text-xl" />
            <span>Prices</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center space-x-3 text-[#333] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
            onClick={closeMobileMenu}>
            <FaInfoCircle className="text-xl" />
            <span>About Us</span>
          </Link>
          <Link
            to="/frequent-questions"
            className="flex items-center space-x-3 text-[#333] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
            onClick={closeMobileMenu}>
            <FaQuestionCircle className="text-xl" />
            <span>Frequent Questions</span>
          </Link>
          <Link
            to="/cars"
            className="flex items-center space-x-3 text-[#333] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
            onClick={closeMobileMenu}>
            <FaCar className="text-xl" />
            <span>Cars</span>
          </Link>
          <Link
            to="/special-offers"
            className="flex items-center space-x-3 text-[#333] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
            onClick={closeMobileMenu}>
            <FaTag className="text-xl" />
            <span>Special Offers</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-3 text-[#333] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
            onClick={closeMobileMenu}>
            <FaEnvelope className="text-xl" />
            <span>Contact Us</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
