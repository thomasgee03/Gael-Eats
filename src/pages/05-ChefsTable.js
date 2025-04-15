     import React, { useEffect, useState } from 'react';
     import axios from 'axios';
     import { Star } from 'lucide-react';

     function ChefsTable() {
       const [items, setItems] = useState([]);
       const [loading, setLoading] = useState(true);
       const [error, setError] = useState('');

       const fetchSubmissions = async () => {
         setLoading(true);
         setError('');
         try {
           const res = await axios.get('https://gael-eats-1.onrender.com/api/submissions/chefs-table');
           setItems(res.data);
           setLoading(false);
         } catch (err) {
           console.error('Fetch error:', err);
           setError('Failed to load submissions. Please try again later.');
           setLoading(false);
         }
       };

       useEffect(() => {
         fetchSubmissions();
       }, []);

       return (
         <div className="p-8">
           <h2 className="text-3xl font-bold">Chef's Table</h2>
           <p className="text-gray-600">World Inspired Cuisine</p>
           <button
             onClick={fetchSubmissions}
             className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
             disabled={loading}
           >
             {loading ? 'Loading...' : 'Refresh Submissions'}
           </button>

           {loading && !items.length ? (
             <p className="text-gray-500 mt-4">Loading submissions...</p>
           ) : error ? (
             <p className="text-red-500 mt-4">{error}</p>
           ) : items.length === 0 ? (
             <p className="text-gray-500 mt-4">No submissions yet.</p>
           ) : (
             <ul className="space-y-4 mt-4">
               {items.map(item => (
                 <li key={item._id} className="p-4 border rounded shadow-sm">
                   <p className="text-lg font-semibold">{item.foodItem || 'No food item'}</p>
                   <p className="text-sm text-gray-500">Submitted by: {item.email}</p>
                   <div className="flex items-center space-x-1">
                     {[...Array(5)].map((_, i) => (
                       <Star
                         key={i}
                         size={16}
                         className={i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}
                       />
                     ))}
                     <span className="ml-2 text-sm text-gray-600">{item.rating}/5</span>
                   </div>
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
