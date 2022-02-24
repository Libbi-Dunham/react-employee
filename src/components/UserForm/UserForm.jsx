import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export default function UserForm({ className = '', label, onSubmit }) {
  const { formState, formError, clearForm, handleFormChange, setFormError } =
    useForm({
      email: '',
      password: '',
    });

  useEffect(() => {
    clearForm();
  }, [label]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      setFormError('');
      if (!email || password.length < 8)
        throw new Error('Email & Password has to 8+ characters');
      await onSubmit(email, password);
    } catch (error) {
      setFormError(error.message);
    }
  };
  return (
    <form className={className} onSubmit={handleSubmit}>
      <legend>{label}</legend>
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
      <section>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleFormChange}
        />
      </section>
      <button type="submit">Save</button>
      {formError && <p>{formError}</p>}
    </form>
  );
}
