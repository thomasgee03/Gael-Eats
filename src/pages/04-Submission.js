import React, { useState } from 'react';
import { Star } from 'lucide-react';
import Select from 'react-select';
import axios from 'axios';

function Submission() {
  const [selectedStation, setSelectedStation] = useState('Chefs Table');
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedFood, setSelectedFood] = useState(null);
  const [error, setError] = useState('');

  const stations = {
    "Chef's Table": { description: 'World Inspired Cuisine', image: 'ChefsTable.png'},
    'Clean Plates': { description: 'Allergen Friendly Zone', image: 'CleanPlates.png'},
    'Central Oven': { description: 'Trattoria', image: 'CentralOven.png'},
    'Black Label Grill': { description: '', image: 'BlackLabelGrill.png'},
    'WildFlour': { description: 'Freshly Baked Goods', image: 'WildFlour.png'},
  };

  // Example food list
  const foodOptions = [
    { value: 'Tandoori Chicken', label: 'Tandoori Chicken' },
    { value: 'Vegan Curry', label: 'Vegan Curry' },
    { value: 'Gluten-Free Pasta', label: 'Gluten-Free Pasta' },
    { value: 'Margherita Pizza', label: 'Margherita Pizza' },
    { value: 'BBQ Burger', label: 'BBQ Burger' },
    { value: 'Chocolate Chip Cookie', label: 'Chocolate Chip Cookie' },
    // Add more here...
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email.endsWith('@stmarys-ca.edu')) {
      setError('Please use a @stmarys-ca.edu email address.');
      return;
    }
  
    try {
      await axios.post('https://gael-eats-1.onrender.com/api/submissions', {
        station: selectedStation,
        foodItem: selectedFood?.value,
        rating,
        email,
        message,
      });
      alert('Submission successful!');
      // Optionally reset the form here
      setRating(0);
      setEmail('');
      setMessage('');
      setSelectedFood(null);
    } catch (err) {
      console.error(err);
      alert('Failed to submit');
    }
  };
  

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-bold">{selectedStation}</h2>
          <p className="text-gray-600">{stations[selectedStation]. description}</p>
          <p className="text-sm text-gray-400 mt-1">Optional: Leave a note about the menu item</p>

          {/* Station Dropdown */}
          <div className="my-4">
            <label htmlFor="station-select" className="block mb-2 font-semibold">
              Choose Station:
            </label>
            <select
              id="station-select"
              value={selectedStation}
              onChange={(e) => setSelectedStation(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded w-full"
            >
              {Object.keys(stations).map((station) => (
                <option key={station} value={station}>
                  {station}
                </option>
              ))}
            </select>
          </div>

          {/* Food Dropdown */}
          <div className="my-4">
            <label className="block mb-2 font-semibold">Select Food Item:</label>
            <Select
              options={foodOptions}
              value={selectedFood}
              onChange={setSelectedFood}
              placeholder="Search or select a food item..."
              isClearable
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              required
            />

            <textarea
              placeholder="Optional message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded h-32"
            />

            {/* Star Rating */}
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <Star
                  key={value}
                  size={24}
                  onClick={() => setRating(value)}
                  className={`cursor-pointer ${value <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">{rating} / 5</span>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button type="submit" className="bg-black text-white w-full py-2 rounded">
              Submit
            </button>
          </form>
        </div>

        <div>
          <img
            src={stations[selectedStation].image ? `${process.env.PUBLIC_URL}/images/${stations[selectedStation].image}` : `${process.env.PUBLIC_URL}/images/MenuPoster.jpeg`}
            alt={`${selectedStation} image`}
            className="w-full rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default Submission;





