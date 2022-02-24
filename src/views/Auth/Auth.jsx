import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import { useUser } from '../../context/UserContext';
import { signInUser, signUpUser } from '../../services/users';

export default function Auth({ isSigningUp = false }) {
  const { setUser } = useUser();
  const history = useHistory();

  const handleAuth = async (email, password, bio, date) => {
    try {
      if (isSigningUp) {
        await signUpUser(email, password, bio, date);
        history.push('/confirm-email');
      } else {
        const response = await signInUser(email, password);
        setUser({ id: response.id, email: response.email });
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <section>
      <h2>{isSigningUp ? 'Welcome!' : 'Welcome Back!'}</h2>
      <div>
        <UserForm
          onSubmit={handleAuth}
          label={isSigningUp ? 'Sign Up' : 'Sign In'}
        />
        {isSigningUp ? (
          <p>
            Have an Account? <Link to="/login">Sign In</Link>
          </p>
        ) : (
          <p>
            Make an Account? <Link to="/register">Sign Up</Link>
          </p>
        )}
      </div>
    </section>
  );
}
