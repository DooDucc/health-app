import { colors } from "../../base";

const FilterArticles = () => {
  const categories = [
    {
      title: "RECOMMENDED COLUMN",
      subtitle: "オススメ",
    },
    {
      title: "RECOMMENDED DIET",
      subtitle: "ダイエット",
    },
    {
      title: "RECOMMENDED BEAUTY",
      subtitle: "美容",
    },
    {
      title: "RECOMMENDED HEALTH",
      subtitle: "健康",
    },
  ];

  return (
    <div className="w-[960px] mx-auto">
      <div className="grid grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`w-[216px] h-[144px] flex flex-col items-center justify-center text-white cursor-pointer hover:opacity-90 transition-opacity`}
            style={{ backgroundColor: colors.dark600 }}
          >
            <div className="text-center">
              <h3
                className="text-[22px] font-normal font-inter tracking-wider mb-2 leading-tight"
                style={{ color: colors.primary300 }}
              >
                {category.title}
              </h3>
              <div className="w-12 h-[1px] bg-white mx-auto mb-3"></div>
              <p className="text-[18px] font-light">{category.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterArticles;
