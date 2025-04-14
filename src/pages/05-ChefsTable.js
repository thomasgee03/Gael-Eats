
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ChefsTable() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('api/submissions/chefs-table')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">Chef's Table</h2>
      <p className="text-gray-600">World Inspired Cuisine</p>

      {items.length === 0 ? (
        <p className="text-gray-500">No submissions yet.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="p-4 border rounded shadow-sm">
              <p className="text-lg font semibold">{item.foodItem}</p>
              <p className="text-sm text-gray-500">Submitted by: {item.email}</p>
              {item.message && (
                <p className="mt-1 text-sm italic text-gray-700">"{item.message}"</p>
            )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ChefsTable;
