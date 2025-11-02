import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Article {
  id: number;
  image: string;
  date: string;
  time: string;
  title: string;
  tags: string[];
}

interface ColumnPageState {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

export const initialState: ColumnPageState = {
  articles: [
    {
      id: 1,
      image: "/src/modules/base/assets/images/column-1.jpg",
      date: "2021.05.17",
      time: "23:25",
      title:
        "魚を食べて頭も力ラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭も力ラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭も力ラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      id: 2,
      image: "/src/modules/base/assets/images/column-2.jpg",
      date: "2021.05.17",
      time: "23:25",
      title: "野菜不足解消！簡単で美味しいサラダレシピ集",
      tags: ["#野菜", "#サラダ", "#健康"],
    },
    {
      id: 3,
      image: "/src/modules/base/assets/images/column-3.jpg",
      date: "2021.05.17",
      time: "23:25",
      title: "プロテインの効果的な摂取方法とタイミング",
      tags: ["#プロテイン", "#筋トレ", "#栄養"],
    },
    {
      id: 4,
      image: "/src/modules/base/assets/images/column-4.jpg",
      date: "2021.05.17",
      time: "23:25",
      title: "朝食の重要性と理想的な朝食メニューの作り方",
      tags: ["#朝食", "#栄養バランス", "#健康"],
    },
    {
      id: 5,
      image: "/src/modules/base/assets/images/column-5.jpg",
      date: "2021.05.16",
      time: "18:30",
      title: "ダイエット中でも楽しめる低カロリーデザート",
      tags: ["#ダイエット", "#デザート", "#低カロリー"],
    },
    {
      id: 6,
      image: "/src/modules/base/assets/images/column-6.jpg",
      date: "2021.05.16",
      time: "18:30",
      title: "水分補給の大切さと正しい水の飲み方",
      tags: ["#水分補給", "#健康", "#美容"],
    },
    {
      id: 7,
      image: "/src/modules/base/assets/images/column-7.jpg",
      date: "2021.05.16",
      time: "18:30",
      title: "腸内環境を整える発酵食品の効果と取り入れ方",
      tags: ["#発酵食品", "#腸内環境", "#健康"],
    },
    {
      id: 8,
      image: "/src/modules/base/assets/images/column-8.jpg",
      date: "2021.05.16",
      time: "18:30",
      title: "ストレス解消に効果的な食べ物と栄養素",
      tags: ["#ストレス", "#栄養", "#メンタルヘルス"],
    },
    {
      id: 9,
      image: "/src/modules/base/assets/images/column-2.jpg",
      date: "2021.05.16",
      time: "18:30",
      title: "ストレス解消に効果的な食べ物と栄養素",
      tags: ["#ストレス", "#栄養", "#メンタルヘルス"],
    },
    {
      id: 10,
      image: "/src/modules/base/assets/images/column-4.jpg",
      date: "2021.05.16",
      time: "18:30",
      title: "ストレス解消に効果的な食べ物と栄養素",
      tags: ["#ストレス", "#栄養", "#メンタルヘルス"],
    },
    {
      id: 11,
      image: "/src/modules/base/assets/images/column-6.jpg",
      date: "2021.05.16",
      time: "18:30",
      title: "ストレス解消に効果的な食べ物と栄養素",
      tags: ["#ストレス", "#栄養", "#メンタルヘルス"],
    },
    {
      id: 12,
      image: "/src/modules/base/assets/images/column-8.jpg",
      date: "2021.05.16",
      time: "18:30",
      title: "ストレス解消に効果的な食べ物と栄養素",
      tags: ["#ストレス", "#栄養", "#メンタルヘルス"],
    },
  ],
  loading: false,
  error: null,
};

const columnPageSlice = createSlice({
  name: "columnPage",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
    addArticle: (state, action: PayloadAction<Article>) => {
      state.articles.push(action.payload);
    },
  },
});

export const { setLoading, setError, setArticles, addArticle } =
  columnPageSlice.actions;
export default columnPageSlice.reducer;
