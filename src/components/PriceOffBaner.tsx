import ShopNowBtn from "@/components/ShopNowBtn";

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
      <div className="bg-[#f8f6f3]">
        <div className="text-center p-3">
          <h3 className="text-2xl py-4">
            Try It For Free. No Registration Needed.
          </h3>
        </div>
      </div>
    </>
  );
};
export default PriceOffBaner;
