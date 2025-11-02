import { colors, useAppSelector } from "../../base";

const MyExercise = () => {
  const { exerciseData } = useAppSelector((state) => state.myRecord);

  return (
    <div
      className="px-6 py-4 mx-auto mt-12"
      style={{ width: "960px", backgroundColor: colors.dark500Text }}
    >
      <div className="flex items-center mb-6">
        <div className="text-white mr-8">
          <div className="text-[15px] font-normal font-inter">MY</div>
          <div className="text-[15px] font-normal font-inter">EXERCISE</div>
        </div>
        <div className="text-white text-[22px] font-normal font-inter">
          2021.05.21
        </div>
      </div>

      <div
        className="overflow-y-auto custom-scrollbar"
        style={{
          height: "300px",
          scrollbarWidth: "thin",
          scrollbarColor: `${colors.primary300} ${colors.gray400}`,
          paddingRight: "10px",
        }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: ${colors.primary300} ${colors.gray400};
              scrollbar-gutter: stable;
            }
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
              display: block;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: ${colors.gray400};
              border-radius: 3px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background-color: ${colors.primary300};
              border-radius: 3px;
              min-height: 20px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background-color: ${colors.primary400};
            }
            .custom-scrollbar::-webkit-scrollbar-corner {
              background: ${colors.gray400};
            }
          `,
          }}
        />
        <div className="grid grid-cols-2 gap-8" style={{ paddingRight: "4px" }}>
          {exerciseData.map((exercise) => (
            <div
              key={exercise.id}
              className="flex items-center justify-between border-b"
              style={{ borderColor: colors.gray400 }}
            >
              <div className="flex items-start">
                <div
                  className="w-2 h-2 mr-4 mt-2 rounded-full"
                  style={{ backgroundColor: colors.light }}
                ></div>
                <div className="text-white">
                  <div className="text-[15px] font-light font-inter">
                    {exercise.name}
                  </div>
                  <div
                    className="text-[15px] font-light font-inter"
                    style={{ color: colors.primary300 }}
                  >
                    {exercise.calories}kcal
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div
                  className="text-[18px] font-normal font-inter"
                  style={{ color: colors.primary300 }}
                >
                  {exercise.duration} min
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyExercise;
