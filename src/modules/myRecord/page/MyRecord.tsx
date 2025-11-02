import { Navigation, BodyRecord, MyExercise, MyDiary } from "../components";

const MyRecord = () => {
  return (
    <div className="mb-12">
      <Navigation />
      <BodyRecord />
      <MyExercise />
      <MyDiary />
    </div>
  );
};

export default MyRecord;
