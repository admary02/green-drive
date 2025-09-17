import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-white py-12">
      <div className="container mx-auto p-8">
        {/* Titlu principal */}
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-10">Contactează-ne</h1>

        {/* Informații generale */}
        <section className="bg-white rounded-lg shadow-2xl p-8 mb-14 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Informații de Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Datele de contact */}
            <div className="bg-green-100 rounded-xl p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-center text-green-700 mb-4">Contactează-ne</h3>
              <p className="text-lg text-gray-700 mb-4">Dacă ai întrebări sau vrei să te înscrii la cursuri, nu ezita să ne contactezi:</p>
              <ul className="list-none">
                <li className="text-lg text-gray-700 mb-2">
                  <strong>Telefon:</strong> 0726 451 890
                </li>
                <li className="text-lg text-gray-700 mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:greendriveschool@gmail.com" className="text-green-600 hover:underline">
                    greendriveschool@gmail.com
                  </a>
                </li>
                <li className="text-lg text-gray-700 mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:instructorautobro58@gmail.com" className="text-green-600 hover:underline">
                    instructorautobro58@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact instructor - Adam Maricel */}
            <div className="bg-green-100 rounded-xl p-6 shadow-md transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-center text-green-700 mb-4">Instructor: Adam Maricel</h3>
              <p className="text-lg text-gray-700 mb-4">
                Instrucția este susținută de Adam Maricel, un instructor cu experiență vastă. Pentru detalii sau pentru a-l contacta, poți accesa următoarele:
              </p>
              <ul className="list-none">
                <li className="text-lg text-gray-700 mb-2">
                  <strong>Pagina Facebook:</strong>{' '}
                  <a href="https://www.facebook.com/maricel.adam" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Adam Maricel
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rețele de socializare */}
        <section className="bg-white rounded-lg shadow-2xl p-8 mb-14">
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Urmărește-ne pe Rețelele Sociale</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://www.facebook.com/GreenDriveSchool" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Green Drive" className="w-12 h-12" />
            </a>
            <a href="https://www.facebook.com/instructorautob.ro" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Green Drive" className="w-12 h-12" />
            </a>
            <a href="https://www.instagram.com/greendrive_2021/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram Green Drive" className="w-12 h-12" />
            </a>
            <a href="https://www.instagram.com/instructorautob.ro/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram instructorautob.ro" className="w-12 h-12" />
            </a>
          </div>
        </section>

        {/* Formular de contact (opțional) */}
        <section className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Trimite-ne un Mesaj</h2>
          <form action="mailto:greendriveschool@gmail.com" method="post" encType="text/plain">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg text-gray-700 mb-2">
                Numele tău:
              </label>
              <input type="text" id="name" name="name" className="w-full p-3 border border-green-300 rounded-lg" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
                Email:
              </label>
              <input type="email" id="email" name="email" className="w-full p-3 border border-green-300 rounded-lg" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg text-gray-700 mb-2">
                Mesaj:
              </label>
              <textarea id="message" name="message" rows="5" className="w-full p-3 border border-green-300 rounded-lg" required></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300">
              Trimite Mesajul
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
