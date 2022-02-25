import React from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  return (
    <>
      <p>User profile</p>
      <Link to="/profile/edit">Edit Profile</Link>
    </>
  );
}
