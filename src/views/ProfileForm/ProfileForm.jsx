import React, { useEffect, useState } from 'react';
// import { createProfile } from '../../services/profiles';
import { useHistory } from 'react-router';
import { useUser } from '../../context/UserContext';
import { useProfile } from '../../context/ProfileContext';
import { useForm } from '../../hooks/useForm';

export default function ProfileForm({ className = '', label, onSubmit }) {
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [bio, setBio] = useState('');
  //   const [birthday, setBirthday] = useState('');
  const { user } = useUser();
  const { profile } = useProfile();
  console.log(profile);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const { formState, formError, clearForm, handleFormChange, setFormError } =
    useForm(
      profile
        ? {
            name: profile.name,
            email: profile.email,
            bio: profile.bio,
            birthday: profile.birthday,
          }
        : {
            name: '',
            email: user.email,
            bio: '',
            birthday: '',
          }
    );

  useEffect(() => {
    clearForm();
  }, [label]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, bio, birthday } = formState;
    try {
      await onSubmit({ name, email, bio, birthday });
      alert('Profile Created!');
      history.push('/profile');
    } catch (error) {
      setFormError(error.message);
    } finally {
      setLoading(false);
    }
    // const { name, email, bio, birthday } = formState;
    // try {
    //   setFormError('');
    //   if (!bio.length < 5);
    //   throw new Error('bio has to be 5+ characters');
    //   await onSubmit(name, email, bio, birthday);
    // } catch (error) {
    //   setFormError(error.message);
    // }
  };

  return (
    <>
      {loading && <p>Loading</p>}
      <form className={className} onSubmit={handleSubmit}>
        <legend>{label}</legend>
        <section>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="name"
            name="name"
            value={formState.name}
            onChange={handleFormChange}
          />
          <section>
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              type="email"
              name="email"
              disabled={true}
              value={formState.email}
              onChange={handleFormChange}
            />
          </section>
        </section>
        <section>
          <label htmlFor="bio">Bio: </label>
          <input
            id="bio"
            type="bio"
            name="bio"
            value={formState.bio}
            onChange={handleFormChange}
          />
        </section>
        <section>
          <label htmlFor="birthday">Birthday: </label>
          <input
            id="birthday"
            type="date"
            name="birthday"
            value={formState.birthday}
            onChange={handleFormChange}
          />
        </section>
        <button type="submit">Save</button>
        {formError && <p>{formError}</p>}
      </form>
    </>
  );
}
