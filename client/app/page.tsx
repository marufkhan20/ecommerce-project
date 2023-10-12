import BestSellerProducts from "@/components/home/BestSellerProducts";
import DiscoverOffers from "@/components/home/DiscoverOffers";
import EarnMoneyBanner from "@/components/home/EarnMoneyBanner";
import ExploreCategories from "@/components/home/ExploreCategories";
import NewArrivals from "@/components/home/NewArrivals";
import Slider from "@/components/home/Slider";
import SpecialOffer from "@/components/home/SpecialOffer";
import SpecialProducts from "@/components/home/SpecialProducts";
import Steps from "@/components/home/Steps";

const Home = () => {
  return (
    <main>
      <Slider />
      <DiscoverOffers />
      <NewArrivals />
      <Steps />
      <EarnMoneyBanner />
      <ExploreCategories />
      <BestSellerProducts />
      <SpecialOffer />
      <SpecialProducts />
    </main>
  );
};

export default Home;
