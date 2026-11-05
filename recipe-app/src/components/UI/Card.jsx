/**
 * Card.jsx
 * Reusable surface container for cards, modules, and elevation wrappers.
 */

import PropTypes from "prop-types";
import styles from "./UI.module.css";

const Card = ({ children, className = "", style = {}, onClick }) => {
  return (
    <div
      className={`${styles.cardContainer} ${className}`.trim()}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
