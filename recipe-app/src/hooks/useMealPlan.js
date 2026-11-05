/**
 * useMealPlan.js
 * Custom hook for the weekly meal planner.
 * Call this once in App and pass the returned values down so every page
 * reads the same schedule. Each navigable week is stored separately.
 */

import { useState, useEffect, useCallback, useMemo } from "react";
import { RECIPES_DATA } from "../data/recipesData";
import { storage } from "../utils/helpers";

const PLANS_STORAGE_KEY = "platr_meal_plans";
const LEGACY_STORAGE_KEY = "platr_meal_plan";

const DEFAULT_DAYS = [
  { name: "Mon", meals: { lunch: "5", dinner: "7" } },
  { name: "Tue", meals: { breakfast: "8" } },
  { name: "Wed", meals: { lunch: "6" } },
  { name: "Thu", meals: { dinner: "1" } },
  { name: "Fri", meals: { dinner: "3" } },
  { name: "Sat", meals: { breakfast: "2" } },
  { name: "Sun", meals: { lunch: "4", dinner: "7" } },
];

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getMonday(date) {
  const monday = new Date(date);
  const day = monday.getDay();
  const daysSinceMonday = day === 0 ? 6 : day - 1;
  monday.setDate(monday.getDate() - daysSinceMonday);
  monday.setHours(12, 0, 0, 0);
  return monday;
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getWeekStart(offset) {
  const monday = getMonday(new Date());
  monday.setDate(monday.getDate() + offset * 7);
  return monday;
}

function emptyWeek() {
  return DAY_NAMES.map((name) => ({ name, meals: {} }));
}

function isWeekPlan(value) {
  return (
    Array.isArray(value) &&
    value.length === 7 &&
    value.every((day) => day && typeof day.meals === "object" && day.meals !== null)
  );
}

/** Keep the seven weekday slots and drop computed date numbers before saving. */
function normalizeWeek(week) {
  const source = isWeekPlan(week) ? week : emptyWeek();
  return DAY_NAMES.map((name, index) => ({
    name,
    meals: { ...(source[index]?.meals || {}) },
  }));
}

/**
 * Read every saved week. Older builds stored one array under platr_meal_plan;
 * that array is kept as the current week's schedule.
 */
function readPlans(currentKey) {
  const stored = storage.get(PLANS_STORAGE_KEY, null);
  if (stored && typeof stored === "object" && !Array.isArray(stored)) {
    const plans = {};
    Object.entries(stored).forEach(([key, week]) => {
      if (isWeekPlan(week)) plans[key] = normalizeWeek(week);
    });
    if (Object.keys(plans).length > 0) return plans;
  }

  const legacy = storage.get(LEGACY_STORAGE_KEY, null);
  if (isWeekPlan(legacy)) {
    return { [currentKey]: normalizeWeek(legacy) };
  }

  return { [currentKey]: normalizeWeek(DEFAULT_DAYS) };
}

export function useMealPlan() {
  const [weekOffset, setWeekOffset] = useState(0);
  const [plansByWeek, setPlansByWeek] = useState(() => {
    return readPlans(toDateKey(getWeekStart(0)));
  });

  const weekKey = useMemo(() => toDateKey(getWeekStart(weekOffset)), [weekOffset]);

  const displayedPlan = useMemo(() => {
    const weekStart = getWeekStart(weekOffset);
    const storedWeek = plansByWeek[weekKey] || emptyWeek();

    return normalizeWeek(storedWeek).map((day, index) => {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + index);

      return {
        ...day,
        num: date.getDate(),
      };
    });
  }, [plansByWeek, weekKey, weekOffset]);

  // Save the whole week map. Prev and Next then reopen their own meals.
  useEffect(() => {
    storage.set(PLANS_STORAGE_KEY, plansByWeek);
  }, [plansByWeek]);

  const updateWeek = useCallback(
    (updater) => {
      setPlansByWeek((prevPlans) => {
        const currentWeek = normalizeWeek(prevPlans[weekKey] || emptyWeek());
        return {
          ...prevPlans,
          [weekKey]: updater(currentWeek),
        };
      });
    },
    [weekKey],
  );

  /**
   * Add a recipe to a specific day's meal slot in the week on screen.
   * @param {number} dayIndex - 0-6 (Mon-Sun)
   * @param {'breakfast'|'lunch'|'dinner'} slot
   * @param {string|number} recipeId
   */
  const addMeal = useCallback(
    (dayIndex, slot, recipeId) => {
      updateWeek((currentWeek) =>
        currentWeek.map((day, idx) => {
          if (idx !== dayIndex) return day;
          return {
            ...day,
            meals: {
              ...day.meals,
              [slot]: String(recipeId),
            },
          };
        }),
      );
    },
    [updateWeek],
  );

  /**
   * Remove a recipe from a specific day's meal slot in the week on screen.
   * @param {number} dayIndex - 0-6 (Mon-Sun)
   * @param {'breakfast'|'lunch'|'dinner'} slot
   */
  const removeMeal = useCallback(
    (dayIndex, slot) => {
      updateWeek((currentWeek) =>
        currentWeek.map((day, idx) => {
          if (idx !== dayIndex) return day;
          const newMeals = { ...day.meals };
          delete newMeals[slot];
          return {
            ...day,
            meals: newMeals,
          };
        }),
      );
    },
    [updateWeek],
  );

  /**
   * Clear every meal slot for the week currently on screen.
   */
  const clearWeek = useCallback(() => {
    updateWeek((currentWeek) =>
      currentWeek.map((day) => ({
        ...day,
        meals: {},
      })),
    );
  }, [updateWeek]);

  /**
   * Navigate to a different saved week.
   */
  const nextWeek = useCallback(() => setWeekOffset((prev) => prev + 1), []);
  const prevWeek = useCallback(() => setWeekOffset((prev) => prev - 1), []);

  /**
   * Computed week title label.
   */
  const weekLabel = useMemo(() => {
    const weekStart = getWeekStart(weekOffset);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    const prefix =
      weekOffset === 0
        ? "This Week"
        : weekOffset === 1
          ? "Next Week"
          : weekOffset === -1
            ? "Last Week"
            : "Week";

    return `${prefix} (${formatDate(weekStart)} - ${formatDate(weekEnd)})`;
  }, [weekOffset]);

  /**
   * Helper to resolve recipe object by ID for slots.
   */
  const getRecipeById = useCallback((recipeId) => {
    if (!recipeId) return null;
    return RECIPES_DATA.find((recipe) => String(recipe.id) === String(recipeId)) || null;
  }, []);

  return {
    plan: displayedPlan,
    weekKey,
    addMeal,
    removeMeal,
    clearWeek,
    weekOffset,
    nextWeek,
    prevWeek,
    weekLabel,
    getRecipeById,
  };
}

export default useMealPlan;
