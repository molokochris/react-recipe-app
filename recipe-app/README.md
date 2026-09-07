# Platr: Smart Recipe and Meal Planning Application

A modern, responsive React web application for recipe discovery, nutritional planning, weekly meal scheduling, and bookmarking favorite culinary ideas.

---

## Application Screenshots

### 1. Home and Trending Picks

![Home Page](./screenshots/recipe-app-chi-jade.vercel.app.png)

### 2. Search and Multi-Faceted Filters

![Recipes Search](./screenshots/recipe-app-chi-jade.vercel.app-recipes.png)

### 3. Dynamic Recipe Detail and Video Player

![Recipe Detail](./screenshots/recipe-app-chi-jade.vercel.app-recipes-2.png)

### 4. Weekly Meal Planner

![Weekly Meal Planner](./screenshots/recipe-app-chi-jade.vercel.app-meal-planner.png)

### 5. Bookmarked Favorites

![Saved Favorites](./screenshots/recipe-app-chi-jade.vercel.app-favorites.png)

### 6. Responsive Mobile View

![Mobile View](./screenshots/recipe-app-chi-jade.vercel.app.mobile.png)

---

## Key Features

1. **Centralized Recipe Catalog (`recipesData.js`)**:
   - 8 complete recipes with cook times, servings, calories, difficulty ratings, dietary tags, ingredient lists, and step-by-step instructions.

2. **Live Search and Multi-Faceted Filters**:
   - Real-time text search across titles, ingredients, and tags with one-click clear.
   - Meal type checkboxes (Breakfast, Lunch, Dinner) and difficulty chips (Easy, Medium, Hard).
   - Dynamic empty states with "Reset Filters" action.

3. **Dynamic Recipe Detail Routing (`/recipes/:id`)**:
   - Dynamic `useParams()` lookup with 404 fallback.
   - Native HTML5 **Video Player** for cooking tutorials and **Audio Player** for chef tips.
   - Interactive **Add to Meal Planner** modal to schedule recipes into any day/slot.
   - One-click favorite toggling and link sharing with toast confirmation.

4. **Weekly Meal Planner (`/meal-planner`)**:
   - 7-day calendar view across `breakfast`, `lunch`, and `dinner` slots.
   - Direct inline recipe picker for empty slots and removal buttons on scheduled meals.
   - Week navigation (Prev / Next) and safety-confirmed "Clear Week" functionality.
   - Continuous `localStorage` synchronization via custom hook.

5. **Favorites System (`/favorites`)**:
   - Global `useFavorites` hook with `localStorage` persistence.
   - Real-time navigation counter badge in the Navbar.
   - Dedicated favorites page with empty-state guidance.

6. **Custom HTML5 Media Players**:
   - **`AudioPlayer.jsx`**: Play/Pause controls, scrubbable progress bar, volume toggle, time tracking, and unmount cleanup.
   - **`VideoPlayer.jsx`**: Video playback engine with poster fallback, custom timeline, fullscreen mode, and unmount cleanup.

---

## Component Architecture

```
src/
├── components/
│   ├── common/ (Footer.jsx, Header.jsx, Logo.jsx)
│   ├── MealPlanner/ (DayCard.jsx, MealPlanner.jsx)
│   ├── Media/ (AudioPlayer.jsx, VideoPlayer.jsx)
│   ├── Navigation/ (Navbar.jsx)
│   ├── Recipe/ (RecipeCard.jsx, RecipeDetail.jsx, RecipeList.jsx)
│   └── UI/ (Button.jsx, Card.jsx, SearchBar.jsx)
├── data/ (recipesData.js)
├── hooks/ (useFavorites.js, useMealPlan.js)
├── pages/ (FavoritesPage.jsx, Home.jsx, MealPlannerPage.jsx, NotFound.jsx, RecipesPage.jsx)
└── utils/ (helpers.js)
```

---

## How to View

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Validate lint and production build
npm run lint
npm run build
```
