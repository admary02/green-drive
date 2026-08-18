import React from 'react';
import { useLanguage } from '../LanguageContext';

const PricingPage = () => {
  const { translate: t } = useLanguage();

  const theoryItems = t('pricingPage.included.theory.items');
  const discountItems = t('pricingPage.discounts.discountsCard.items');
  const feeItems = t('pricingPage.discounts.feesCard.items');

  return (
    <div className="bg-gradient-to-r from-primary-50 to-white py-12">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-center text-primary-700 mb-10">{t('pricingPage.title')}</h1>

        <section className="bg-white rounded-lg shadow-2xl p-8 mb-14 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-center text-primary-600 mb-6">{t('pricingPage.offer.title')}</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
            {['manual', 'automatic'].map((key) => (
              <div key={key} className="bg-primary-100 rounded-xl p-6 shadow-md w-full md:w-80 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-center text-primary-700 mb-4">{t(`pricingPage.offer.${key}.title`)}</h3>
                <p className="text-center text-lg text-gray-800">
                  {t(`pricingPage.offer.${key}.priceLabel`)} <strong>{t(`pricingPage.offer.${key}.price`)}</strong> {t(`pricingPage.offer.${key}.text`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-2xl p-8 mb-14">
          <h2 className="text-2xl font-semibold text-center text-primary-600 mb-6">{t('pricingPage.included.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-lg p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-semibold text-primary-700 mb-4">{t('pricingPage.included.theory.title')}</h3>
              <ul className="list-inside list-disc text-gray-700">
                {theoryItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-50 rounded-lg p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-semibold text-primary-700 mb-4">{t('pricingPage.included.practice.title')}</h3>
              <p className="text-gray-700">{t('pricingPage.included.practice.text')}</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-2xl p-8 mb-14">
          <h2 className="text-2xl font-semibold text-center text-primary-600 mb-6">{t('pricingPage.discounts.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-lg p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-semibold text-primary-700 mb-4">{t('pricingPage.discounts.discountsCard.title')}</h3>
              <ul className="list-inside list-disc text-gray-700">
                {discountItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-50 rounded-lg p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-semibold text-primary-700 mb-4">{t('pricingPage.discounts.feesCard.title')}</h3>
              <ul className="list-inside list-disc text-gray-700">
                {feeItems.map((fee, i) => (
                  <li key={i}>
                    {fee.label}: <strong>{fee.value}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-2xl font-semibold text-center text-primary-600 mb-6">{t('pricingPage.additionalDetails.title')}</h2>
          <p className="text-lg text-gray-700 mb-4">{t('pricingPage.additionalDetails.text')}</p>
        </section>
      </div>
    </div>
  );
};

export default PricingPage;
