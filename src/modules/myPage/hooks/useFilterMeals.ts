import { useAppDispatch, useAppSelector, iconKnife, iconCup } from "../../base";
import { setSelectedMealType } from "../store/myPageSlice";

export const useFilterMeals = () => {
  const dispatch = useAppDispatch();
  const selectedMealType = useAppSelector(
    (state) => state.myPage.selectedMealType
  );

  const mealTypes = [
    { id: "morning", label: "Morning", icon: iconKnife },
    { id: "lunch", label: "Lunch", icon: iconKnife },
    { id: "dinner", label: "Dinner", icon: iconKnife },
    { id: "snack", label: "Snack", icon: iconCup },
  ] as const;

  const handleMealTypeClick = (mealType: (typeof mealTypes)[number]["id"]) => {
    dispatch(setSelectedMealType(mealType));
  };

  return {
    selectedMealType,
    mealTypes,
    handleMealTypeClick,
  };
};