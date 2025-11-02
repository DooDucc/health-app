import { colors, LazyImage } from "../../base";
import { useArticles } from "../hooks";

const Articles = () => {
  const { articles, hasMoreArticles, handleLoadMore } = useArticles();

  return (
    <div className="w-[960px] mx-auto mt-14">
      <div className="grid grid-cols-4 gap-2">
        {articles.map((article) => (
          <div
            key={article.id}
            className="w-[234px] max-h-[222px] cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="relative w-full h-[144px] overflow-hidden">
              <LazyImage
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 px-2 py-1 text-white text-[15px] font-normal font-inter"
                style={{ backgroundColor: colors.primary300 }}
              >
                {article.date} {article.time}
              </div>
            </div>

            <div className="pt-2">
              <p
                className="text-[15px] font-light leading-[22px] mb-2 line-clamp-2"
                style={{ color: colors.dark600 }}
              >
                {article.title}
              </p>
              <div className="flex flex-wrap gap-1">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[12px] font-light"
                    style={{ color: colors.primary400 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMoreArticles && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="text-white font-light text-[18px] px-16 py-4 rounded-md transition-colors duration-200 hover:opacity-90"
            style={{
              background: colors.primary300400,
            }}
          >
            コラムをもっと見る
          </button>
        </div>
      )}
    </div>
  );
};

export default Articles;
