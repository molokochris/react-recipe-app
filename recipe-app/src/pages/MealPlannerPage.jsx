/**
 * MealPlannerPage.jsx
 * Interactive Weekly Meal Planning view connecting custom hooks, week navigation,
 * and calendar grid management.
 */

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Trash2, Check } from "lucide-react";
import { useMealPlan } from "../hooks/useMealPlan";
import MealPlanner from "../components/MealPlanner/MealPlanner";
import Header from "../components/common/Header";
import Button from "../components/UI/Button";
import styles from "./MealPlannerPage.module.css";

export default function MealPlannerPage() {
  const {
    plan,
    addMeal,
    removeMeal,
    clearWeek,
    prevWeek,
    nextWeek,
    weekLabel,
    getRecipeById,
  } = useMealPlan();

  const [confirmClear, setConfirmClear] = useState(false);

  // Sync document title
  useEffect(() => {
    document.title = "Weekly Meal Planner | Platr";
    return () => {
      document.title = "Platr: Smart Meal Planning & Recipes";
    };
  }, []);

  const handleClear = () => {
    if (confirmClear) {
      clearWeek();
      setConfirmClear(false);
    } else {
      setConfirmClear(true);
      setTimeout(() => setConfirmClear(false), 4000);
    }
  };

  return (
    <main className="page">
      <div className={`wrap ${styles.shell}`}>
        <Header
          eyebrow="Meal Organizer"
          title="Weekly Schedule"
          subtitle={weekLabel}
        >
          <Button
            variant="secondary"
            onClick={prevWeek}
            ariaLabel="Previous week"
          >
            <ChevronLeft size={16} /> Prev
          </Button>
          <Button
            variant="secondary"
            onClick={nextWeek}
            ariaLabel="Next week"
          >
            Next <ChevronRight size={16} />
          </Button>
          <Button
            variant={confirmClear ? "danger" : "secondary"}
            onClick={handleClear}
            ariaLabel="Clear week meals"
          >
            {confirmClear ? (
              <>
                <Check size={16} /> Confirm Clear?
              </>
            ) : (
              <>
                <Trash2 size={16} /> Clear Week
              </>
            )}
          </Button>
        </Header>

        <MealPlanner
          plan={plan}
          getRecipeById={getRecipeById}
          onAddMeal={addMeal}
          onRemoveMeal={removeMeal}
        />
      </div>
    </main>
  );
}
