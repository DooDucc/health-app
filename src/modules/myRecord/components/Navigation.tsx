import { record1, record2, record3, colors } from "../../base";

const Navigation = () => {
  const navigationItems = [
    {
      id: 1,
      title: "BODY RECORD",
      subtitle: "自分のカラダの記録",
      image: record1,
    },
    {
      id: 2,
      title: "MY EXERCISE",
      subtitle: "自分の運動の記録",
      image: record2,
    },
    {
      id: 3,
      title: "MY DIARY",
      subtitle: "自分の日記",
      image: record3,
    },
  ];

  return (
    <div className="flex gap-12 justify-center items-center mt-12">
      {navigationItems.map((item) => (
        <div
          key={item.id}
          className="relative w-72 h-72 cursor-pointer group overflow-hidden"
          style={{
            width: "288px",
            height: "288px",
            border: `24px solid ${colors.primary300}`,
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-75"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h3
              className="text-[25px] font-normal mb-2 tracking-wider font-inter"
              style={{ color: colors.primary300 }}
            >
              {item.title}
            </h3>
            <div
              className="px-4"
              style={{ backgroundColor: colors.primary400 }}
            >
              <span className="text-white text-[14px] font-light">
                {item.subtitle}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
