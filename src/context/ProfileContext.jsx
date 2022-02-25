import { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../services/profiles';

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
        if (response.length > 0) {
          setProfile(response[0]);
        }
      } catch (error) {
        setProfile({ name: '', email: '', bio: '', birthday: '' });
      }
    };
    fetchProfile();
  }, []);

  // const value = useMemo(() => {
  //   profile, setProfile;
  // }, [profile]);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
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
