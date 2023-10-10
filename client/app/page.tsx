import DiscoverOffers from "@/components/home/DiscoverOffers";
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
    </main>
  );
};

export default Home;
