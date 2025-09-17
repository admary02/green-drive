import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaChalkboardTeacher, FaRegCheckCircle } from 'react-icons/fa';
import hyundaiImage from '../components/assets/hyundai1.jpeg'; // Importul corect al imaginii

const HomePage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${hyundaiImage})` }} // Corectarea stilului pentru imaginea de fundal
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative flex flex-col items-center justify-center w-full h-full text-white text-center">
          <h1 className="text-4xl font-bold">Școala de șoferi Adam Maricel PFA</h1>
          <p className="mt-4 text-xl">Învățăm să conducem în siguranță, cu încredere și pricepere!</p>
          <Link to="/services" className="mt-6 py-3 px-6 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
            Descoperă serviciile noastre
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Despre Noi</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          La Adam Maricel PFA, credem că învățarea condusului ar trebui să fie o experiență plăcută și plină de satisfacții. Instructorii noștri experimentați sunt dedicați să
          ofere o educație rutieră de înaltă calitate, care să vă pregătească pentru o viață întreagă de condus în siguranță.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaCar className="text-4xl text-green-500 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Parcul Auto</h3>
            <p className="mt-2 text-gray-600">Alege dintre mașini bine întreținute pentru lecțiile tale de condus.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaChalkboardTeacher className="text-4xl text-green-500 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Instructori Experimentați</h3>
            <p className="mt-2 text-gray-600">Învață de la profesioniști certificați, pasionați de a preda condusul în siguranță.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaRegCheckCircle className="text-4xl text-green-500 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Succes Garantat</h3>
            <p className="mt-2 text-gray-600">Școala noastră de șoferi se mândrește cu o rată mare de promovare, asigurând succesul tău la examenul auto.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-green-50 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Ce spun elevii despre noi?</h2>
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="bg-white p-8 shadow-lg rounded-lg mb-6">
            <p className="text-lg text-gray-600 italic">
              "Adam Maricel P.F.A. mi-a oferit cea mai bună experiență de condus! Domnul instructor Adam, a fost răbdător și profesionist, iar eu am promovat testul din prima
              încercare!"
            </p>
            <p className="mt-4 text-sm text-gray-500">- Maria S., Elevă</p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <p className="text-lg text-gray-600 italic">
              "Am adorat cât de confortabil m-am simțit în timpul lecțiilor. Am învățat tot ce trebuie să știu pentru a deveni un șofer încrezător. Recomand cu drag!"
            </p>
            <p className="mt-4 text-sm text-gray-500">- Andrei D., Elev</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
