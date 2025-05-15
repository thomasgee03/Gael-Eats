import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/01-HomePage';
import DailyMenu from './pages/02-DailyMenu';
import Hours from './pages/03-Hours';
import Submission from './pages/04-Submission';
import ChefsTable from './pages/05-ChefsTable';
import CleanPlates from './pages/06-CleanPlates';
import CentralOven from './pages/07-CentralOven';
import BlackLabelGrill from './pages/08-BlackLabelGrill';
import WildFlour from './pages/09-WildFlour';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "460500940807-jcl6lheqseehcdfbrqtdeiam6a8ft4jo.apps.googleusercontent.com"

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <Router>
    <div className="min-h-screen bg-gray-100 relative flex flex-col items-center">
      {/* Navigation Buttons - TOP RIGHT */}
      <nav className="bg-white shadow p-4 flex justify-between items-center w-full px-4">
  {/* Left side: Gael Eats */}
  <div>
    <Link to="/" className="text-xl font-bold text-black hover:text-blue-600">
      Gael Eats
    </Link>
  </div>

  {/* Right side: other links */}
  <div className="space-x-4">
  <Link to="/home-page" className="hover:text-blue-600 text-lg">Home Page</Link>
  <Link to="/daily-menu" className="hover:text-blue-600 text-lg">Daily Menu</Link>
  <Link to="/hours" className="hover:text-blue-600 text-lg">Hours</Link>
  <Link
  to="/submission"
  className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition text-lg font-semibold"
>
  Submission
</Link>

</div>

</nav>


      {/* Routes */}
      <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/home-page" element={<HomePage />} />
  <Route path="/daily-menu" element={<DailyMenu />} />
  <Route path="/hours" element={<Hours />} />
  <Route path="/submission" element={<Submission />} />
  <Route path="/chefs-table" element={<ChefsTable />} />
  <Route path="/clean-plates" element={<CleanPlates />} />
  <Route path="/central-oven" element={<CentralOven />} />
  <Route path="/black-label-grill" element={<BlackLabelGrill />} />
  <Route path="/wildflour" element={<WildFlour />} />
</Routes>

    </div>
    </Router>
  </GoogleOAuthProvider>
  );
}

export default App;
