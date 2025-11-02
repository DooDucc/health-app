import { Articles, FilterArticles } from "../components";

const ColumnPage = () => {
  return (
    <div className="my-12">
      <FilterArticles />
      <Articles />
    </div>
  );
};

export default ColumnPage;
