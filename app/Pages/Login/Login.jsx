"use client";
import React from "react";
import styles from "./Login.module.css";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "../../Config/firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Spinner from "../../components/Spinner/Spinner"

export default function Login() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading,setLoading] = useState(false)

  const route = useRouter();
 const  toDashBoard = async () => {
  if(!email || !Password ){
    alert("enter valied Email & Password")
  }else{
    setLoading(true)
  }
 
  try {

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      Password
    );setLoading(false)

    console.log("Login success:", userCredential.user);
    route.push('/DashBoard')

  } catch (error) {
    console.log(error.message);
  }
};

  
  return (
<main className={styles.login}>
  <div className={styles.card}>
    <h1 className={styles.title}>Welcome back</h1>

    <p className={styles.subtitle}>Sign in to continue to your account</p>

    <div className={styles.form}>
      <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
      <Input value={Password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />

      <Button text="Sign in" onClick={toDashBoard} />

      {loading && <Spinner />}   
    </div>

    <Link href="/Forgot" className={styles.forgot}>
      Forgot password?
    </Link>

    <p className={styles.signup}>
      Don’t have an account? <Link href="/GetStarted">Sign up</Link>
    </p>
  </div>
</main>
  );
}
