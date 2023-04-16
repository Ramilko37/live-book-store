import React from "react";
// import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { Logo } from "../icons";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>Profile</li>
          <li>Shop</li>
          <li>About</li>
        </ul>
      </nav>
      <div className={styles.rightSection}>
        <button className={styles.liveBookBtn}>Open Live Book</button>
        <select className={styles.languageSelector}>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
        </select>
      </div>
    </header>
  );
};
