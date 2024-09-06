import BestSelling from "../components/BestSelling";
import BrandsDisplay from "../components/BrandsDisplay";
import FruitsCard from "../components/FruitsCard";
import HeroCards from "../components/HeroCards";
import HeroImage from "../components/HeroImage";
import PriceOffBaner from "../components/PriceOffBaner";
import TrendingProd from "../components/TrendingProd";

const HomePage = () => {
  return (
    <>
      <HeroImage />
      <HeroCards />
      <BestSelling />
      <FruitsCard />
      <PriceOffBaner />
      <TrendingProd />
      <BrandsDisplay />
    </>
  );
};

export default HomePage;
