# Platr: Application Planning Document

## 1. Project Overview & Component Hierarchy
Platr is a React app for recipe discovery, filtering, and weekly meal planning.

```
App (owns shared favorites and meal-plan state)
├── Navbar (Logo)
├── Routes
│   ├── Home (Header, RecipeList -> RecipeCard, AudioPlayer, Button)
│   ├── RecipesPage (Header, SearchBar, RecipeList -> RecipeCard, Button)
│   ├── RecipeDetail (VideoPlayer, AudioPlayer, PlanModal, Button)
│   ├── MealPlannerPage (Header, MealPlanner -> DayCard, Button)
│   ├── FavoritesPage (Header, RecipeList -> RecipeCard, Button)
│   └── NotFound (Button)
└── Footer
```

---

## 2. Component Reference & Purposes
- `Navbar` / `Logo`: Responsive top navigation with active route highlights, mobile drawer, and dynamic favorites counter badge.
- `Header`: Reusable page heading block with title, category eyebrow, subtitle, and action slots.
- `Footer`: Global site footer with links and social icons.
- `RecipeCard` / `RecipeList`: Recipe grid and card previews with dietary tags, metadata, and favorite button.
- `RecipeDetail`: Single recipe view via `useParams` with ingredients, instructions, and planner modal.
- `MealPlanner` / `DayCard`: 7-day schedule manager with slot assignment and meal removal.
- `AudioPlayer` / `VideoPlayer`: Native HTML5 media engines with custom controls and unmount cleanup.
- `Button` / `Card` / `SearchBar`: Shared reusable UI primitives with `PropTypes`.
- `NotFound`: 404 fallback page.

---

## 3. State Management & Data Flow Diagram

```
[ User Action ]
      │ (click / toggle / search)
      ▼
[ UI Components ] ──( callback props: onToggleFavorite / onAddMeal )──► [ Custom Hooks ]
      ▲                                                                      │ (setState)
      │                                                                      ▼
[ recipesData.js ] ◄────────( dynamic state / reactive re-render )─────── [ localStorage ]
```

- `App` calls `useFavorites` and `useMealPlan` once and passes the values to the Navbar and pages, so pages stay in sync.
- `useFavorites` stores ids in `platr_favorites`.
- `useMealPlan` stores each week in `platr_meal_plans`, keyed by Monday. Prev and Next open separate schedules, and Clear Week clears only the week on screen.
- Callbacks: Child-to-parent events (`onToggleFavorite`, `onAddMeal`, `onRemoveMeal`, `onChange`, `onClear`).

---

## 4. Props Strategy & Validation
Shared components enforce runtime checks via `prop-types`:
- Shapes: `RecipeCard`/`RecipeList` validate recipe objects (`id`, `title`, `image`, `cookTime`, `difficulty`, `tags`).
- Function Types: Callbacks (`PropTypes.func.isRequired`).
- Enums: `Button` validates variant styles (`primary`, `secondary`, `danger`, `ghost`, `iconBtn`).

---

## 5. Media & Routing Implementation
- Media: Native `<audio>`/`<video>` elements with timeline scrubbing, volume toggles, and unmount cleanup.
- Routing: React Router 7 with parameterized paths (`/recipes/:id`) and 404 handling.
