import { colors, LazyImage } from "../../base";
import { useMeals } from "../hooks";
import type { MealItem } from "../store/myPageSlice";

const Meals = () => {
  const { displayedMeals, hasMoreMeals, handleLoadMore, filteredMeals, selectedMealType } = useMeals();

  return (
    <div className="mb-6 mx-auto" style={{ width: "960px" }}>
      <div className="grid grid-cols-4 gap-4">
        {displayedMeals.map((meal: MealItem) => (
          <div
            key={meal.id}
            className="relative overflow-hidden shadow-md"
            style={{ width: "234px", height: "234px" }}
          >
            <LazyImage
              src={meal.image}
              alt={`${meal.type} meal`}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 text-white px-3 py-1 text-sm font-normal"
              style={{ backgroundColor: colors.primary300 }}
            >
              {meal.date.split("-")[1]}.{meal.date.split("-")[2]}.
              {meal.type.charAt(0).toUpperCase() + meal.type.slice(1)}
            </div>
          </div>
        ))}
      </div>

      {hasMoreMeals && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="text-white font-light text-[18px] px-16 py-4 rounded-md transition-colors duration-200 hover:opacity-90"
            style={{
              background: colors.primary300400,
            }}
          >
            記録をもっと見る
          </button>
        </div>
      )}

      {filteredMeals.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No meals found for {selectedMealType}
        </div>
      )}
    </div>
  );
};

export default Meals;
