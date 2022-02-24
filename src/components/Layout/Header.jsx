import React from 'react';
// import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
// import AuthButton from '../../components/AuthButton/AuthButton';

export default function Header() {
  const { user } = useUser();

  return (
    <>
      <header>
        <h2>Acme Inc.</h2>
        <p>
          {user?.email ? (
            <>
              <span>Signed in as</span>
              <span> {user?.email}</span>
            </>
          ) : (
            <span>Not Signed In</span>
          )}
          {/* <AuthButton /> */}
        </p>
      </header>
    </>
  );
}
