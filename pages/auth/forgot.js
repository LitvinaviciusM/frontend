import { useRouter } from "next/router";
import styles from "./auth.module.css";
import { FlexContainer } from "../../components/layout";
import { useState, useContext } from "react";
import { ProfileContext } from "../../context/profile";
import { Button } from "../../components/button";

export default function Forgot() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
  }

  return (
    <>
      <video className={styles.bg} autoPlay muted loop id="login">
        <source src="/mp4/login-3.mp4" type="video/mp4" />
      </video>
      <div className={styles.container}>
        <h1>Forgot password</h1>
        <div className={styles.ctaTitle}>Enter your email and we'll send you instructions</div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <FlexContainer direction="column">
            <input placeholder="email" className={styles.input} name="email" type="email" autoComplete="username" />
            <Button type="submit" color="black" className={`${styles.ctaEmail}`}>
              <span>Send</span>
            </Button>
          </FlexContainer>
        </form>
      </div>
    </>
  )
};
