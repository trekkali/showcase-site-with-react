import React from 'react';

const menuItems = [
  { id: 1, img: 'https://via.placeholder.com/50', title: 'Wine', description: 'Red and white wines', price: '$20' },
  { id: 2, img: 'https://via.placeholder.com/50', title: 'Beer', description: 'Craft and draft beers', price: '$10' },
  { id: 3, img: 'https://via.placeholder.com/50', title: 'Cocktail', description: 'Variety of cocktails', price: '$15' },
  { id: 4, img: 'https://via.placeholder.com/50', title: 'Whiskey', description: 'Single malt and blended', price: '$25' },
  { id: 5, img: 'https://via.placeholder.com/50', title: 'Vodka', description: 'Premium vodkas', price: '$18' },
  { id: 6, img: 'https://via.placeholder.com/50', title: 'Rum', description: 'Dark and white rums', price: '$17' },
  { id: 7, img: 'https://via.placeholder.com/50', title: 'Tequila', description: 'Añejo, Reposado, Blanco', price: '$22' },
  { id: 8, img: 'https://via.placeholder.com/50', title: 'Gin', description: 'Dry and flavored gins', price: '$19' },
  { id: 9, img: 'https://via.placeholder.com/50', title: 'Brandy', description: 'Fine brandies', price: '$21' },
  { id: 10, img: 'https://via.placeholder.com/50', title: 'Champagne', description: 'Sparkling wines', price: '$30' },
  { id: 11, img: 'https://via.placeholder.com/50', title: 'Sake', description: 'Japanese rice wine', price: '$25' },
  { id: 12, img: 'https://via.placeholder.com/50', title: 'Liqueur', description: 'Various liqueurs', price: '$20' },
];

const Menu = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto max-w-screen-lg px-4">
        <h2 className="text-4xl font-oswald mb-8 text-center">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map(item => (
            <div key={item.id} className="flex items-center mb-6">
              <img src={item.img} alt={item.title} className="w-16 h-16 object-cover mr-4" />
              <div className="flex-grow">
                <h3 className="text-xl font-dancing">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
              <div className="flex-grow text-right">
                <span className="text-sm mr-4">......................................</span>
                <span className="text-lg">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
