import React from 'react';
import { FaChalkboardTeacher, FaCar, FaAward } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('path/to/your-about-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative flex items-center justify-center w-full h-full text-white text-center">
          <h1 className="text-4xl font-bold">About Green Drive Driving School</h1>
          <p className="mt-4 text-xl">Empowering you to drive safely, confidently, and responsibly.</p>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Green Drive Driving School was established with a single mission: to provide high-quality, safe, and affordable driving education. Our instructors are passionate about
          teaching the next generation of responsible drivers, and we take pride in our high pass rate and success stories.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-green-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission and Vision</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaChalkboardTeacher className="text-4xl text-green-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                We aim to provide comprehensive driving education that focuses on safety, responsibility, and skill development, ensuring every student is prepared for the road.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaCar className="text-4xl text-green-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Our Fleet</h3>
              <p className="mt-2 text-gray-600">
                Our fleet of well-maintained vehicles is equipped with the latest safety features, providing a comfortable and secure environment for your driving lessons.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaAward className="text-4xl text-green-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Our Vision</h3>
              <p className="mt-2 text-gray-600">
                We aspire to be the leading driving school in the area, known for our dedication to producing skilled and confident drivers who are ready for any challenge on the
                road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Instructors */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Meet Our Instructors</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our instructors are highly trained and have years of experience in both teaching and driving. They are dedicated to making sure that each student not only passes their
          driving test but becomes a safe and confident driver for life.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Instructor 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="path-to-instructor-photo.jpg" alt="Instructor 1" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">John Doe</h3>
            <p className="mt-2 text-gray-600">Certified Driving Instructor with over 10 years of experience. Passionate about teaching safe driving skills.</p>
          </div>
          {/* Instructor 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="path-to-instructor-photo.jpg" alt="Instructor 2" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">Jane Smith</h3>
            <p className="mt-2 text-gray-600">Expert in defensive driving techniques. Focuses on building student confidence behind the wheel.</p>
          </div>
          {/* Instructor 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="path-to-instructor-photo.jpg" alt="Instructor 3" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">Mark Johnson</h3>
            <p className="mt-2 text-gray-600">A passionate instructor who believes in teaching with patience and understanding to ensure every student succeeds.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Green Drive Driving School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
