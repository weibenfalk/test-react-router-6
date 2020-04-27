import React from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import Page4 from './Page4';

const Page3 = () => {
  const { coolParam } = useParams();
  const navigate = useNavigate();

  const handleClick = () =>
    navigate('page4', { state: { message: 'This is Weiben saying hi!' } });

  return (
    <>
      <h2>Page 3</h2>
      <p>This is the url param: {coolParam}</p>
      <Link to='/'>
        <p>Go to Home</p>
      </Link>

      <button onClick={handleClick}>Go to nested Page 4</button>

      <Routes>
        <Route path='page4' element={<Page4 />} />
      </Routes>
    </>
  );
};

export default Page3;
