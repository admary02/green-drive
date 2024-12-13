import React from 'react';

const PricingPage = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-white py-12">
      <div className="container mx-auto p-8">
        {/* Titlu principal */}
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-10">Tarife Școala de Șoferi</h1>

        {/* Secțiune Ofertă Lunii Martie */}
        <section className="bg-white rounded-lg shadow-2xl p-8 mb-14 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Oferta Lunii Martie</h2>
          <div className="flex justify-center gap-8 mb-6">
            <div className="bg-green-100 rounded-xl p-6 shadow-md w-80 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-center text-green-700 mb-4">Transmisie Manuală</h3>
              <p className="text-center text-lg text-gray-800">
                Prețul este de <strong>2.500 Lei</strong> pentru autoturismele: Hyundai i30 Fastback, i30, Renault Megane, Ford Focus.
              </p>
            </div>
            <div className="bg-green-100 rounded-xl p-6 shadow-md w-80 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-center text-green-700 mb-4">Transmisie Automată</h3>
              <p className="text-center text-lg text-gray-800">
                Prețul este de <strong>3.500 Lei</strong> pentru autoturismul Kia Xceed plug-in hybrid.
              </p>
            </div>
          </div>
        </section>

        {/* Detalii Cursuri Inclus */}
        <section className="bg-white rounded-lg shadow-2xl p-8 mb-14">
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Ce Este Inclus în Preț</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Cursuri Teoretice</h3>
              <ul className="list-inside list-disc text-gray-700">
                <li>Legislația rutieră - 14h</li>
                <li>Prim ajutor - 2h</li>
                <li>Legislație specifică - 2h</li>
                <li>Cunoașterea și întreținerea autovehiculelor - 2h</li>
                <li>Conducere preventivă - 4h</li>
                <li>Conducere practică - 30h</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Cursuri Practice</h3>
              <p className="text-gray-700">Cursurile practice sunt desfășurate pe traseele de examen sau pe cele de interes, conform disponibilității și condițiilor de trafic.</p>
            </div>
          </div>
        </section>

        {/* Reduceri și Alte Taxe */}
        <section className="bg-white rounded-lg shadow-2xl p-8 mb-14">
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Reduceri și Alte Taxe</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Reduceri</h3>
              <ul className="list-inside list-disc text-gray-700">
                <li>50 Lei reducere pentru elevi și studenți (cu carnetul)</li>
                <li>Reducere de 50 Lei pentru grupuri de 3 persoane sau recomandare</li>
                <li>Reducerile nu se cumulează</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Alte Taxe</h3>
              <ul className="list-inside list-disc text-gray-700">
                <li>
                  Ședință suplimentară: <strong>200 Lei</strong>
                </li>
                <li>
                  Rezervare autoturism pentru examen: <strong>250 Lei</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Detalii suplimentare */}
        <section className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Detalii Suplimentare</h2>
          <p className="text-lg text-gray-700 mb-4">
            Perioada de școlarizare este de minimum 5 săptămâni. Cursantul care aduce un alt elev la înscriere va primi o ședință suplimentară ca bonus.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PricingPage;
