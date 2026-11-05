/**
 * RecipeCard.jsx
 * Visual card representing a recipe in lists and grids.
 * Handles favorite click bubbling cleanly and links to the recipe detail page.
 */

import PropTypes from "prop-types";
import { Clock, Heart, Signal } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Recipe.module.css";

const RecipeCard = ({
  recipe,
  favorite = false,
  onToggleFavorite,
}) => {
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(recipe.id);
    }
  };

  return (
    <Link to={`/recipes/${recipe.id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
        />
        <button
          type="button"
          className={`${styles.heart} ${favorite ? styles.filled : ""}`}
          onClick={handleFavoriteClick}
          aria-label={favorite ? `Remove ${recipe.title} from favorites` : `Add ${recipe.title} to favorites`}
        >
          <Heart size={18} fill={favorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.tags}>
          {(recipe.tags || []).slice(0, 2).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <h3 className={styles.title}>{recipe.title}</h3>

        <div className={styles.meta}>
          <span>
            <Clock size={14} /> {recipe.cookTime}
          </span>
          <span>
            <Signal size={14} /> {recipe.difficulty}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;

RecipeCard.propTypes = {
  /** Recipe data object */
  recipe: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cookTime: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  /** Whether the recipe is currently in user favorites */
  favorite: PropTypes.bool,
  /** Callback triggered when user clicks favorite heart button */
  onToggleFavorite: PropTypes.func,
};
