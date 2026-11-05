/**
 * App.jsx
 * Owns the shared favorites list and meal plans, then passes those values
 * into the Navbar and pages. Sibling routes update one another without a reload.
 */

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/common/Footer";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import Home from "./pages/Home";
import RecipesPage from "./pages/RecipesPage";
import MealPlannerPage from "./pages/MealPlannerPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFound from "./pages/NotFound";
import { useFavorites } from "./hooks/useFavorites";
import { useMealPlan } from "./hooks/useMealPlan";
import "./index.css";

const App = () => {
  const { favoriteRecipes, isFavorite, toggleFavorite, favoritesCount } = useFavorites();
  const {
    plan,
    weekKey,
    addMeal,
    removeMeal,
    clearWeek,
    prevWeek,
    nextWeek,
    weekLabel,
    getRecipeById,
  } = useMealPlan();

  return (
    <>
      <Navbar favoritesCount={favoritesCount} />
      <Routes>
        <Route
          path="/"
          element={
            <Home isFavorite={isFavorite} onToggleFavorite={toggleFavorite} />
          }
        />
        <Route
          path="/recipes"
          element={
            <RecipesPage
              isFavorite={isFavorite}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/recipes/:id"
          element={
            <RecipeDetail
              isFavorite={isFavorite}
              onToggleFavorite={toggleFavorite}
              onAddMeal={addMeal}
              weekLabel={weekLabel}
            />
          }
        />
        <Route
          path="/meal-planner"
          element={
            <MealPlannerPage
              plan={plan}
              weekKey={weekKey}
              onAddMeal={addMeal}
              onRemoveMeal={removeMeal}
              onClearWeek={clearWeek}
              onPrevWeek={prevWeek}
              onNextWeek={nextWeek}
              weekLabel={weekLabel}
              getRecipeById={getRecipeById}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favoriteRecipes={favoriteRecipes}
              isFavorite={isFavorite}
              onToggleFavorite={toggleFavorite}
              favoritesCount={favoritesCount}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
