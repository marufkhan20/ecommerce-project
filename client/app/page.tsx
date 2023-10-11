import DiscoverOffers from "@/components/home/DiscoverOffers";
import EarnMoneyBanner from "@/components/home/EarnMoneyBanner";
import ExploreCategories from "@/components/home/ExploreCategories";
import NewArrivals from "@/components/home/NewArrivals";
import Slider from "@/components/home/Slider";
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
    </main>
  );
};

export default Home;
