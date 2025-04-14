import React, { useState } from 'react';
import { Star } from 'lucide-react';

function Submission() {
  const [rating, setRating] = useState(0);

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold mb-2">Chefs Table</h1>
          <p className="text-gray-600 mb-6">Subheading for description or instructions</p>
          <p className="text-sm text-gray-500 mb-12">Disclaimer to be sending in correct menu items</p>

          {/* Submission Form */}
          <h2 className="text-2xl font-semibold mb-4">Submission</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border p-2 rounded w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="border p-2 rounded w-full"
            />
            <textarea
              placeholder="Your message"
              className="border p-2 rounded w-full h-32"
            ></textarea>

            {/* Rating System */}
            <div className="mt-4">
              <p className="font-medium mb-1">Your Rating</p>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={30}
                    className={`cursor-pointer ${
                      rating >= star ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 mt-4"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/ChefsTableSign.jpeg`} // Replace with your image file name
            alt="Chef's Table"
            className="rounded shadow max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Submission;

