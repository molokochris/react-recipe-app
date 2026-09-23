/**
 * SearchBar.jsx
 * Controlled search input component with live clearing and icon integration.
 */

import { useState } from "react";
import PropTypes from "prop-types";
import { Search, X } from "lucide-react";
import styles from "./UI.module.css";

export default function SearchBar({
  value,
  onChange,
  onClear,
  onSubmit,
  placeholder = "Search recipes, ingredients...",
  className = "",
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <form
      className={`${styles.searchWrapper} ${className}`.trim()}
      onSubmit={onSubmit}
    >
      <Search className={styles.searchIcon} size={18} />
      <input
        type="text"
        className={`${styles.searchInput} ${isFocused ? styles.searchFocused : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        aria-label="Search recipes"
      />
      {value && (
        <button
          type="button"
          className={styles.clearBtn}
          onClick={onClear}
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </form>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
