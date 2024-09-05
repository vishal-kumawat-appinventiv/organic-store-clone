import { ArrowRight } from "lucide-react";
import ShopNowBtn from "./ShopNowBtn";

const FruitsCard = () => {
  const FruitsCardProducts = [
    {
      name: "Farm Fresh Fruits",
      desc: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg",
    },
    {
      name: "Fresh Vegetables",
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product13-free-img.jpg",
      desc: "Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.",
    },
    {
      name: "Organic Legume",
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product17-free-img.jpg",
      desc: "Phasellus sed urna mattis, viverra libero sed, aliquam est.",
    },
  ];

  const leafImage =
    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png";

  return (
    <>
      <div className="relative bg-[#f8f6f3] py-28">
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
          <img width="150" height="90" src={leafImage} alt="leaf" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FruitsCardProducts.map((f, idx) => {
            return (
              <div
                key={idx}
                className="cards lg:min-h-[350px] rounded-md bg-white p-8 relative overflow-hidden"
              >
                <img
                  src={f.img}
                  alt="img"
                  className="absolute lg:inset-0 right-0 w-32 lg:w-full lg:h-full object-cover opacity-90"
                />

                <div className="relative z-10">
                  <h2 className="text-2xl font-semibold">{f.name}</h2>
                  <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
                  <ShopNowBtn />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FruitsCard;
