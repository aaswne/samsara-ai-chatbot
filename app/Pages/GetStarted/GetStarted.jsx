"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./GetStarted.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { auth } from "../../Config/firebase";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Spinner from "../../components/Spinner/Spinner";

export default function GetStarted() {
  const route = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!email || !userName || !password) {
      alert("input cant be empty");
    } else {
      setLoading(true);
    }

    
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: userName,
      });
      setLoading(false);
      route.push("./DashBoard");

      console.log("User Created:", user);
    } catch (error) {
      console.log("Error code:", error.code);
      console.log("Error message:", error.message);
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create account</h1>

        <p className={styles.subtitle}>Sign up to get started</p>

        <div className={styles.form}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <Button onClick={handleSignup} text="Sign Up" />
          {loading && <Spinner />}
        </div>

        <p className={styles.loginText}>
          Already have an account? <Link href="/Login">Login</Link>
        </p>
      </div>
    </main>
  );
}
