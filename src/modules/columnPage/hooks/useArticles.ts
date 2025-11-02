import { useSelector } from "react-redux";
import { useState } from "react";
import { type RootState } from "../../base";

export const useArticles = () => {
  const allArticles = useSelector(
    (state: RootState) => state.columnPage.articles
  );
  const [displayCount, setDisplayCount] = useState(8);

  const articles = allArticles.slice(0, displayCount);
  const hasMoreArticles = displayCount < allArticles.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 4);
  };

  return {
    articles,
    hasMoreArticles,
    handleLoadMore,
  };
};
