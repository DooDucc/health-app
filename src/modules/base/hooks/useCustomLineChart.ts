import { useMemo } from "react";

interface DataPoint {
  month: string;
  line1: number;
  line2: number;
}

interface UseCustomLineChartProps {
  data: DataPoint[];
  width: number;
  height: number;
}

interface ChartData {
  pathData: {
    line1: string;
    line2: string;
  };
  points: {
    line1: Array<{ x: number; y: number }>;
    line2: Array<{ x: number; y: number }>;
  };
  xPositions: number[];
  padding: {
    top: number;
    right: number;
    left: number;
    bottom: number;
  };
  chartHeight: number;
}

export const useCustomLineChart = ({
  data,
  width,
  height,
}: UseCustomLineChartProps): ChartData => {
  const chartData = useMemo(() => {
    const padding = { top: 20, right: 30, left: 20, bottom: 40 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    if (!data || data.length === 0) {
      return {
        pathData: { line1: "", line2: "" },
        points: { line1: [], line2: [] },
        xPositions: [],
        padding,
        chartHeight,
      };
    }

    const allValues = data.flatMap((d) => [d.line1, d.line2]);
    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);
    const valueRange = maxValue - minValue;
    const yMin = minValue - valueRange * 0.1;
    const yMax = maxValue + valueRange * 0.1;

    const xStep = chartWidth / (data.length - 1);
    const xPositions = data.map((_, i) => padding.left + i * xStep);

    const yScale = (value: number) => {
      return (
        padding.top +
        chartHeight -
        ((value - yMin) / (yMax - yMin)) * chartHeight
      );
    };

    const createPath = (lineKey: "line1" | "line2") => {
      return data
        .map((d, i) => {
          const x = xPositions[i];
          const y = yScale(d[lineKey]);
          return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
        })
        .join(" ");
    };

    const pathData = {
      line1: createPath("line1"),
      line2: createPath("line2"),
    };

    const points = {
      line1: data.map((d, i) => ({ x: xPositions[i], y: yScale(d.line1) })),
      line2: data.map((d, i) => ({ x: xPositions[i], y: yScale(d.line2) })),
    };

    return {
      pathData,
      points,
      xPositions,
      padding,
      chartHeight,
    };
  }, [data, width, height]);

  return chartData;
};
