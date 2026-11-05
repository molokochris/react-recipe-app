/**
 * RecipeDetail.jsx
 * Full recipe view with dynamic route parameter lookup (useParams),
 * embedded VideoPlayer & AudioPlayer, ingredients, instructions,
 * favorite toggle, and interactive "Add to Meal Planner" modal.
 */

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Heart,
  Users,
  CalendarPlus,
  Check,
  Flame,
} from "lucide-react";
import { RECIPES_DATA } from "../../data/recipesData";
import VideoPlayer from "../Media/VideoPlayer";
import AudioPlayer from "../Media/AudioPlayer";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import ShareMenu from "../common/ShareMenu";
import Seo, { SITE_URL } from "../common/Seo";
import styles from "./Recipe.module.css";

const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MEAL_SLOTS = ["breakfast", "lunch", "dinner"];

const RecipeDetail = ({
  isFavorite = () => false,
  onToggleFavorite = () => {},
  onAddMeal = () => {},
  weekLabel = "This Week",
}) => {
  const { id } = useParams();

  // Find recipe by ID (handling string/number comparison)
  const recipe = RECIPES_DATA.find((r) => String(r.id) === String(id));

  // Sync document title and scroll to top when viewing recipe
  useEffect(() => {
    if (recipe) {
      document.title = `${recipe.title} | Platr`;
    } else {
      document.title = "Recipe Not Found | Platr";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      document.title = "Platr: Smart Meal Planning & Recipes";
    };
  }, [recipe]);

  // Modal & feedback local states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("dinner");
  const [toastMessage, setToastMessage] = useState("");

  if (!recipe) {
    return (
      <main className="page">
        <div className={`wrap ${styles.notFound}`}>
          <h2>Recipe Not Found</h2>
          <p className={styles.notFoundText}>
            The recipe you are looking for does not exist or has been removed.
          </p>
          <Link to="/recipes">
            <Button variant="primary">Browse All Recipes</Button>
          </Link>
        </div>
      </main>
    );
  }

  const favorited = isFavorite(recipe.id);
  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description,
    image: [recipe.image],
    url: `${SITE_URL}/recipes/${recipe.id}`,
    author: {
      "@type": "Organization",
      name: "Platr",
      url: SITE_URL,
    },
    prepTime: `PT${parseInt(recipe.prepTime, 10)}M`,
    cookTime: `PT${parseInt(recipe.cookTime, 10)}M`,
    totalTime: `PT${parseInt(recipe.prepTime, 10) + parseInt(recipe.cookTime, 10)}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.mealType,
    keywords: recipe.tags.join(", "),
    recipeIngredient: recipe.ingredients.map((ingredient) =>
      typeof ingredient === "string"
        ? ingredient
        : `${ingredient.amount} ${ingredient.item}`,
    ),
    recipeInstructions: recipe.instructions.map((instruction, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: instruction.title || `Step ${index + 1}`,
      text: instruction.text || instruction,
    })),
    nutrition: recipe.calories
      ? {
          "@type": "NutritionInformation",
          calories: recipe.calories,
        }
      : undefined,
  };

  const handleAddToPlan = () => {
    onAddMeal(Number(selectedDayIdx), selectedSlot, recipe.id);
    setIsModalOpen(false);
    setToastMessage(
      `Added to ${DAYS_OF_WEEK[selectedDayIdx]} ${selectedSlot} (${weekLabel}).`,
    );
    setTimeout(() => setToastMessage(""), 3500);
  };

  return (
    <main className="page">
      <Seo
        title={`${recipe.title} | Platr`}
        description={recipe.description}
        path={`/recipes/${recipe.id}`}
        image={recipe.image}
        type="article"
        structuredData={recipeSchema}
      />
      {/* Hero background image */}
      <div
        className={styles.detailHero}
        style={{ backgroundImage: `url(${recipe.image})` }}
      >
        <div className={styles.detailBar}>
          <Link to="/recipes" className={styles.back}>
            <ArrowLeft size={16} /> Back to Recipes
          </Link>
          <button
            type="button"
            className={`${styles.heart} ${favorited ? styles.filled : ""}`}
            aria-label={
              favorited ? "Remove from favorites" : "Add to favorites"
            }
            onClick={() => onToggleFavorite(recipe.id)}
          >
            <Heart size={18} fill={favorited ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      {/* Main Recipe Info Panel */}
      <section className={styles.panel}>
        <div className={styles.tags}>
          {(recipe.tags || []).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <h1 className={styles.detailTitle}>
          {recipe.title}
        </h1>

        <p className={styles.description}>{recipe.description}</p>

        <div className={`${styles.meta} ${styles.detailMeta}`}>
          <span>
            <Clock size={16} /> Cook: {recipe.cookTime} (Prep: {recipe.prepTime}
            )
          </span>
          <span>
            <Users size={16} /> Serves {recipe.servings}
          </span>
          {recipe.calories && (
            <span>
              <Flame size={16} /> {recipe.calories}
            </span>
          )}
        </div>

        <div className={styles.actions}>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            <CalendarPlus size={16} /> Add to Meal Planner
          </Button>
          <ShareMenu title={recipe.title} />
        </div>

        {toastMessage && (
          <div className={styles.toast}>
            <Check size={16} /> {toastMessage}
          </div>
        )}
      </section>

      {/* Media: Video & Audio Tip Section */}
      <section className={styles.mediaSection}>
        {recipe.videoUrl && (
          <div>
            <h2 className={styles.mediaHeading}>Video Tutorial</h2>
            <VideoPlayer
              key={recipe.videoUrl}
              src={recipe.videoUrl}
              poster={recipe.image}
              title={recipe.title}
            />
          </div>
        )}

        {recipe.audioTip && (
          <div>
            <h2 className={styles.mediaHeading}>Chef's Kitchen Secret</h2>
            <AudioPlayer
              key={recipe.audioTip.url}
              src={recipe.audioTip.url}
              title={recipe.audioTip.title}
              subtitle={recipe.audioTip.subtitle}
            />
          </div>
        )}
      </section>

      {/* Ingredients & Instructions Grid */}
      <section className={styles.columns}>
        <aside className={styles.ingredients}>
          <h2>Ingredients</h2>
          <ul className={styles.ingredientList}>
            {(recipe.ingredients || []).map((ing, idx) => (
              <li key={idx} className={styles.ingredientItem}>
                <span>{typeof ing === "string" ? ing : ing.item}</span>
                {typeof ing === "object" && ing.amount && (
                  <span className={styles.ingredientAmount}>{ing.amount}</span>
                )}
              </li>
            ))}
          </ul>
        </aside>

        <div className={styles.instructionsSection}>
          <h2>Instructions</h2>
          {(recipe.instructions || []).map((step, idx) => (
            <div key={idx} className={styles.step}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>
                  {step.step || idx + 1}
                </span>
                <span>{step.title || `Step ${idx + 1}`}</span>
              </div>
              <p className={styles.stepText}>{step.text || step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Add to Meal Planner Modal */}
      {isModalOpen && (
        <Modal title="Add to Meal Planner" onClose={() => setIsModalOpen(false)}>
            <p className={styles.modalHint}>
              Schedule <strong>{recipe.title}</strong> into your weekly plan:
            </p>

            <div className={styles.modalFormGroup}>
              <label htmlFor="day-select">Select Day</label>
              <select
                id="day-select"
                className={styles.modalSelect}
                value={selectedDayIdx}
                onChange={(e) => setSelectedDayIdx(Number(e.target.value))}
              >
                {DAYS_OF_WEEK.map((day, idx) => (
                  <option key={day} value={idx}>
                    {day}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.modalFormGroup}>
              <label htmlFor="slot-select">Meal Slot</label>
              <select
                id="slot-select"
                className={styles.modalSelect}
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
              >
                {MEAL_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot.charAt(0).toUpperCase() + slot.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.modalActions}>
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleAddToPlan}>
                Confirm Add
              </Button>
            </div>
        </Modal>
      )}
    </main>
  );
};

export default RecipeDetail;
