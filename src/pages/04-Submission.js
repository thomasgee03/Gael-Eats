import React, { useState } from 'react';
import { Star } from 'lucide-react';

function Submission() {
  const [selectedStation, setSelectedStation] = useState('Chefs Table');
  const [rating, setRating] = useState(0);

  const stations = ['Chefs Table', 'Clean Plate', 'Central Oven', 'Black Label Grill', 'WildFlour'];

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold">Site name</h1>
        <div className="flex space-x-4 items-center">
          <p>Page</p>
          <p>Page</p>
          <p>Page</p>
          <button className="bg-black text-white px-4 py-1 rounded">Submit</button>
        </div>
      </div>

      {/* Dropdown */}
      <div className="mb-6">
        <label htmlFor="station-select" className="block mb-2 font-semibold">
          Choose Station:
        </label>
        <select
          id="station-select"
          value={selectedStation}
          onChange={(e) => setSelectedStation(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded"
        >
          {stations.map((station) => (
            <option key={station} value={station}>
              {station}
            </option>
          ))}
        </select>
      </div>

      {/* Heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-bold">{selectedStation}</h2>
          <p className="text-gray-600">Subheading for description or instructions</p>
          <p className="text-sm text-gray-400 mt-1">Add a note to be specific with correct menu items</p>

          {/* Form */}
          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="border border-gray-300 px-4 py-2 rounded" />
              <input type="text" placeholder="Last name" className="border border-gray-300 px-4 py-2 rounded" />
            </div>
            <input type="email" placeholder="Email address" className="w-full border border-gray-300 px-4 py-2 rounded" />
            <textarea placeholder="Your message" className="w-full border border-gray-300 px-4 py-2 rounded h-32" />

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


