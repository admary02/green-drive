import React from 'react';
import { FaChalkboardTeacher, FaCar, FaAward } from 'react-icons/fa';
import { useLanguage } from '../LanguageContext';
import adamProfile from '../components/assets/adam.jpg';

const AboutPage = () => {
  const { translate: t } = useLanguage();

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('path/to/your-about-image.jpg')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative flex flex-col items-center justify-center w-full h-full text-white text-center px-4">
          <h1 className="text-4xl font-bold">{t('aboutPage.hero.title')}</h1>
          <p className="mt-4 text-xl">{t('aboutPage.hero.subtitle')}</p>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">{t('aboutPage.whoWeAre.title')}</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{t('aboutPage.whoWeAre.text')}</p>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-green-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">{t('aboutPage.missionVision.title')}</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaChalkboardTeacher className="text-4xl text-green-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">{t('aboutPage.missionVision.cards.mission.title')}</h3>
              <p className="mt-2 text-gray-600">{t('aboutPage.missionVision.cards.mission.text')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaCar className="text-4xl text-green-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">{t('aboutPage.missionVision.cards.fleet.title')}</h3>
              <p className="mt-2 text-gray-600">{t('aboutPage.missionVision.cards.fleet.text')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaAward className="text-4xl text-green-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">{t('aboutPage.missionVision.cards.vision.title')}</h3>
              <p className="mt-2 text-gray-600">{t('aboutPage.missionVision.cards.vision.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Instructors */}
      {/* Instructor (single card) */}
      <section className="py-16 bg-gradient-to-b from-green-50/60 to-transparent">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">{t('aboutPage.instructors.titleSingle')}</h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">{t('aboutPage.instructors.text')}</p>

          <div className="mt-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl ring-1 ring-black/5 p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[240px,1fr] items-center">
              {/* Foto */}
              <div className="relative mx-auto md:mx-0">
                <img src={adamProfile} alt="Adam Maricel" className="w-60 h-60 object-cover object-center rounded-2xl shadow-md ring-1 ring-black/10" loading="lazy" />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-800 shadow">Instructor</span>
              </div>

              {/* Text */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-900">Adam Maricel</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{t('aboutPage.instructors.list.three.bio')}</p>

                <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">+10 ani experiență</span>
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">Condus defensiv</span>
                </div>

                <div className="mt-8">
                  <a href="/contact" className="inline-flex items-center rounded-xl px-5 py-2.5 font-medium bg-green-600 text-white hover:bg-green-700 shadow-sm">
                    {t('navbar.contact')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
