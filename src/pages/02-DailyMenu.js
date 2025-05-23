import React from 'react';
import { Link } from 'react-router-dom';

const menuSections = [
  {
    title: "Chef's Table",
    description: 'World Inspired Cuisine',
    image: 'ChefsTable.png',
    imagePosition: 'right',
    route: '/chefs-table',
  },
  {
    title: 'Clean Plates',
    description: 'Allergen Friendly Zone',
    image: 'CleanPlates.png',
    imagePosition: 'left',
  },
  {
    title: 'Central Oven',
    description: 'Trattoria',
    image: 'CentralOven.png',
    imagePosition: 'right',
  },
  {
    title: 'Black Label Grill',
    description: '',
    image: 'BlackLabelGrill.png',
    imagePosition: 'left',
  },
  {
    title: 'WildFlour',
    description: 'Freshly Baked Goods',
    image: 'WildFlour.png',
    imagePosition: 'right',
  },
];

function DailyMenu() {
  return (
    <div className="bg-white w-screen overflow-x-hidden">
      <div className="relative w-screen">
        <img
          src={`${process.env.PUBLIC_URL}/images/OliverHall.jpeg`}
          alt="Oliver Hall"
          className="w-screen h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-6xl font-bold text-white text-center">The Options</h2>
        </div>
      </div>

      <div className="w-full px-6 py-12 space-y-10">
        {menuSections.map((section, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
            {section.imagePosition === 'left' ? (
              <>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${section.image}`}
                    alt={`${section.title}`}
                    className="w-4/5 mx-auto rounded shadow"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-5xl font-bold">{section.title}</h3>
                  <p className="text-2xl text-gray-600 mt-1">{section.description}</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <Link to={`/submission?station=${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <button className="bg-black text-white px-8 py-4 text-xl rounded hover:bg-gray-800">
                        Submission
                      </button>
                    </Link>
                    <Link to={section.route || `/${section.title.toLowerCase().replace(/[^a-z0-9]/gi, '-')}`}>
                      <button className="border border-gray-400 text-gray-800 px-8 py-4 text-xl rounded hover:bg-gray-100">
                        Menu
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center">
                  <h3 className="text-5xl font-bold">{section.title}</h3>
                  <p className="text-2xl text-gray-600 mt-1">{section.description}</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <Link to={`/submission?station=${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <button className="bg-black text-white px-8 py-4 text-xl rounded hover:bg-gray-800">
                        Submission
                      </button>
                    </Link>
                    <Link to={section.route || `/${section.title.toLowerCase().replace(/[^a-z0-9]/gi, '-')}`}>
                      <button className="border border-gray-400 text-gray-800 px-8 py-4 text-xl rounded hover:bg-gray-100">
                        Menu
                      </button>
                    </Link>
                  </div>
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${section.image}`}
                    alt={`${section.title}`}
                    className="w-4/5 mx-auto rounded shadow"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyMenu;


