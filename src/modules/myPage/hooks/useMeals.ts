import { useAppSelector, useAppDispatch } from "../../base";
import { loadMoreMeals } from "../store/myPageSlice";

export const useMeals = () => {
  const dispatch = useAppDispatch();
  const { meals, selectedMealType, mealsDisplayCount } = useAppSelector(
    (state) => state.myPage
  );

  const filteredMeals =
    selectedMealType === "all"
      ? meals
      : meals.filter((meal) => meal.type === selectedMealType);

  const displayedMeals = filteredMeals.slice(0, mealsDisplayCount);
  const hasMoreMeals = filteredMeals.length > mealsDisplayCount;

  const handleLoadMore = () => {
    dispatch(loadMoreMeals());
  };

  return {
    displayedMeals,
    hasMoreMeals,
    handleLoadMore,
    filteredMeals,
    selectedMealType,
  };
};
