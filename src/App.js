import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/01-HomePage';
import DailyMenu from './pages/02-DailyMenu';
import Hours from './pages/03-Hours';
import Submission from './pages/04-Submission';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 relative flex flex-col justify-center items-center">
      {/* Navigation Buttons - TOP RIGHT */}
      <nav className="bg-white shadow p-4 flex justify-between items-center w-full px-4">
        <h1 className="text-xl font-bold text-black-600">Gael Eats</h1>
        <div className="space-x-4">
          <Link to="/home-page" className="hover:text-blue-600">Home Page</Link>
          <Link to="/daily-menu" className="hover:text-blue-600">Daily Menu</Link>
          <Link to="/hours" className="hover:text-blue-600">Hours</Link>
          <Link to="/submission" className="hover:text-blue-600">Submission</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
  <Route path="/home-page" element={<HomePage />} />
  <Route path="/daily-menu" element={<DailyMenu />} />
  <Route path="/hours" element={<Hours />} />
  <Route path="/submission" element={<Submission />} />
</Routes>

    </div>
  );
}

export default App;
