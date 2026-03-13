import React from "react";
import styles from "./Forgot.module.css";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import Link from "next/link";

export default function Forgot() {
  return (
    <main className={styles.forgot}>
      <div className={styles.card}>
        <h1 className={styles.title}>Reset password</h1>
        <p className={styles.subtitle}>
          Enter your email or phone number to continue.
        </p>

        <div className={styles.form}>
          <Input placeholder="Enter email or phone" />
          <Button text="Reset password" />
        </div>

        <p className={styles.helpText}>
          Don’t have access anymore?
        </p>

        <Link href="/GetStarted" className={styles.link}>
          Try another method
        </Link>
      </div>
    </main>
  );
}