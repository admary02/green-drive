import React from 'react';

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-white py-12">
      <div className="container mx-auto p-8">
        {/* Titlu principal */}
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-10">Serviciile Școlii de Șoferi (Categoria B)</h1>

        {/* Secțiune Servicii de Conducere */}
        <section className="bg-white rounded-lg shadow-2xl p-8 mb-14 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Servicii de Conducere (Categoria B)</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-green-100 rounded-xl p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-center text-green-700 mb-4">Cursuri Practic</h3>
              <p className="text-center text-lg text-gray-800">
                Cursurile de conducere sunt susținute pe traseele de examen sau pe cele de interes, ajustate conform nevoilor cursantului.
              </p>
            </div>
            <div className="bg-green-100 rounded-xl p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-center text-green-700 mb-4">Instructori Specializați</h3>
              <p className="text-center text-lg text-gray-800">
                Instructorii noștri sunt calificați și au experiență vastă în predarea cursurilor de legislație rutieră și conducere practică.
              </p>
            </div>
            <div className="bg-green-100 rounded-xl p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-center text-green-700 mb-4">Cursuri Teoretice</h3>
              <p className="text-center text-lg text-gray-800">
                Cursurile teoretice sunt structurate pentru a pregăti cursantul pentru examenul teoretic, incluzând legislație rutieră și prim ajutor.
              </p>
            </div>
          </div>
        </section>

        {/* Secțiune Servicii Suplimentare */}
        <section className="bg-white rounded-lg shadow-2xl p-8 mb-14">
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Servicii Suplimentare</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Ședințe Suplimentare</h3>
              <p className="text-gray-700">Oferim ședințe suplimentare pentru cei care doresc mai multe ore de conducere, la prețul de 200 Lei pe ședință.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Pregătire Dosar</h3>
              <p className="text-gray-700">Vom pregăti dosarul complet pentru examenul de conducere, inclusiv formularele necesare, în cadrul școlii.</p>
            </div>
          </div>
        </section>

        {/* Secțiune Detalii Suplimentare */}
        <section className="bg-white rounded-lg shadow-2xl p-8 mb-14">
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Detalii Suplimentare</h2>
          <p className="text-lg text-gray-700 mb-4">
            Toate cursurile sunt susținute de instructori specializați, iar elevii vor beneficia de un program personalizat și flexibil pentru a se potrivi nevoilor lor.
          </p>
          <p className="text-lg text-gray-700">
            Serviciile sunt dedicate exclusiv școlarizării pentru categoria B, adică pentru autoturisme, iar cursurile sunt structurate atât pe partea teoretică, cât și practică.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
