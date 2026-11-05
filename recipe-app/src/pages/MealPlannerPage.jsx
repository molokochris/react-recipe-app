/**
 * MealPlannerPage.jsx
 * Weekly meal planner. The schedule comes from App, so Prev and Next
 * open separately saved weeks.
 */

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Trash2, Check } from "lucide-react";
import MealPlanner from "../components/MealPlanner/MealPlanner";
import Header from "../components/common/Header";
import Button from "../components/UI/Button";
import styles from "./MealPlannerPage.module.css";

const MealPlannerPage = ({
  plan = [],
  weekKey = "",
  onAddMeal = () => {},
  onRemoveMeal = () => {},
  onClearWeek = () => {},
  onPrevWeek = () => {},
  onNextWeek = () => {},
  weekLabel = "",
  getRecipeById = () => null,
}) => {

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
      onClearWeek();
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
            onClick={onPrevWeek}
            ariaLabel="Previous week"
          >
            <ChevronLeft size={16} /> Prev
          </Button>
          <Button
            variant="secondary"
            onClick={onNextWeek}
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
          weekKey={weekKey}
          getRecipeById={getRecipeById}
          onAddMeal={onAddMeal}
          onRemoveMeal={onRemoveMeal}
        />
      </div>
    </main>
  );
};

export default MealPlannerPage;
