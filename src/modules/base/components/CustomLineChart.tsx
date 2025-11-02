import React from "react";
import { useCustomLineChart } from "../hooks";

interface DataPoint {
  month: string;
  line1: number;
  line2: number;
}

interface CustomLineChartProps {
  data: DataPoint[];
  width?: number;
  height?: number;
  line1Color?: string;
  line2Color?: string;
  gridColor?: string;
  textColor?: string;
  showGrid?: boolean;
  showDots?: boolean;
  strokeWidth?: number;
  dotRadius?: number;
}

const CustomLineChart: React.FC<CustomLineChartProps> = ({
  data,
  width = 800,
  height = 250,
  line1Color = "#FFCC21",
  line2Color = "#8FE9D0",
  gridColor = "#666",
  textColor = "#fff",
  showGrid = true,
  showDots = true,
  strokeWidth = 3,
  dotRadius = 4,
}) => {
  const { pathData, points, xPositions, padding, chartHeight } =
    useCustomLineChart({
      data,
      width,
      height,
    });

  return (
    <svg width={width} height={height} className="overflow-visible">
      {showGrid && (
        <g>
          {data.map((_, i) => (
            <line
              key={i}
              x1={xPositions[i]}
              y1={padding.top}
              x2={xPositions[i]}
              y2={padding.top + chartHeight}
              stroke={gridColor}
              strokeWidth={1}
            />
          ))}
        </g>
      )}

      <g>
        {data.map((d, i) => (
          <text
            key={i}
            x={xPositions[i]}
            y={height - 10}
            textAnchor="middle"
            fill={textColor}
            fontSize="12"
            fontFamily="Inter, sans-serif"
          >
            {d.month}
          </text>
        ))}
      </g>

      <path
        d={pathData.line1}
        fill="none"
        stroke={line1Color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d={pathData.line2}
        fill="none"
        stroke={line2Color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {showDots &&
        points.line1.map((point, i) => (
          <circle
            key={`line1-dot-${i}`}
            cx={point.x}
            cy={point.y}
            r={dotRadius}
            fill={line1Color}
          />
        ))}

      {showDots &&
        points.line2.map((point, i) => (
          <circle
            key={`line2-dot-${i}`}
            cx={point.x}
            cy={point.y}
            r={dotRadius}
            fill={line2Color}
          />
        ))}
    </svg>
  );
};

export default CustomLineChart;
