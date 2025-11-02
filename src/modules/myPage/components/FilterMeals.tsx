import { iconPolygon } from "../../base";
import { useFilterMeals } from "../hooks";

const FilterMeals = () => {
  const { selectedMealType, mealTypes, handleMealTypeClick } = useFilterMeals();

  return (
    <div className="flex justify-center gap-4 py-6">
      {mealTypes.map((meal) => (
        <button
          key={meal.id}
          onClick={() => handleMealTypeClick(meal.id)}
          className={`relative group hover:scale-105 transition-transform duration-200 ${
            selectedMealType === meal.id ? "scale-110" : ""
          }`}
        >
          <div className="relative w-32 h-36 flex items-center justify-center">
            <img
              src={iconPolygon}
              alt="hexagon background"
              className="absolute inset-0 w-full h-full object-contain"
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-white">
              <img
                src={meal.icon}
                alt={meal.label}
                className="w-14 h-14 mb-2 filter brightness-0 invert"
              />
              <span className="text-xl font-normal font-inter">
                {meal.label}
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default FilterMeals;
