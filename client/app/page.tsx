import DiscoverOffers from "@/components/home/DiscoverOffers";
import NewArrivals from "@/components/home/NewArrivals";
import Slider from "@/components/home/Slider";

const Home = () => {
  return (
    <main>
      <Slider />
      <DiscoverOffers />
      <NewArrivals />
    </main>
  );
};

export default Home;
