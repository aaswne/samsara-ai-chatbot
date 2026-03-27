"use client";

import styles from "./Page.module.css";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { useTheme } from "@/app/Context/ThemeContext";
import Footer from "./components/Footer/Footer";
import { useRouter } from "next/navigation";
import Button from "./components/Button/Button";

export default function AboutSamara() {
  const route = useRouter();
  const { darkMode } = useTheme();

  const handleClick = () => {
    route.push("/GetStarted");
  };

  return (
    <div
      className={styles.landingPage}
      style={{
        background: darkMode ? "#111" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <ThemeToggle />

      <span className={styles.span}>
        <h1 className={styles.headingText}>About Samara.Ai</h1>
        <p className={styles.tagLine}>Samsara.Ai evolves intelligence for a better tomorrow.</p>
      </span>

      <div className={styles.buttonDiv}>
        <Button text="Get Started" onClick={handleClick} />
        <Button text="Home" onClick={() => route.push("/")} />
      </div>

      <Footer />
    </div>
  );
}