import BestSelling from "../components/BestSelling";
import FruitsCard from "../components/FruitsCard";
import HeroCards from "../components/HeroCards";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import PriceOffBaner from "../components/PriceOffBaner";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#faf9f7]">
        <HeroImage />
      </div>
      <HeroCards />
      <BestSelling />
      <FruitsCard />
      <PriceOffBaner />
      <h1 className="text-3xl">Bottom Text</h1>
      <h1 className="text-3xl">Bottom Text</h1>
      <h1 className="text-3xl">Bottom Text</h1>
      <h1 className="text-3xl">Bottom Text</h1>
      <h1 className="text-3xl">Bottom Text</h1>
      <h1 className="text-3xl">Bottom Text</h1>
      <h1 className="text-3xl">Bottom Text</h1>
    </>
  );
};

export default HomePage;
