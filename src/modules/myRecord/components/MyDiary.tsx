import { colors } from "../../base";
import { useMyDiary } from "../hooks";

const MyDiary = () => {
  const { diaryEntries, hasMoreEntries, handleLoadMore } = useMyDiary();

  return (
    <div className="w-full mt-12 mx-auto" style={{ width: "960px" }}>
      <h2
        className="text-[22px] font-normal font-inter"
        style={{ color: colors.dark500Text }}
      >
        MY DIARY
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {diaryEntries.map((entry) => (
          <div
            key={entry.id}
            className="border-[2px] border-[#707070] bg-white p-4 h-[240px] flex flex-col"
          >
            <div
              className="text-[18px] font-normal font-inter"
              style={{ color: colors.dark500Text }}
            >
              {entry.date}
            </div>
            <div
              className="text-[18px] font-normal font-inter mb-4"
              style={{ color: colors.dark500Text }}
            >
              {entry.time}
            </div>
            <div
              className="text-[12px] font-light leading-relaxed flex-1 overflow-hidden"
              style={{ color: colors.dark500Text }}
            >
              {entry.content}
            </div>
          </div>
        ))}
      </div>

      {hasMoreEntries && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="text-white font-light text-[18px] px-16 py-4 rounded-md transition-colors duration-200 hover:opacity-90"
            style={{
              background: colors.primary300400,
            }}
          >
            自分の日記をもっと見る
          </button>
        </div>
      )}
    </div>
  );
};

export default MyDiary;
