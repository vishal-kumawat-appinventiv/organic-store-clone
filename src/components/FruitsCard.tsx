import { ArrowRight } from "lucide-react";

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

  return (
    <>
      <div className="bg-[#f8f6f3] py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {FruitsCardProducts.map((f, idx) => {
            return (
              <div key={idx} className="cards rounded-md bg-white p-8">
                <h2 className="text-2xl font-semibold">{f.name}</h2>
                <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
                <button className="bg-[#6a9739] p-3 rounded text-white mt-4">
                  <span className="flex mr-2">
                    <ArrowRight />
                    SHOP NOW
                  </span>
                </button>
                <img src={f.img} alt="img" className="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FruitsCard;
