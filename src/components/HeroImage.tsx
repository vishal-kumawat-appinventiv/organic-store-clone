import { ShoppingCart } from "lucide-react";
import { heroBottomLeaf, heroImage, leafImg } from "@/libs/mock";

const HeroImage = () => {
  return (
    <>
      <div className="bg-[#faf9f7] relative">
        <div className="absolute opacity-40 bottom-0 right-0 w-[100px] md:w-[300px] lg:w-[500px]">
          <img src={heroBottomLeaf} alt="bottom" />
        </div>
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 py-32 px-3">
            <div className="order-2 md:order-1">
              <img src={heroImage} alt="heroImage" />
            </div>
            <div className="relative order-1 md:order-2">
              <div className="lg:absolute lg:right-0 lg:top-8 text-center md:text-left max-w-xl flex flex-col w-full gap-5">
                <div className="leafImg relative p-5">
                  <img
                    src={leafImg}
                    alt="leafHero"
                    width={70}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 md:transform-none md:left-0"
                  />
                </div>
                <div>
                  <h4 className="text-black font-bold text-xl">
                    Best Quality Products
                  </h4>
                </div>
                <div>
                  <h1 className="text-3xl lg:text-6xl font-bold  text-black">
                    Join The Organic Movement!
                  </h1>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
                <div className="ShopNowBtn py-8">
                  <button className="bg-[#6a9739] p-3 px-6 text-white rounded">
                    <span className="flex gap-2">
                      <ShoppingCart />
                      SHOP NOW
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
