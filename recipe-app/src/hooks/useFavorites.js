/**
 * useFavorites.js
 * Custom hook managing the user's favorite recipe IDs.
 * Call this once in App and pass the returned values to the Navbar and pages.
 * A second call would keep a separate list, so the badge would not update live.
 */

import { useState, useEffect, useMemo, useCallback } from "react";
import { RECIPES_DATA } from "../data/recipesData";
import { storage } from "../utils/helpers";

const STORAGE_KEY = "platr_favorites";

export function useFavorites() {
  // Initialize from localStorage or default to sample favorite IDs (1, 3)
  const [favoriteIds, setFavoriteIds] = useState(() => {
    return storage.get(STORAGE_KEY, ["1", "3"]);
  });

  // Sync favorites state changes to localStorage
  useEffect(() => {
    storage.set(STORAGE_KEY, favoriteIds);
  }, [favoriteIds]);

  /**
   * Check if a recipe ID is favorited.
   * @param {string|number} recipeId
   * @returns {boolean}
   */
  const isFavorite = useCallback(
    (recipeId) => {
      const idStr = String(recipeId);
      return favoriteIds.includes(idStr);
    },
    [favoriteIds]
  );

  /**
   * Toggle a recipe's favorite status.
   * @param {string|number} recipeId
   */
  const toggleFavorite = useCallback((recipeId) => {
    const idStr = String(recipeId);
    setFavoriteIds((prev) => {
      if (prev.includes(idStr)) {
        return prev.filter((id) => id !== idStr);
      } else {
        return [...prev, idStr];
      }
    });
  }, []);

  /**
   * Array of full recipe objects corresponding to the favorite IDs.
   */
  const favoriteRecipes = useMemo(() => {
    return RECIPES_DATA.filter((recipe) => favoriteIds.includes(String(recipe.id)));
  }, [favoriteIds]);

  return {
    favoriteIds,
    favoriteRecipes,
    isFavorite,
    toggleFavorite,
    favoritesCount: favoriteIds.length,
  };
}

export default useFavorites;
