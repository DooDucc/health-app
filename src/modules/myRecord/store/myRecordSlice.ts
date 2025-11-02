import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BodyRecordDataPoint {
  month: string;
  line1: number;
  line2: number;
}

export interface ExerciseItem {
  id: string;
  name: string;
  calories: number;
  duration: number;
}

export interface DiaryEntry {
  id: string;
  date: string;
  time: string;
  content: string;
}

export interface MyRecordState {
  bodyRecordData: BodyRecordDataPoint[];
  exerciseData: ExerciseItem[];
  diaryEntries: DiaryEntry[];
  selectedPeriod: "日" | "週" | "月" | "年";
  isLoading: boolean;
  error: string | null;
}

const initialState: MyRecordState = {
  bodyRecordData: [
    { month: "6月", line1: 85, line2: 88 },
    { month: "7月", line1: 82, line2: 85 },
    { month: "8月", line1: 75, line2: 78 },
    { month: "9月", line1: 80, line2: 75 },
    { month: "10月", line1: 78, line2: 72 },
    { month: "11月", line1: 76, line2: 70 },
    { month: "12月", line1: 82, line2: 68 },
    { month: "1月", line1: 78, line2: 65 },
    { month: "2月", line1: 75, line2: 62 },
    { month: "3月", line1: 72, line2: 58 },
    { month: "4月", line1: 70, line2: 55 },
    { month: "5月", line1: 68, line2: 52 },
  ],
  exerciseData: [
    { id: "1", name: "家事全般（立位・軽い）", calories: 26, duration: 10 },
    { id: "2", name: "家事全般（立位・軽い）", calories: 26, duration: 10 },
    { id: "3", name: "家事全般（立位・軽い）", calories: 26, duration: 10 },
    { id: "4", name: "家事全般（立位・軽い）", calories: 26, duration: 10 },
    { id: "5", name: "家事全般（立位・軽い）", calories: 26, duration: 10 },
    { id: "6", name: "家事全般（立位・軽い）", calories: 26, duration: 10 },
    { id: "7", name: "家事全般（立位・軽い）", calories: 26, duration: 10 },
    { id: "8", name: "家事全般（立位・軽い）", calories: 26, duration: 10 },
    { id: "9", name: "家事全般（立位・軽い）", calories: 26, duration: 10 },
    { id: "10", name: "家事全般（立位・軽い）", calories: 26, duration: 10 },
    { id: "11", name: "家事全般（立位・軽い）", calories: 26, duration: 10 },
  ],
  diaryEntries: [
    {
      id: "1",
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
    },
    {
      id: "2",
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
    },
    {
      id: "3",
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
    },
    {
      id: "4",
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
    },
    {
      id: "5",
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
    },
    {
      id: "6",
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
    },
    {
      id: "7",
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
    },
    {
      id: "8",
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
    },
    {
      id: "9",
      date: "2021.05.20",
      time: "22:15",
      content:
        "今日は良い一日でした。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
    },
    {
      id: "10",
      date: "2021.05.19",
      time: "21:30",
      content:
        "運動を頑張りました。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
    },
    {
      id: "11",
      date: "2021.05.18",
      time: "20:45",
      content:
        "健康的な食事を心がけています。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
    },
    {
      id: "12",
      date: "2021.05.17",
      time: "19:20",
      content:
        "新しい習慣を始めました。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
    },
  ],
  selectedPeriod: "年",
  isLoading: false,
  error: null,
};

const myRecordSlice = createSlice({
  name: "myRecord",
  initialState,
  reducers: {
    setBodyRecordData: (
      state,
      action: PayloadAction<BodyRecordDataPoint[]>
    ) => {
      state.bodyRecordData = action.payload;
    },
    setExerciseData: (state, action: PayloadAction<ExerciseItem[]>) => {
      state.exerciseData = action.payload;
    },
    setDiaryEntries: (state, action: PayloadAction<DiaryEntry[]>) => {
      state.diaryEntries = action.payload;
    },
    setSelectedPeriod: (
      state,
      action: PayloadAction<"日" | "週" | "月" | "年">
    ) => {
      state.selectedPeriod = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    updateBodyRecordDataPoint: (
      state,
      action: PayloadAction<{
        index: number;
        data: Partial<BodyRecordDataPoint>;
      }>
    ) => {
      const { index, data } = action.payload;
      if (state.bodyRecordData[index]) {
        state.bodyRecordData[index] = {
          ...state.bodyRecordData[index],
          ...data,
        };
      }
    },
  },
});

export const {
  setBodyRecordData,
  setExerciseData,
  setDiaryEntries,
  setSelectedPeriod,
  setLoading,
  setError,
  updateBodyRecordDataPoint,
} = myRecordSlice.actions;

export default myRecordSlice.reducer;
