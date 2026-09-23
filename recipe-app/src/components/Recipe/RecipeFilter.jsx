/**
 * RecipeFilter.jsx
 * Meal type, cuisine, difficulty, and sort controls for the recipe catalog.
 */

import PropTypes from "prop-types";
import styles from "../../pages/RecipesPage.module.css";

const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Dessert", "Snacks"];
const CUISINES = ["American", "French", "Italian", "Japanese", "Mediterranean", "Thai"];
const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];
const SORTS = [
  { id: "default", label: "Default" },
  { id: "title", label: "Title" },
  { id: "cookTime", label: "Cook time" },
  { id: "difficulty", label: "Difficulty" },
];

export default function RecipeFilter({
  selectedMealTypes,
  onToggleMealType,
  selectedCuisines,
  onToggleCuisine,
  selectedDifficulty,
  onSelectDifficulty,
  sortBy,
  onSortChange,
  hasActiveFilters,
  onReset,
}) {
  return (
    <aside className={styles.filters}>
      <div className={styles.filtersHead}>
        <h2>Filters</h2>
        {hasActiveFilters && (
          <button type="button" className={styles.resetBtn} onClick={onReset}>
            Reset All
          </button>
        )}
      </div>

      <div className={styles.filterGroup}>
        <span className={styles.filterGroupTitle}>Meal Type</span>
        {MEAL_TYPES.map((type) => (
          <label key={type} className={styles.filterLabel}>
            <input
              type="checkbox"
              checked={selectedMealTypes.includes(type)}
              onChange={() => onToggleMealType(type)}
            />
            {type}
          </label>
        ))}
      </div>

      <div className={styles.filterGroup}>
        <span className={styles.filterGroupTitle}>Cuisine</span>
        {CUISINES.map((cuisine) => (
          <label key={cuisine} className={styles.filterLabel}>
            <input
              type="checkbox"
              checked={selectedCuisines.includes(cuisine)}
              onChange={() => onToggleCuisine(cuisine)}
            />
            {cuisine}
          </label>
        ))}
      </div>

      <div className={styles.filterGroup}>
        <span className={styles.filterGroupTitle}>Difficulty</span>
        <div className={styles.chips}>
          {DIFFICULTIES.map((diff) => (
            <button
              key={diff}
              type="button"
              className={selectedDifficulty === diff ? styles.chipOn : styles.chip}
              onClick={() => onSelectDifficulty(diff)}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterGroupTitle} htmlFor="recipe-sort">
          Sort
        </label>
        <select
          id="recipe-sort"
          className={styles.sortSelect}
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
        >
          {SORTS.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}

RecipeFilter.propTypes = {
  selectedMealTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleMealType: PropTypes.func.isRequired,
  selectedCuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleCuisine: PropTypes.func.isRequired,
  selectedDifficulty: PropTypes.string.isRequired,
  onSelectDifficulty: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
  hasActiveFilters: PropTypes.bool.isRequired,
  onReset: PropTypes.func.isRequired,
};
