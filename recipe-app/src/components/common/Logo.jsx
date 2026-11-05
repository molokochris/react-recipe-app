/**
 * Logo.jsx
 * Brand Logo component linking back to the Home page.
 */

import { Link } from "react-router-dom";
import styles from "./common.module.css";

const Logo = () => {
  return (
    <Link to="/" className={styles.logo} aria-label="Platr home">
      <img
        className={styles.brandImage}
        src="/assets/images/platr-logo.png"
        alt="Platr"
      />
    </Link>
  );
};

export default Logo;
