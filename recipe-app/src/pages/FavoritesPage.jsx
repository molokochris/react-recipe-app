/**
 * FavoritesPage.jsx
 * Displays the user's bookmarked favorite recipes with localStorage persistence
 * and empty state handling.
 */

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";
import RecipeList from "../components/Recipe/RecipeList";
import Header from "../components/common/Header";
import Button from "../components/UI/Button";
import styles from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const { favoriteRecipes, isFavorite, toggleFavorite, favoritesCount } = useFavorites();

  // Update document title
  useEffect(() => {
    document.title = "Your Favorites | Platr";
    return () => {
      document.title = "Platr: Smart Meal Planning & Recipes";
    };
  }, []);

  return (
    <main className="page">
      <div className={`wrap ${styles.shell}`}>
        <Header
          eyebrow="Saved Collection"
          title="Your Favorite Recipes"
          subtitle={
            favoritesCount > 0
              ? `You have saved ${favoritesCount} recipe${favoritesCount === 1 ? "" : "s"} to your cookbook.`
              : "Save your favorite meals to easily find them when planning your week."
          }
        />

        <RecipeList
          recipes={favoriteRecipes}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
          emptyTitle="No favorites saved yet"
          emptyMessage="Browse our recipes and tap the heart icon on any recipe to save it here for quick access!"
          emptyAction={
            <Link to="/recipes">
              <Button variant="primary">Explore Recipes</Button>
            </Link>
          }
        />
      </div>
    </main>
  );
}
