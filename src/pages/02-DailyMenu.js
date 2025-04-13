import React from 'react';

const foodImage = `${process.env.PUBLIC_URL}/images/fruit.jpg`; // Replace with your actual image path

const menuSections = [
  {
    title: 'Chefs Table',
    description: 'World Inspired Cuisine',
  },
  {
    title: 'Clean Plate',
    description: 'Allergen Friendly Zone',
  },
  {
    title: 'Central Oven',
    description: 'Trattoria',
  },
  {
    title: 'Black Label Grill',
    description: '',
  },
  {
    title: 'WildFlour',
    description: 'Freshly Baked Goods',
  }
];

function DailyMenu() {
  return (
    <div className="bg-white">

      {/* Hero section */}
      <div className="relative">
        <img
          src={`${process.env.PUBLIC_URL}/images/OliverHall.jpeg`}
          alt="Oliver Hall"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-4xl font-bold">The Options</h2>
          <p className="mt-2 text-lg">Submissions and menu details of your dining guide</p>
          <button className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
            Back
          </button>
        </div>
      </div>

      {/* Menu sections */}
      <div className="max-w-screen-lg mx-auto px-6 py-12 space-y-10">
        {menuSections.map((section, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">{section.title}</h3>
              <p className="text-gray-600 mt-1">{section.description}</p>
              <div className="mt-4 space-x-4">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  Submission
                </button>
                <button className="border border-gray-400 text-gray-800 px-4 py-2 rounded hover:bg-gray-100">
                  Menu
                </button>
              </div>
            </div>
            <div>
              <img src={foodImage} alt={section.title} className="rounded shadow" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default DailyMenu;

