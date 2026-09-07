/**
 * RecipesPage.jsx
 * Browse recipes page with interactive live search, multi-category checkbox filtering,
 * difficulty toggle chips, and dynamic empty states.
 */

import { useState, useMemo, useEffect } from "react";
import { RECIPES_DATA } from "../data/recipesData";
import { useFavorites } from "../hooks/useFavorites";
import { filterRecipes } from "../utils/helpers";
import SearchBar from "../components/UI/SearchBar";
import RecipeList from "../components/Recipe/RecipeList";
import Button from "../components/UI/Button";
import Header from "../components/common/Header";
import styles from "./RecipesPage.module.css";

const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner"];
const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];

export default function RecipesPage() {
  const { isFavorite, toggleFavorite } = useFavorites();

  // Search and filter states
  const [search, setSearch] = useState("");
  const [selectedMealTypes, setSelectedMealTypes] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Sync document title on page load
  useEffect(() => {
    document.title = "Explore Recipes | Platr";
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 300);

    return () => {
      window.clearTimeout(loadingTimer);
      document.title = "Platr: Smart Meal Planning & Recipes";
    };
  }, []);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearch((currentSearch) => currentSearch.trim());
  };

  // Toggle meal type checkbox selection
  const handleMealTypeToggle = (type) => {
    setSelectedMealTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  // Reset all active filters
  const handleResetFilters = () => {
    setSearch("");
    setSelectedMealTypes([]);
    setSelectedDifficulty("All");
  };

  // Filtered recipe list computed via helper
  const filteredRecipes = useMemo(() => {
    return filterRecipes(RECIPES_DATA, {
      search,
      mealTypes: selectedMealTypes,
      difficulty: selectedDifficulty,
    });
  }, [search, selectedMealTypes, selectedDifficulty]);

  const hasActiveFilters =
    search.trim() !== "" ||
    selectedMealTypes.length > 0 ||
    selectedDifficulty !== "All";

  return (
    <main className="page">
      <div className="wrap">
        <div style={{ paddingTop: 32 }}>
          <Header
            eyebrow="Explore & Cook"
            title="All Recipes"
            subtitle="Browse our collection of dependable, delicious, and easy-to-follow recipes."
          />
        </div>

        {isLoading && (
          <div className={styles.loadingState} role="status" aria-live="polite">
            Loading recipes...
          </div>
        )}

        {/* Top Search Bar */}
        <div className={styles.top}>
          <SearchBar
            value={search}
            onChange={setSearch}
            onClear={() => setSearch("")}
            onSubmit={handleSearchSubmit}
            placeholder="Search by recipe name, ingredient (e.g. avocado, salmon), or cuisine..."
          />
        </div>

        {/* Filters and Recipe Grid Layout */}
        <div className={styles.layout}>
          <aside className={styles.filters}>
            <div className={styles.filtersHead}>
              <h2>Filters</h2>
              {hasActiveFilters && (
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={handleResetFilters}
                >
                  Reset All
                </button>
              )}
            </div>

            {/* Meal Type Checkboxes */}
            <div className={styles.filterGroup}>
              <span className={styles.filterGroupTitle}>Meal Type</span>
              {MEAL_TYPES.map((type) => (
                <label key={type} className={styles.filterLabel}>
                  <input
                    type="checkbox"
                    checked={selectedMealTypes.includes(type)}
                    onChange={() => handleMealTypeToggle(type)}
                  />
                  {type}
                </label>
              ))}
            </div>

            {/* Difficulty Chips */}
            <div className={styles.filterGroup}>
              <span className={styles.filterGroupTitle}>Difficulty</span>
              <div className={styles.chips}>
                {DIFFICULTIES.map((diff) => (
                  <button
                    key={diff}
                    type="button"
                    className={
                      selectedDifficulty === diff ? styles.chipOn : styles.chip
                    }
                    onClick={() => setSelectedDifficulty(diff)}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Recipes Content Area */}
          <div className={styles.contentArea}>
            <div className={styles.resultsMeta}>
              <span>
                Showing <strong>{filteredRecipes.length}</strong> of{" "}
                {RECIPES_DATA.length} recipes
              </span>
            </div>

            <RecipeList
              recipes={filteredRecipes}
              isFavorite={isFavorite}
              onToggleFavorite={toggleFavorite}
              emptyTitle="No matching recipes found"
              emptyMessage="We couldn't find any recipes matching your current search or filter combination."
              emptyAction={
                hasActiveFilters ? (
                  <Button variant="secondary" onClick={handleResetFilters}>
                    Clear Filters
                  </Button>
                ) : null
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
}
