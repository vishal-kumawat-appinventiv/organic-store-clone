import BestSelling from "../components/BestSelling";
import BrandsDisplay from "../components/BrandsDisplay";
import Footer from "../components/Footer";
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
      <BrandsDisplay />
      <Footer />
    </>
  );
};

export default HomePage;
