import { Graph, Achievement, MealHistory } from "../components";

const MyPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <Achievement />
        <Graph />
      </div>
      <MealHistory />
    </div>
  );
};

export default MyPage;
