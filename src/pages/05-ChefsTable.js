import React, { useEffect, useState, Component } from 'react';
     import axios from 'axios';
     import { Star } from 'lucide-react';

     class ErrorBoundary extends Component {
       state = { hasError: false };

       static getDerivedStateFromError() {
         return { hasError: true };
       }

       render() {
         if (this.state.hasError) {
           return <p className="text-red-500 p-8">Something went wrong rendering Chef's Table.</p>;
         }
         return this.props.children;
       }
     }

     function ChefsTable() {
       const [items, setItems] = useState([]);
       const [loading, setLoading] = useState(true);
       const [error, setError] = useState('');
       const inWipeWindow = minute % 2 === 0;


       const fetchSubmissions = async () => {
         setLoading(true);
         setError('');
         try {
           const res = await axios.get("https://gael-eats-1.onrender.com/api/submissions/chef's-table");
           if (Array.isArray(res.data)) {
             setItems(res.data);
           } else {
             throw new Error('Invalid data format');
           }
           setLoading(false);
         } catch (err) {
           console.error('Fetch error:', err);
           setError('Failed to load submissions. Please try again later.');
           setLoading(false);
         }
       };

       useEffect(() => {
        fetchSubmissions();
      
        const checkAndWipe = () => {
          const now = new Date();
          const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
          const hour = now.getHours();
          const minute = now.getMinutes();
      
          // 🕒 Wipe times (just a few examples)
          const inWipeWindow =
            (
              // 10:30–11:00am Mon–Fri
              [1, 2, 3, 4, 5].includes(day) && hour === 10 && minute >= 30
            ) ||
            (
              // 2:00–4:45pm Mon–Fri
              [1, 2, 3, 4, 5].includes(day) &&
              ((hour === 14) || (hour === 15) || (hour === 16 && minute < 45))
            ) ||
            (
              // 8:00–9:00pm Mon–Thu
              [1, 2, 3, 4].includes(day) && hour === 20
            ) ||
            (
              // 11:00–11:59pm Mon–Thu, Sun
              ([0, 1, 2, 3, 4].includes(day)) && hour === 23
            ) ||
            (
              // 12:00–7:30am Mon–Fri
              [1, 2, 3, 4, 5].includes(day) &&
              ((hour >= 0 && hour < 7) || (hour === 7 && minute < 30))
            ) ||
            (
              // 8:00–11:59pm Fri–Sat
              [5, 6].includes(day) && hour === 20
            ) ||
            (
              // 12:00–9:00am Sat–Sun
              [6, 0].includes(day) &&
              ((hour >= 0 && hour < 9))
            ) ||
            (
              // 1:30–5:00pm Sat–Sun
              [0, 6].includes(day) &&
              ((hour === 13 && minute >= 30) || (hour >= 14 && hour < 17))
            );
      
          if (inWipeWindow) {
            setItems([]); // 👈 Wipe from frontend state
          }
        };
      
        const interval = setInterval(checkAndWipe, 60000); // check every minute
      
        return () => clearInterval(interval);
      }, []);
      

       return (
         <ErrorBoundary>
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
               <p className="text-gray-600 mt-4">Loading submissions...</p>
             ) : error ? (
               <p className="text-red-500 mt-4">{error}</p>
             ) : items.length === 0 ? (
               <p className="text-gray-600 mt-4">No submissions yet.</p>
             ) : (
               <ul className="space-y-4 mt-4">
                 {items.map(item => (
                   <li key={item._id || Math.random()} className="p-4 border rounded shadow-sm">
                     <p className="text-lg font-semibold">{item.foodItem || 'No food item'}</p>
                     <p className="text-sm text-gray-500">Submitted by: {item.email || 'Unknown'}</p>
                     <div className="flex items-center space-x-1">
                       {[...Array(5)].map((_, i) => (
                         <Star
                           key={i}
                           size={16}
                           className={i < (item.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}
                         />
                       ))}
                       <span className="ml-2 text-sm text-gray-600">{item.rating || 0}/5</span>
                     </div>
                     {item.message && (
                       <p className="mt-1 text-sm italic text-gray-700">"{item.message}"</p>
                     )}
                   </li>
                 ))}
               </ul>
             )}
           </div>
         </ErrorBoundary>
       );
     }

     export default ChefsTable;
