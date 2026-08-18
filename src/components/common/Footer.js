import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../../LanguageContext';

const Footer = () => {
  const { translate: t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-white text-xl font-extrabold mb-3">
            <FaCar className="text-primary-400" />
            Adam Maricel <span className="text-primary-400">PFA</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">{t('footer.description')}</p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 transition">
              <FaFacebook />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary-400 transition">
                {t('navbar.home')}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary-400 transition">
                {t('navbar.services')}
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary-400 transition">
                {t('navbar.pricing')}
              </Link>
            </li>
            <li>
              <Link to="/cars" className="hover:text-primary-400 transition">
                {t('navbar.cars')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary-400 transition">
                {t('navbar.contact')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">{t('footer.contactTitle')}</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaPhone className="text-primary-400" /> <span>+40 7XX XXX XXX</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary-400" /> <span>contact@adammaricel.ro</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary-400" /> <span>{t('footer.location')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">{t('footer.rights')}</div>
    </footer>
  );
};

export default Footer;
