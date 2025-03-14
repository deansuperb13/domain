"use client";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [domain, setDomain] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDomain(window.location.hostname);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>
          Want this <strong className={styles.domain}>{domain || "Loading..."}</strong>?
        </h1>
        <p className={styles.contactText}>Exclusive domain available for sale </p>
        <p>( Rs.100 to Rs.1000 )</p>
        <button className={styles.contactButton}><a href="mailto:deansuperb13@gmail.com">Contact Me</a></button>
        <p className={styles.email}>Email: <span><a href="mailto:deansuperb13@gmail.com">deansuperb13@gmail.com</a></span></p>
      </div>
    </div>
  );
}