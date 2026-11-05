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
   - 17 complete recipes across Breakfast (3), Lunch (4), Dinner (5), Dessert (3), and Snacks (2), with cook times, servings, calories, difficulty ratings, dietary tags, ingredient lists, and step-by-step instructions.

2. **Live Search and Multi-Faceted Filters**:
   - Real-time text search across titles, ingredients, and tags with one-click clear.
   - Meal type checkboxes (Breakfast, Lunch, Dinner, Dessert, Snacks), cuisine checkboxes, difficulty chips (Easy, Medium, Hard), and sort by title, cook time, or difficulty.
   - Dynamic empty states with "Reset Filters" action.

3. **Dynamic Recipe Detail Routing (`/recipes/:id`)**:
   - Dynamic `useParams()` lookup with 404 fallback.
   - Native HTML5 **Video Player** for cooking tutorials and **Audio Player** for chef tips.
   - Interactive **Add to Meal Planner** modal to schedule recipes into any day/slot.
   - One-click favorite toggling and link sharing with toast confirmation.

4. **Weekly Meal Planner (`/meal-planner`)**:
   - 7-day calendar view across `breakfast`, `lunch`, and `dinner` slots.
   - Direct inline recipe picker for empty slots and removal buttons on scheduled meals.
   - Prev and Next each open a separate week. That week's meals are saved in `localStorage` under its Monday date.
   - Safety-confirmed "Clear Week" clears only the week on screen.

5. **Favorites System (`/favorites`)**:
   - Favorites are created once in `App` and passed to the Navbar and pages, so the badge updates as soon as a heart is toggled.
   - The same list is saved in `localStorage` and shown on the Favorites page.
   - Dedicated favorites page with empty-state guidance.

6. **Custom HTML5 Media Players**:
   - **`AudioPlayer.jsx`**: Play/Pause controls, scrubbable progress bar, volume toggle, time tracking, unmount cleanup, a visible message when playback fails, and fallback text with a download link when audio isn't supported.
   - **`VideoPlayer.jsx`**: Video playback engine with a poster image, custom timeline, fullscreen mode, unmount cleanup, a visible message when playback fails, and fallback text with a download link when video isn't supported.

---

## Component Architecture

```
src/
├── components/
│   ├── common/ (Footer.jsx, Header.jsx, Logo.jsx, Seo.jsx, ShareMenu.jsx)
│   ├── MealPlanner/ (DayCard.jsx, MealPlanner.jsx)
│   ├── Media/ (AudioPlayer.jsx, VideoPlayer.jsx)
│   ├── Navigation/ (Navbar.jsx)
│   ├── Recipe/ (RecipeCard.jsx, RecipeDetail.jsx, RecipeFilter.jsx, RecipeList.jsx)
│   └── UI/ (Button.jsx, Card.jsx, Loading.jsx, Modal.jsx, SearchBar.jsx)
├── data/ (recipesData.js)
├── hooks/ (useFavorites.js, useMealPlan.js)
├── pages/ (FavoritesPage.jsx, Home.jsx, MealPlannerPage.jsx, NotFound.jsx, RecipesPage.jsx)
└── utils/ (helpers.js)
```

---

## Technologies Used

- **React 19** for the component UI and hooks
- **Vite** for the development server and production build
- **React Router 7** for client-side routing, including `/recipes/:id`
- **CSS Modules** for scoped component styles
- **PropTypes** for runtime prop validation
- **Lucide React** and **React Icons** for icons
- **HTML5 `<video>` and `<audio>`** for Creative Commons cooking tutorials and spoken cooking tips, with custom controls, playback errors, and unsupported-browser fallbacks
- **localStorage** for favorites and weekly meal-plan persistence

---

## How to View

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm start

# 3. Validate lint and production build
npm run lint
npm run build
```
