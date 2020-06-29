import { FlexContainer } from "../components/layout";
import { useContext } from "react";
import { ProfileContext } from "../context/profile";

export default function App() {
  const { profile } = useContext(ProfileContext);
  return (
    <FlexContainer>
      {profile && (
        <>
          <img src={profile.picture.url} />
          <span>{profile.name}</span>
          <span>{profile.surname}</span>
        </>
      )}
    </FlexContainer>
  );
}
