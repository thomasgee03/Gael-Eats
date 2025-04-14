import React, { useState } from 'react';
import { Star } from 'lucide-react';

function Submission() {
  const [selectedStation, setSelectedStation] = useState('Chefs Table');
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const stations = {
    'Chefs Table': 'World Inspired Cuisine',
    'Clean Plate': 'Allergen Friendly Zone',
    'Central Oven': 'Trattoria',
    'Black Label Grill': '',
    'WildFlour': 'Freshly Baked Goods',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!email.endsWith('@stmarys-ca.edu')) {
      setError('Please use a @stmarys-ca.edu email address.');
      return;
    }

    setError('');
    // TODO: Submit the data
    console.log({ selectedStation, rating, email, message });
  };

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      {/* Heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-bold">{selectedStation}</h2>
          <p className="text-gray-600">{stations[selectedStation]}</p>
          <p className="text-sm text-gray-400 mt-1">Optional: Leave a note about the menu item</p>

          {/* Dropdown */}
          <div className="my-4">
            <label htmlFor="station-select" className="block mb-2 font-semibold">
              Choose Station:
            </label>
            <select
              id="station-select"
              value={selectedStation}
              onChange={(e) => setSelectedStation(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded"
            >
              {Object.keys(stations).map((station) => (
                <option key={station} value={station}>
                  {station}
                </option>
              ))}
            </select>
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
            src={`${process.env.PUBLIC_URL}/images/MenuPoster.jpeg`}
            alt="Menu Poster"
            className="w-full rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default Submission;




