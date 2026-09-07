/**
 * useMealPlan.js
 * Custom hook managing the 7-day meal planner schedule.
 * Persists plan data and week offset to localStorage with useEffect sync.
 */

import { useState, useEffect, useCallback, useMemo } from "react";
import { RECIPES_DATA } from "../data/recipesData";
import { storage } from "../utils/helpers";

const STORAGE_KEY = "platr_meal_plan";

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

export function useMealPlan() {
  const [weekOffset, setWeekOffset] = useState(0);
  const [plan, setPlan] = useState(() => {
    return storage.get(STORAGE_KEY, DEFAULT_DAYS);
  });

  const displayedPlan = useMemo(() => {
    const weekStart = getMonday(new Date());
    weekStart.setDate(weekStart.getDate() + weekOffset * 7);

    return plan.map((day, index) => {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + index);

      return {
        ...day,
        name: DAY_NAMES[index],
        num: date.getDate(),
      };
    });
  }, [plan, weekOffset]);

  // Sync state changes with localStorage
  useEffect(() => {
    storage.set(STORAGE_KEY, plan);
  }, [plan]);

  /**
   * Add a recipe to a specific day's meal slot.
   * @param {number} dayIndex - 0-6 (Mon-Sun)
   * @param {'breakfast'|'lunch'|'dinner'} slot
   * @param {string|number} recipeId
   */
  const addMeal = useCallback((dayIndex, slot, recipeId) => {
    setPlan((prevPlan) => {
      return prevPlan.map((day, idx) => {
        if (idx !== dayIndex) return day;
        return {
          ...day,
          meals: {
            ...day.meals,
            [slot]: String(recipeId),
          },
        };
      });
    });
  }, []);

  /**
   * Remove a recipe from a specific day's meal slot.
   * @param {number} dayIndex - 0-6 (Mon-Sun)
   * @param {'breakfast'|'lunch'|'dinner'} slot
   */
  const removeMeal = useCallback((dayIndex, slot) => {
    setPlan((prevPlan) => {
      return prevPlan.map((day, idx) => {
        if (idx !== dayIndex) return day;
        const newMeals = { ...day.meals };
        delete newMeals[slot];
        return {
          ...day,
          meals: newMeals,
        };
      });
    });
  }, []);

  /**
   * Clear all meal slots for the entire week.
   */
  const clearWeek = useCallback(() => {
    setPlan((prevPlan) => {
      return prevPlan.map((day) => ({
        ...day,
        meals: {},
      }));
    });
  }, []);

  /**
   * Navigate weeks.
   */
  const nextWeek = useCallback(() => setWeekOffset((prev) => prev + 1), []);
  const prevWeek = useCallback(() => setWeekOffset((prev) => prev - 1), []);

  /**
   * Computed week title label.
   */
  const weekLabel = useMemo(() => {
    const weekStart = getMonday(new Date());
    weekStart.setDate(weekStart.getDate() + weekOffset * 7);
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
    return RECIPES_DATA.find((r) => String(r.id) === String(recipeId)) || null;
  }, []);

  return {
    plan: displayedPlan,
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
