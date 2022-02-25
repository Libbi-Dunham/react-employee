import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export default function ProfileForm({ className = '', label, onSubmit }) {
  const { formState, formError, clearForm, handleFormChange, setFormError } =
    useForm({
      name: '',
      email: '',
      bio: '',
      birthday: '',
    });

  useEffect(() => {
    clearForm();
  }, [label]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  );
}
