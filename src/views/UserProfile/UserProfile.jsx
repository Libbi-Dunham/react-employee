import React from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  return (
    <>
      <Link to="/profile/edit"></Link>
      <p>User profile</p>
    </>
  );
}
