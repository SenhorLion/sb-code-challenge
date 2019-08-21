import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Display basic links for the other routes
 */
const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/countries">Countries</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
