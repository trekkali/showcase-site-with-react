import React from 'react';

const FeatureSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src="/monbar/h1-img-1.jpg.png" alt="Feature" className="w-full h-auto object-cover"/>
        </div>
        <div className="md:w-1/2 p-6">
          <p className="font-dancing-script text-xl mb-4">Un petit texte ici</p>
          <h2 className="font-oswald text-4xl mb-4">Titre ici</h2>
          <p className="font-oswald text-lg mb-4">Description ici. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <button className="bg-purple-600 text-white font-oswald py-2 px-4 rounded hover:bg-purple-700">En savoir plus</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
