//call ProfileForm
// if else with if its updating or creating
import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import ProfileForm from '../ProfileForm/ProfileForm';
import { updateProfile, createProfile } from '../../services/profiles';
import { useProfile } from '../../context/ProfileContext';

export default function Profile({ creating = false }) {
  const { setProfile } = useProfile();
  const history = useHistory();

  const handleProfile = async (name, email, bio, birthday) => {
    try {
      if (creating) {
        await createProfile(name, email, bio, birthday);
        <Redirect to="/profile" />;
      } else {
        const response = await updateProfile(name, email, bio, birthday);
        setProfile({
          name: response.name,
          email: response.email,
          bio: response.bio,
          birthday: response.birthday,
        });
        history.push('/profile');
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      {creating ? 'Create Profile' : 'Edit Profile'}
      <ProfileForm onSubmit={handleProfile} />
    </>
  );
}
