import styles from "./app.module.css";
import { FlexContainer } from "../components/layout";
import { useEffect } from "react";
import ProfileProvider from "../context/profile";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    FB.init({
      appId: "1464359063750380",
      xfbml: false,
      version: "v5.0",
    });
  }, []);

  return (
    <ProfileProvider>
      <FlexContainer className={styles.app} direction="column">
        <Component {...pageProps} />
      </FlexContainer>
    </ProfileProvider>
  );
}
