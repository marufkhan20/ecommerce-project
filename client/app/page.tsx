import BestSellerProducts from "@/components/home/BestSellerProducts";
import Departments from "@/components/home/Departments";
import DiscoverOffers from "@/components/home/DiscoverOffers";
import EarnMoneyBanner from "@/components/home/EarnMoneyBanner";
import ExploreCategories from "@/components/home/ExploreCategories";
import Footer from "@/components/home/Footer";
import NewArrivals from "@/components/home/NewArrivals";
import News from "@/components/home/News";
import Slider from "@/components/home/Slider";
import SpecialOffer from "@/components/home/SpecialOffer";
import SpecialProducts from "@/components/home/SpecialProducts";
import Steps from "@/components/home/Steps";
import Subscribe from "@/components/home/Subscribe";
import Testimonials from "@/components/home/Testimonials";
import TrandingProducts from "@/components/home/TrandingProducts";

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
      <Departments />
      <Subscribe />
      <TrandingProducts />
      <News />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Home;
