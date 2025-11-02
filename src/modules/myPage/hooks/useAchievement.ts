import { useAppSelector } from "../../base";

export const useAchievement = () => {
  const { percentage, currentDate } = useAppSelector(
    (state) => state.myPage.achievementData
  );

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${
    (percentage / 100) * circumference
  } ${circumference}`;

  return {
    percentage,
    currentDate,
    radius,
    strokeDasharray,
  };
};