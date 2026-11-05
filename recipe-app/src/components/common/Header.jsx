/**
 * Header.jsx
 * Reusable page header component supporting titles, eyebrow tags, subtitles, and action slots.
 */

import PropTypes from "prop-types";
import styles from "./common.module.css";

const Header = ({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}) => {
  return (
    <header className={`${styles.headerContainer} ${className}`.trim()}>
      <div className={styles.headerTop}>
        <div>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h1 className={styles.title}>{title}</h1>
        </div>
        {children && <div className={styles.headerActions}>{children}</div>}
      </div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
};

export default Header;

Header.propTypes = {
  /** Optional small category/eyebrow tag above the title */
  eyebrow: PropTypes.string,
  /** Main heading text */
  title: PropTypes.string.isRequired,
  /** Descriptive subtitle paragraph */
  subtitle: PropTypes.string,
  /** Optional actions or right-aligned controls */
  children: PropTypes.node,
  /** Optional custom class name */
  className: PropTypes.string,
};
