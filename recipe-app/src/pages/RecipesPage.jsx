/**
 * RecipesPage.jsx
 * Browse recipes page with interactive live search, multi-category checkbox filtering,
 * difficulty toggle chips, and dynamic empty states.
 */

import { useState, useMemo, useEffect } from "react";
import { RECIPES_DATA } from "../data/recipesData";
import { useFavorites } from "../hooks/useFavorites";
import { filterRecipes, sortRecipes } from "../utils/helpers";
import SearchBar from "../components/UI/SearchBar";
import RecipeList from "../components/Recipe/RecipeList";
import RecipeFilter from "../components/Recipe/RecipeFilter";
import Button from "../components/UI/Button";
import Loading from "../components/UI/Loading";
import Header from "../components/common/Header";
import styles from "./RecipesPage.module.css";

export default function RecipesPage() {
  const { isFavorite, toggleFavorite } = useFavorites();

  // Search and filter states
  const [search, setSearch] = useState("");
  const [selectedMealTypes, setSelectedMealTypes] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [sortBy, setSortBy] = useState("default");
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

  const handleCuisineToggle = (cuisine) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine) ? prev.filter((item) => item !== cuisine) : [...prev, cuisine],
    );
  };

  // Reset all active filters
  const handleResetFilters = () => {
    setSearch("");
    setSelectedMealTypes([]);
    setSelectedCuisines([]);
    setSelectedDifficulty("All");
    setSortBy("default");
  };

  // Filtered and sorted recipe list computed via helpers
  const filteredRecipes = useMemo(() => {
    const filtered = filterRecipes(RECIPES_DATA, {
      search,
      mealTypes: selectedMealTypes,
      cuisines: selectedCuisines,
      difficulty: selectedDifficulty,
    });
    return sortRecipes(filtered, sortBy);
  }, [search, selectedMealTypes, selectedCuisines, selectedDifficulty, sortBy]);

  const hasActiveFilters =
    search.trim() !== "" ||
    selectedMealTypes.length > 0 ||
    selectedCuisines.length > 0 ||
    selectedDifficulty !== "All" ||
    sortBy !== "default";

  return (
    <main className="page">
      <div className="wrap">
        <div className={styles.intro}>
          <Header
            eyebrow="Explore & Cook"
            title="All Recipes"
            subtitle="Browse our collection of dependable, delicious, and easy-to-follow recipes."
          />
        </div>

        {isLoading && <Loading />}

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
          <RecipeFilter
            selectedMealTypes={selectedMealTypes}
            onToggleMealType={handleMealTypeToggle}
            selectedCuisines={selectedCuisines}
            onToggleCuisine={handleCuisineToggle}
            selectedDifficulty={selectedDifficulty}
            onSelectDifficulty={setSelectedDifficulty}
            sortBy={sortBy}
            onSortChange={setSortBy}
            hasActiveFilters={hasActiveFilters}
            onReset={handleResetFilters}
          />

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
