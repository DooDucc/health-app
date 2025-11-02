import { useSelector } from "react-redux";
import { useState } from "react";
import type { RootState } from "../../base";

export const useMyDiary = () => {
  const allDiaryEntries = useSelector(
    (state: RootState) => state.myRecord.diaryEntries
  );

  const [visibleCount, setVisibleCount] = useState(8);
  const diaryEntries = allDiaryEntries.slice(0, visibleCount);
  const hasMoreEntries = visibleCount < allDiaryEntries.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return {
    diaryEntries,
    hasMoreEntries,
    handleLoadMore,
  };
};
