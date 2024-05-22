import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-purple-500 py-16 text-white">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-4xl font-oswald mb-4 lg:mb-0">Don't Miss Our Fun</h2>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black border border-white p-2 rounded-md lg:mr-4"
            />
            <button className="bg-white text-purple-500 font-oswald py-2 px-4 rounded-md mt-4 lg:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
