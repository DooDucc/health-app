import { useAppSelector, LoadingSpinner } from "../../base";
import { Suspense, lazy } from "react";

const CustomLineChart = lazy(() => import("../../base/components/CustomLineChart"));

const Graph = () => {
  const data = useAppSelector((state) => state.myPage.graphData);

  return (
    <div className="bg-gray-900 p-4 w-full flex items-center justify-center" style={{ height: "312px" }}>
      <Suspense fallback={<LoadingSpinner size="md" message="Loading chart..." className="text-white" />}>
        <CustomLineChart
          data={data}
          width={800}
          height={250}
          line1Color="#FFCC21"
          line2Color="#8FE9D0"
          gridColor="#666"
          textColor="#fff"
          showGrid={true}
          showDots={true}
          strokeWidth={3}
          dotRadius={4}
        />
      </Suspense>
    </div>
  );
};

export default Graph;
