import { HeroCardsData } from "../libs/mock";

const HeroCards = () => {
  return (
    <>
      <div className="heroCards bg-black py-6">
        <div className="max-w-7xl mx-auto p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {HeroCardsData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center text-white bg-[#303030] p-8 rounded"
                >
                  <div className="p-3">
                    <IconComponent color="#8bc34a" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-2xl">{item?.topic}</h4>
                    <p>{item?.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCards;
