import BestSelling from "../components/BestSelling";
import FruitsCard from "../components/FruitsCard";
import HeroCards from "../components/HeroCards";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import PriceOffBaner from "../components/PriceOffBaner";
import TrendingProd from "../components/TrendingProd";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroImage />
      <HeroCards />
      <BestSelling />
      <FruitsCard />
      <PriceOffBaner />
      <TrendingProd />
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
