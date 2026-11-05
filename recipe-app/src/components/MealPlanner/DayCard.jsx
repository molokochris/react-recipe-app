/**
 * DayCard.jsx
 * Represents a single day in the weekly Meal Planner.
 * Supports adding recipes via dropdown/callback and removing scheduled meals.
 */

import { useState } from "react";
import PropTypes from "prop-types";
import { Plus, X } from "lucide-react";
import { RECIPES_DATA } from "../../data/recipesData";
import styles from "./MealPlanner.module.css";

const SLOTS = ["breakfast", "lunch", "dinner"];

const DayCard = ({
  day,
  dayIndex,
  getRecipeById,
  onAddMeal,
  onRemoveMeal,
}) => {
  const [activeSelectSlot, setActiveSelectSlot] = useState(null);

  const handleSelectRecipe = (slot, recipeId) => {
    if (recipeId) {
      onAddMeal(dayIndex, slot, recipeId);
    }
    setActiveSelectSlot(null);
  };

  return (
    <article className={styles.dayCard}>
      <div className={styles.dayHead}>
        <span className={styles.dayName}>{day.name}</span>
        <span className={styles.dayNum}>{day.num}</span>
      </div>

      <div className={styles.slotsList}>
        {SLOTS.map((slot) => {
          const recipeId = day.meals ? day.meals[slot] : null;
          const recipe = getRecipeById(recipeId);

          return (
            <div key={slot} className={styles.slotItem}>
              <span className={styles.slotLabel}>{slot}</span>

              {recipe ? (
                <div className={styles.filledSlot}>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className={styles.slotThumbnail}
                  />
                  <span className={styles.slotRecipeTitle} title={recipe.title}>
                    {recipe.title}
                  </span>
                  <button
                    type="button"
                    className={styles.removeSlotBtn}
                    onClick={() => onRemoveMeal(dayIndex, slot)}
                    aria-label={`Remove ${recipe.title} from ${day.name} ${slot}`}
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : activeSelectSlot === slot ? (
                <select
                  autoFocus
                  className={styles.inlineSelect}
                  defaultValue=""
                  onChange={(e) => handleSelectRecipe(slot, e.target.value)}
                  onBlur={() => setActiveSelectSlot(null)}
                >
                  <option value="" disabled>
                    Choose recipe...
                  </option>
                  {RECIPES_DATA.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.title}
                    </option>
                  ))}
                </select>
              ) : (
                <button
                  type="button"
                  className={styles.emptySlotBtn}
                  onClick={() => setActiveSelectSlot(slot)}
                  aria-label={`Add recipe to ${day.name} ${slot}`}
                >
                  <Plus size={14} /> Add recipe
                </button>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default DayCard;

DayCard.propTypes = {
  /** Day data object containing name, day number, and meals object */
  day: PropTypes.shape({
    name: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    meals: PropTypes.object,
  }).isRequired,
  /** 0-indexed day position in the week */
  dayIndex: PropTypes.number.isRequired,
  /** Resolver function to look up recipe details by ID */
  getRecipeById: PropTypes.func.isRequired,
  /** Callback when recipe is added to a slot */
  onAddMeal: PropTypes.func.isRequired,
  /** Callback when recipe is removed from a slot */
  onRemoveMeal: PropTypes.func.isRequired,
};
