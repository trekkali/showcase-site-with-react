import React from 'react';

const ReservationSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">À huis clos ? Réserve maintenant !</h2>
        <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="md:flex md:items-center md:space-x-4 mb-4">
            <div className="flex flex-col md:flex-row md:items-center mb-2 md:mb-0 w-full">
              <label className="block text-white text-sm font-bold mb-2 md:mb-0 md:mr-4" htmlFor="people">
                <span className="inline-block mr-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z" />
                  </svg>
                </span>
                Pour
              </label>
              <select id="people" name="people" className="shadow appearance-none border border-white bg-black text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                <option value="1">1 personne</option>
                <option value="2">2 personnes</option>
                <option value="3">3 personnes</option>
                <option value="4">4 personnes</option>
                <option value="5">5 personnes</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row md:items-center mb-2 md:mb-0 w-full">
              <label className="block text-white text-sm font-bold mb-2 md:mb-0 md:mr-4" htmlFor="date">
                <span className="inline-block mr-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10m-10 4h10m-7-8h4a2 2 0 012 2v7a2 2 0 01-2 2h-4a2 2 0 01-2-2v-7a2 2 0 012-2z" />
                  </svg>
                </span>
                LE
              </label>
              <input type="date" id="date" name="date" className="shadow appearance-none border border-white bg-black text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="flex flex-col md:flex-row md:items-center w-full">
              <label className="block text-white text-sm font-bold mb-2 md:mb-0 md:mr-4" htmlFor="time">
                <span className="inline-block mr-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                À
              </label>
              <input type="time" id="time" name="time" className="shadow appearance-none border border-white bg-black text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
          </div>
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Réserver
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
