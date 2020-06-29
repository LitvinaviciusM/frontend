import { useRouter } from "next/router";
import styles from "./auth.module.css";
import { FlexContainer } from "../../components/layout";
import { useState, useContext } from "react";
import { ProfileContext } from "../../context/profile";
import { Button } from "../../components/button";

export default function Register() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <video className={styles.bg} autoPlay muted loop id="login">
        <source src="/mp4/login-3.mp4" type="video/mp4" />
      </video>
      <div className={styles.container}>
        <h1>Create new account</h1>
      </div>
    </>
  )
};
