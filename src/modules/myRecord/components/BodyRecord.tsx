import { colors, LoadingSpinner } from "../../base";
import { useBodyRecord } from "../hooks";
import { Suspense, lazy } from "react";

const CustomLineChart = lazy(() => import("../../base/components/CustomLineChart"));

const BodyRecord = () => {
  const { bodyRecordData, selectedPeriod, periods, handlePeriodChange } = useBodyRecord();

  return (
    <div
      className="p-6 mx-auto mt-12"
      style={{ width: "960px", backgroundColor: colors.dark500Text }}
    >
      <div className="flex items-center">
        <div className="text-white mr-8">
          <div className="text-[15px] font-normal font-inter">BODY</div>
          <div className="text-[15px] font-normal font-inter">RECORD</div>
        </div>
        <div className="text-white text-[22px] font-normal font-inter">
          2021.05.21
        </div>
      </div>

      <div className="flex items-center justify-center" style={{ height: "250px" }}>
        <Suspense fallback={<LoadingSpinner size="md" message="Loading chart..." className="text-white" />}>
          <CustomLineChart
            data={bodyRecordData}
            width={900}
            height={200}
            line1Color={colors.primary300}
            line2Color={colors.secondary500}
            gridColor="#555"
            textColor="#fff"
            showGrid={true}
            showDots={true}
            strokeWidth={3}
            dotRadius={4}
          />
        </Suspense>
      </div>

      <div className="flex gap-4">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() =>
              handlePeriodChange(period as "日" | "週" | "月" | "年")
            }
            className={`px-4 p-2 rounded-full text-[15px] font-light transition-colors`}
            style={{
              backgroundColor:
                selectedPeriod === period ? colors.primary300 : colors.light,
              color:
                selectedPeriod === period ? colors.light : colors.primary300,
            }}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BodyRecord;
