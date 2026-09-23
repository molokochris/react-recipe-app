/**
 * Modal.jsx
 * Reusable dialog. Children hold the form or detail content.
 */

import PropTypes from "prop-types";
import styles from "./UI.module.css";

export default function Modal({ title, onClose, children }) {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.modalHead}>
          <h3>{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  /** Dialog heading */
  title: PropTypes.string.isRequired,
  /** Close handler for the backdrop and cancel actions */
  onClose: PropTypes.func.isRequired,
  /** Dialog body */
  children: PropTypes.node.isRequired,
};
