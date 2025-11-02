import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GraphDataPoint {
  month: string;
  line1: number;
  line2: number;
}

export interface AchievementData {
  percentage: number;
  currentDate: string;
}

export interface MealItem {
  id: string;
  type: "morning" | "lunch" | "dinner" | "snack";
  image: string;
  date: string;
}

export interface MyPageState {
  graphData: GraphDataPoint[];
  achievementData: AchievementData;
  meals: MealItem[];
  selectedMealType: "morning" | "lunch" | "dinner" | "snack" | "all";
  mealsDisplayCount: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: MyPageState = {
  graphData: [
    { month: "6月", line1: 50, line2: 50 },
    { month: "7月", line1: 45, line2: 48 },
    { month: "8月", line1: 42, line2: 46 },
    { month: "9月", line1: 48, line2: 44 },
    { month: "10月", line1: 45, line2: 42 },
    { month: "11月", line1: 52, line2: 40 },
    { month: "12月", line1: 49, line2: 38 },
    { month: "1月", line1: 46, line2: 36 },
    { month: "2月", line1: 44, line2: 34 },
    { month: "3月", line1: 42, line2: 32 },
    { month: "4月", line1: 40, line2: 30 },
    { month: "5月", line1: 45, line2: 28 },
  ],
  achievementData: {
    percentage: 75,
    currentDate: "05/21",
  },
  meals: [
    {
      id: "1",
      type: "morning",
      image: "/src/modules/base/assets/images/m01.jpg",
      date: "2024-05-21",
    },
    {
      id: "2",
      type: "morning",
      image: "/src/modules/base/assets/images/m02.jpg",
      date: "2024-05-21",
    },
    {
      id: "3",
      type: "dinner",
      image: "/src/modules/base/assets/images/d01.jpg",
      date: "2024-05-20",
    },
    {
      id: "4",
      type: "lunch",
      image: "/src/modules/base/assets/images/l01.jpg",
      date: "2024-05-21",
    },
    {
      id: "5",
      type: "lunch",
      image: "/src/modules/base/assets/images/l02.jpg",
      date: "2024-05-20",
    },
    {
      id: "6",
      type: "snack",
      image: "/src/modules/base/assets/images/s01.jpg",
      date: "2024-05-21",
    },
    {
      id: "7",
      type: "lunch",
      image: "/src/modules/base/assets/images/l03.jpg",
      date: "2024-05-20",
    },
    {
      id: "8",
      type: "morning",
      image: "/src/modules/base/assets/images/m03.jpg",
      date: "2024-05-20",
    },
    {
      id: "9",
      type: "dinner",
      image: "/src/modules/base/assets/images/d02.jpg",
      date: "2024-05-20",
    },
  ],
  selectedMealType: "all",
  mealsDisplayCount: 8,
  isLoading: false,
  error: null,
};

const myPageSlice = createSlice({
  name: "myPage",
  initialState,
  reducers: {
    setGraphData: (state, action: PayloadAction<GraphDataPoint[]>) => {
      state.graphData = action.payload;
    },
    setAchievementData: (state, action: PayloadAction<AchievementData>) => {
      state.achievementData = action.payload;
    },
    setSelectedMealType: (
      state,
      action: PayloadAction<"morning" | "lunch" | "dinner" | "snack" | "all">
    ) => {
      state.selectedMealType = action.payload;
      state.mealsDisplayCount = 4;
    },
    loadMoreMeals: (state) => {
      state.mealsDisplayCount += 4;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    updateDataPoint: (
      state,
      action: PayloadAction<{ index: number; data: Partial<GraphDataPoint> }>
    ) => {
      const { index, data } = action.payload;
      if (state.graphData[index]) {
        state.graphData[index] = { ...state.graphData[index], ...data };
      }
    },
  },
});

export const {
  setGraphData,
  setAchievementData,
  setSelectedMealType,
  loadMoreMeals,
  setLoading,
  setError,
  updateDataPoint,
} = myPageSlice.actions;
export default myPageSlice.reducer;
