import React from 'react';
import { Link } from 'react-router-dom';

const Page2 = () => (
  <>
    <h2>Page 2</h2>
    <Link to='/'>
      <p>Go to Home</p>
    </Link>
  </>
);

export default Page2;
