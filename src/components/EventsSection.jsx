import React from 'react';

const events = [
  { id: 1, title: 'Concert Live , our SON, Biggy Brown', link: '#' },
  { id: 2, title: 'DJ Night, By MAHAAD , the OLD Girl', link: '#' },
  { id: 3, title: 'BURNABOY SPECIAL, DJ CHARLY , ANDY BEAT', link: '#' },
];

const EventsSection = () => {
    return (
      <section
        className="py-16 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(/monbar/concert-1854113.jpg)` }}
      >
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map(event => (
              <div key={event.id} className="flex flex-col items-start mb-6">
                <h2 className="text-4xl font-oswald mb-4 hover:text-purple-500">{event.title}</h2>
                <a href={event.link} className="text-lg font-oswald flex items-center text-purple-500">
                  <span>En savoir plus</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default EventsSection;