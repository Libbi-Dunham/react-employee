import React from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  return (
    <>
      <p>You are now in your profile!</p>
      <p>If you do not have a profile click the option to create one</p>
      <p>If you already have a profile click the option to edit</p>
      <Link to="/profile/edit">Edit Profile</Link>
      <Link to="/profile/edit">Create Profile</Link>
    </>
  );
}
