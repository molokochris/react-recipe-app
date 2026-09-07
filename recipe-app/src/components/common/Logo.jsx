/**
 * Logo.jsx
 * Brand Logo component linking back to the Home page.
 */

import { Link } from "react-router-dom";
import styles from "./common.module.css";

export default function Logo() {
  return (
    <Link to="/" className={styles.logo} aria-label="Platr home">
      <img
        className={styles.brandImage}
        src="/assets/images/Platr Recipe Website Logo.png"
        alt="Platr"
      />
    </Link>
  );
}
