import ShopNowBtn from "./ShopNowBtn";

const PriceOffBaner = () => {
  return (
    <>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto py-10 p-3">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-white text-2xl md:text-4xl">
                Get 25% Off On Your First Purchase!
              </h1>
            </div>
            <div>
              <ShopNowBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PriceOffBaner;
