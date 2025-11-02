import { useAppSelector, useAppDispatch } from "../../base";
import { setSelectedPeriod } from "../store";

export const useBodyRecord = () => {
  const dispatch = useAppDispatch();
  const { bodyRecordData, selectedPeriod } = useAppSelector(
    (state) => state.myRecord
  );

  const periods = ["日", "週", "月", "年"];

  const handlePeriodChange = (period: "日" | "週" | "月" | "年") => {
    dispatch(setSelectedPeriod(period));
  };

  return {
    bodyRecordData,
    selectedPeriod,
    periods,
    handlePeriodChange,
  };
};