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

  const fetchSubmissions = async () => {
    setLoading(true);
    setError('');
    try {
      console.log('[DEBUG] Fetching submissions...');
      const res = await axios.get("https://gael-eats-1.onrender.com/api/submissions/chef's-table");
      if (Array.isArray(res.data)) {
        setItems(res.data);
      } else {
        throw new Error('Invalid data format');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to load submissions. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const checkAndWipe = () => {
    const now = new Date();
    const day = now.getDay(); // Sunday = 0
    const hour = now.getHours();
    const minute = now.getMinutes();
  
    const inWipeWindow =
      (
        [1, 2, 3, 4, 5].includes(day) && (
          (hour === 10 && minute >= 30) ||   // 10:30am to 11:00am (M-F)
          (hour === 14 || hour === 15 || (hour === 16 && minute < 45)) ||   // 2:00pm to 4:45pm (M-F)
          (hour === 20) ||   // 8:00pm (M-F)
          (hour === 23) ||   // 11:00pm (Sun-Thu)
          (hour < 7 || (hour === 7 && minute < 30))   // 12:00am - 7:30am (M-F)
        )
      ) ||
      (
        [6, 0].includes(day) && (
          (hour < 9) ||   // 12:00am - 9:00am (Sat-Sun)
          (hour === 13 && minute >= 30) ||   // 1:30pm (Sat-Sun)
          (hour >= 14 && hour < 17)   // 2:00pm - 5:00pm (Sat-Sun)
        )
      ) ||
      (
        [5, 6].includes(day) && hour === 20  // 8:00pm (Fri-Sat)
      );
  
    console.log(`[DEBUG] Time: ${hour}:${minute}, Day: ${day}, Wipe? ${inWipeWindow}`);
  
    if (inWipeWindow) {
      setItems([]);
      console.log("[DEBUG] Menu wiped.");
    }
  };  

  useEffect(() => {
    fetchSubmissions();
    const interval = setInterval(checkAndWipe, 60000); // Check every 1 min
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


