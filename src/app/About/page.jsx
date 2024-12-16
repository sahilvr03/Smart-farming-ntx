"use client"
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const MapComponent = dynamic(() => import('../components/About/map'), { ssr: false });

export default function About() {
  const [inView, setInView] = useState(false);

  const FeatureCard = ({ title, description }) => (
    <div className="p-6 bg-gray-100 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, { threshold: 0.5 });

    const missionStatement = document.querySelector('#mission-section');
    if (missionStatement) {
      observer.observe(missionStatement);
    }

    return () => {
      if (missionStatement) {
        observer.unobserve(missionStatement);
      }
    };
  }, []);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Innovation by farmers, for farmers. We're here to empower farmers to grow higher and better yields with less.
          </p>
        </div>
      </section>

      <section id="mission-section" className="bg-white py-16 px-4 md:px-12 overflow-hidden">
  <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto">
    {/* Image Div (moves from left to right on scroll) */}
    <div
      className={`md:w-1/2 transition-all duration-2000 ease-in-out ${
        inView ? 'translate-x-0 opacity-100' : '-translate-x-[-50vw] opacity-0'
      }`}
    >
      <img
        src="/images/2.jpg"
        alt="Farming"
        className="rounded-lg shadow-lg w-full"
      />
    </div>

    {/* Text Div (moves from right to left on scroll) */}
    <div
      className={`md:w-1/2 md:pl-12 mb-8 md:mb-0 transition-all duration-2000 ease-in-out bg-white ${
        inView ? 'translate-x-0 opacity-100' : 'translate-x-[-50vw] opacity-0'
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission Statement</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Our mission is to revolutionize farming by providing farmers with cutting-edge technology, accurate analytics, and actionable insights to maximize their yields and efficiency while promoting sustainability.
      </p>
    </div>
  </div>

  <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto mt-7">
    {/* Text Div (moves from left to right on scroll) */}
    <div
      className={`md:w-1/2 md:pl-12 mb-8 md:mb-0 transition-all duration-2000 ease-in-out bg-white ${
        inView ? 'translate-x-0 opacity-100' : '-translate-x-[-50vw] opacity-0'
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission Statement</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Our mission is to revolutionize farming by providing farmers with cutting-edge technology, accurate analytics, and actionable insights to maximize their yields and efficiency while promoting sustainability.
      </p>
    </div>

    {/* Image Div (moves from right to left on scroll) */}
    <div
      className={`md:w-1/2 transition-all duration-2000 ease-in-out ${
        inView ? 'translate-x-0 opacity-100' : 'translate-x-[-50vw] opacity-0'
      }`}
    >
      <img
        src="/images/2.jpg"
        alt="Farming"
        className="rounded-lg shadow-lg w-full"
      />
    </div>
  </div>
</section>



      {/* Features Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard title="Satellite-based Monitoring" description="Track your fields with advanced satellite imagery." />
            <FeatureCard title="Soil Health Analysis" description="Get accurate analysis of soil conditions." />
            <FeatureCard title="Weather Predictions" description="Customized weather data for better planning." />
            <FeatureCard title="Affordable Solutions" description="Sustainable and affordable farming techniques." />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Main Office Locations</h2>
          <MapComponent />
        </div>
      </section>
    </div>
  );
}
