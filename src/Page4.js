import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Page4 = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <h2>Page 4</h2>
      <p>{location.state.message}</p>
      <Link to='/'>
        <p>Go to Home</p>
      </Link>
    </>
  );
};

export default Page4;
