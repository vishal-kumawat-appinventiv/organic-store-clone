import { icons, NotebookTabs, PiggyBank, Recycle, Truck } from "lucide-react";

const HeroCards = () => {
  const HeroCardsData = [
    {
      topic: "Free Shipping",
      desc: "Above $5 Only",
      icon: <Truck color="#8bc34a" />,
    },
    {
      topic: "Certified Organic",
      desc: "100% Guarantee",
      icon: <NotebookTabs color="#8bc34a" />,
    },
    {
      topic: "Huge Savings",
      desc: "At Lowest Price",
      icon: <PiggyBank color="#8bc34a" />,
    },
    {
      topic: "Easy Returns",
      desc: "No Questions Asked",
      icon: <Recycle color="#8bc34a" />,
    },
  ];

  return (
    <>
      <div className="heroCards bg-black py-6">
        <div className="max-w-7xl mx-auto p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {HeroCardsData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center text-white bg-[#303030] p-8 rounded"
                >
                  <div className="p-3">{item?.icon}</div>
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
