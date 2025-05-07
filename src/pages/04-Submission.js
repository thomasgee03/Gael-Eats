import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwt_decode } from 'jwt-decode';

const slugToStation = {
  "chef's-table": "Chef's Table",
  'clean-plates': 'Clean Plates',
  'central-oven': 'Central Oven',
  'black-label-grill': 'Black Label Grill',
  'wildflour': 'WildFlour',
};

function Submission() {
  const location = useLocation();
  const [selectedStation, setSelectedStation] = useState("Chef's Table");
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [foodItem, setFoodItem] = useState('');
  const [error, setError] = useState('');

  const stations = {
    "Chef's Table": { description: 'World Inspired Cuisine', image: 'ChefsTable.png' },
    'Clean Plates': { description: 'Allergen Friendly Zone', image: 'CleanPlates.png' },
    'Central Oven': { description: 'Trattoria', image: 'CentralOven.png' },
    'Black Label Grill': { description: '', image: 'BlackLabelGrill.png' },
    'WildFlour': { description: 'Freshly Baked Goods', image: 'WildFlour.png' },
  };

  // Extract the station from the query string
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const stationParam = queryParams.get('station');
    const matchedStation = slugToStation[stationParam];
    if (matchedStation && stations[matchedStation]) {
      setSelectedStation(matchedStation);
    }
  }, [location.search]);  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.endsWith('@stmarys-ca.edu')) {
      setError('Please use a @stmarys-ca.edu email address.');
      return;
    }

    if (!foodItem) {
      setError('Food item is required.');
      return;
    }

    try {
      await axios.post('https://gael-eats-1.onrender.com/api/submissions', {
        station: selectedStation,
        foodItem,
        rating,
        email,
        message,
      });
      alert('Submission successful!');
      setRating(0);
      setEmail('');
      setMessage('');
      setFoodItem('');
      setError('');  // Clear error if submission is successful
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
          <p className="text-gray-600">{stations[selectedStation]?.description || ''}</p>
          <p className="text-sm text-gray-400 mt-1"></p>

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

          <div className="my-4">
            <label className="block mb-2 font-semibold">Enter Food Item:</label>
            <input
              type="text"
              placeholder="Type your food item"
              value={foodItem}
              onChange={(e) => setFoodItem(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              required
            />
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {!email ? (
  <div className="mb-4">
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const decoded = jwt_decode(credentialResponse.credential);
        if (decoded.email.endsWith('@stmarys-ca.edu')) {
          setEmail(decoded.email);
          setError('');
        } else {
          setError('Please use a @stmarys-ca.edu email address.');
        }
      }}
      onError={() => setError('Google login failed')}
    />
  </div>
) : (
  <input
    type="email"
    value={email}
    readOnly
    className="w-full border border-gray-300 px-4 py-2 rounded bg-gray-100 text-gray-600"
  />
)}


            <textarea
              placeholder="Optional message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded h-32"
            />

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
            src={stations[selectedStation]?.image ? `${process.env.PUBLIC_URL}/images/${stations[selectedStation].image}` : `${process.env.PUBLIC_URL}/images/MenuPoster.jpeg`}
            alt={`${selectedStation}`}
            className="w-full rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default Submission;