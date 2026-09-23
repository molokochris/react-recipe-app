/**
 * RecipeList.jsx
 * Responsive grid list of RecipeCards with dynamic empty state rendering.
 */

import PropTypes from "prop-types";
import { Utensils } from "lucide-react";
import RecipeCard from "./RecipeCard";
import styles from "./Recipe.module.css";

export default function RecipeList({
  recipes = [],
  isFavorite = () => false,
  onToggleFavorite,
  emptyTitle = "No recipes found",
  emptyMessage = "Try adjusting your search criteria or filter selections.",
  emptyAction,
}) {
  if (!recipes || recipes.length === 0) {
    return (
      <div className={styles.emptyState}>
        <Utensils size={40} color="var(--line)" />
        <div className={styles.emptyStateTitle}>{emptyTitle}</div>
        <div className={styles.emptyStateText}>{emptyMessage}</div>
        {emptyAction && <div className={styles.emptyAction}>{emptyAction}</div>}
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          favorite={isFavorite(recipe.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

RecipeList.propTypes = {
  /** Array of recipe objects */
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      cookTime: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  /** Function checking if recipe ID is favorited */
  isFavorite: PropTypes.func,
  /** Callback when heart icon is toggled */
  onToggleFavorite: PropTypes.func,
  /** Custom empty state heading */
  emptyTitle: PropTypes.string,
  /** Custom empty state subtext */
  emptyMessage: PropTypes.string,
  /** Optional CTA node in empty state */
  emptyAction: PropTypes.node,
};
