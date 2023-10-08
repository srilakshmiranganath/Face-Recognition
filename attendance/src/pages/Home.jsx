import React from 'react';
import { Link } from 'react-router-dom';
//hey this is the home componenet
function Home() {
  return (
    <div>
      <Link to="/upload">REGISTER</Link>
    </div>
  );
}

export default Home;