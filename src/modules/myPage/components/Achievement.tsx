import { mainPhoto } from "../../base";
import { useAchievement } from "../hooks";

const Achievement = () => {
  const { percentage, currentDate, radius, strokeDasharray } = useAchievement();

  return (
    <div
      className="relative bg-cover bg-center shrink-0"
      style={{
        backgroundImage: `url(${mainPhoto})`,
        width: "510px",
        height: "312px",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="rgba(255, 204, 33, 0.2)"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#FFCC21"
              strokeWidth="8"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center text-white">
            <span className="text-[18px] font-normal mr-2 font-inter">
              {currentDate}
            </span>
            <span className="text-[25px] font-normal font-inter">
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
