import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <h2>Home Page</h2>
    <Link to='page2'>
      <p>Go to page 2</p>
    </Link>
    <Link to='page3/weibenIsAwesome'>
      <p>Go to page 3</p>
    </Link>
  </>
);

export default Home;
