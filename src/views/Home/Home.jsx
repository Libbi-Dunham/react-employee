import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Home() {
  const { user } = useUser();
  return (
    <>
      <h1>Welcome to Acem Inc.</h1>
      <p>As part of joining Acem please choose an option below</p>
      <p>Thank you for being apart of our team</p>
      {user?.email ? (
        <Link to="/profile">Take a look at your Profile</Link>
      ) : (
        <>
          <Link to="/register">Make an Account</Link>
          {' or '}
          <Link to="/login">Sign in</Link>
        </>
      )}
    </>
  );
}
