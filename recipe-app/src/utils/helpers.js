/**
 * helpers.js
 * Utility helper functions for data manipulation, formatting, and localStorage resilience.
 */

/**
 * Filter a list of recipes based on query string, meal type, and difficulty level.
 * @param {Array<Object>} recipes - Array of recipe objects
 * @param {Object} filters - Filter criteria { search, mealTypes, cuisines, difficulty }
 * @returns {Array<Object>} Filtered array of recipes
 */
export function filterRecipes(
  recipes = [],
  { search = "", mealTypes = [], cuisines = [], difficulty = "" } = {},
) {
  const query = search.trim().toLowerCase();

  return recipes.filter((recipe) => {
    // 1. Text Search matching title, description, ingredients, or tags
    if (query) {
      const matchTitle = recipe.title?.toLowerCase().includes(query);
      const matchDesc = recipe.description?.toLowerCase().includes(query);
      const matchTags = recipe.tags?.some((t) => t.toLowerCase().includes(query));
      const matchCuisine = recipe.cuisine?.toLowerCase().includes(query);
      const matchIngredients = recipe.ingredients?.some((ing) =>
        (typeof ing === "string" ? ing : ing.item).toLowerCase().includes(query)
      );

      if (!matchTitle && !matchDesc && !matchTags && !matchIngredients && !matchCuisine) {
        return false;
      }
    }

    // 2. Meal Type filter (multiple selection)
    if (mealTypes.length > 0) {
      const recipeMealType = recipe.mealType?.toLowerCase();
      const hasMealTypeMatch = mealTypes.some(
        (type) => type.toLowerCase() === recipeMealType || recipe.tags?.some((t) => t.toLowerCase() === type.toLowerCase())
      );
      if (!hasMealTypeMatch) {
        return false;
      }
    }

    // 3. Cuisine filter (multiple selection)
    if (cuisines.length > 0) {
      const recipeCuisine = recipe.cuisine?.toLowerCase();
      const hasCuisineMatch = cuisines.some(
        (cuisine) => cuisine.toLowerCase() === recipeCuisine,
      );
      if (!hasCuisineMatch) {
        return false;
      }
    }

    // 4. Difficulty filter (single selection or all)
    if (difficulty && difficulty !== "All") {
      if (recipe.difficulty?.toLowerCase() !== difficulty.toLowerCase()) {
        return false;
      }
    }

    return true;
  });
}

const DIFFICULTY_RANK = { easy: 1, medium: 2, hard: 3 };

/**
 * Sort recipes without mutating the source list.
 * @param {Array<Object>} recipes
 * @param {"default"|"title"|"cookTime"|"difficulty"} sortBy
 * @returns {Array<Object>}
 */
export function sortRecipes(recipes = [], sortBy = "default") {
  const sorted = [...recipes];

  if (sortBy === "title") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "cookTime") {
    sorted.sort(
      (a, b) => (parseInt(a.cookTime, 10) || 0) - (parseInt(b.cookTime, 10) || 0),
    );
  } else if (sortBy === "difficulty") {
    sorted.sort(
      (a, b) =>
        (DIFFICULTY_RANK[a.difficulty?.toLowerCase()] || 0) -
        (DIFFICULTY_RANK[b.difficulty?.toLowerCase()] || 0),
    );
  }

  return sorted;
}

/**
 * Format a duration in seconds to mm:ss format.
 * @param {number} seconds
 * @returns {string} Formatted time string
 */
export function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

/**
 * Safe localStorage wrapper to prevent exceptions in restrictive environments.
 */
export const storage = {
  get: (key, fallbackValue) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallbackValue;
    } catch (err) {
      console.warn(`Error reading localStorage key "${key}":`, err);
      return fallbackValue;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn(`Error writing to localStorage key "${key}":`, err);
    }
  },
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.warn(`Error removing localStorage key "${key}":`, err);
    }
  }
};
