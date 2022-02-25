import { createContext, useContext, useState, useMemo, useEffect } from 'react';

export const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setProfile(response);
      } catch (error) {
        setProfile({ name: '', email: '', bio: '', birthday: '' });
      }
    };
    fetchProfile();
  }, []);

  const value = useMemo(() => {
    profile, setProfile;
  }, [profile]);

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('has to be within a ProfileProvider');
  }
  return context;
};

export { ProfileProvider, useProfile };
