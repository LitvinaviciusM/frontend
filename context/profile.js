import { createContext, useState } from "react";

export const ProfileContext = createContext();

export default function ProfileProvider({ children }) {
  const [profile, setProfile] = useState();

  function flush() {
    setProfile();
  }

  function set(ob) {
    setProfile(ob);
  }

  return (
    <ProfileContext.Provider
      value={{
        profile,
        actions: {
          flush,
          set,
        }
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}