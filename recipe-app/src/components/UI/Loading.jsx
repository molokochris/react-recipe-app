/**
 * Loading.jsx
 * Status message shown while recipe data is preparing.
 */

import PropTypes from "prop-types";
import styles from "./UI.module.css";

export default function Loading({ message = "Loading recipes..." }) {
  return (
    <div className={styles.loadingState} role="status" aria-live="polite">
      {message}
    </div>
  );
}

Loading.propTypes = {
  /** Status text announced to assistive technology */
  message: PropTypes.string,
};
