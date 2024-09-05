import { ArrowRight } from "lucide-react";

const ShopNowBtn = () => {
  return (
    <button className="bg-[#6a9739] p-3 rounded text-white mt-4">
      <span className="flex items-center">
        <ArrowRight className="mr-2"/>
        SHOP NOW
      </span>
    </button>
  );
};

export default ShopNowBtn;
