import { useRouter } from "next/router";
import styles from "./auth.module.css";
import { FlexContainer } from "../../components/layout";
import { useState, useContext } from "react";
import { ProfileContext } from "../../context/profile";
import { Button } from "../../components/button";
import Link from 'next/link'

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { actions: { set } } = useContext(ProfileContext);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
  }

  function handleFacebookLogin() {
    setIsLoading(true);
    let profile = {};
    FB.login(async () => {
      await new Promise(resolve => {
        FB.api("/me", res => { profile = { ...profile, ...res }; resolve(); });
      });
      await new Promise(resolve => {
        FB.api(
          "/me/picture",
          {
            redirect: false,
            height: 200,
            width: 200,
            type: "normal"
          },
          res => { profile = { ...profile, picture: res.data }; resolve(); },
        );
      });
      set(profile);
      router.push("/");
    });
  }

  return (
    <>
      <video className={styles.bg} autoPlay muted loop id="login">
        <source src="/mp4/login-3.mp4" type="video/mp4" />
      </video>
      <div className={styles.container}>
        <h1>Log in using</h1>
        <FlexContainer direction="row" justify="space" className={styles.ctaContainer}>
          <FlexContainer direction="column">
            <button onClick={handleFacebookLogin} type="button" className={`${styles.cta} ${styles.ctaFacebook}`}>
              <img src="/svg/facebook.svg" alt="facebook-login" className={styles.ctaSvg}/>
            </button>
            <div className={styles.ctaTitle}>Facebook</div>
          </FlexContainer>
          <FlexContainer direction="column">
            <button type="button" className={`${styles.cta} ${styles.ctaInstagram}`}>
              <img src="/svg/instagram.svg" alt="facebook-login" className={styles.ctaSvg} />
            </button>
            <div className={styles.ctaTitle}>Instagram</div>
          </FlexContainer>
        </FlexContainer>
        <div className={styles.ctaTitle}>Email</div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <FlexContainer direction="column">
            <input placeholder="email" className={styles.input} name="email" type="email" autoComplete="username" />
            <input placeholder="password" className={styles.input} name="password" type="password" autoComplete="current-password" />
            <Button type="submit" color="black" className={`${styles.ctaEmail}`}>
              <span>Log in</span>
            </Button>
          </FlexContainer>
        </form>
        <FlexContainer direction="column" align="center" className={styles.linkContainer}>
          <Link href="/auth/forgot">
            <a className={styles.link}>Forgot password?</a>
          </Link>
          <Link href="/auth/register">
            <a className={styles.link}>Create new account</a>
          </Link>
        </FlexContainer>
      </div>
    </>
  )
};
