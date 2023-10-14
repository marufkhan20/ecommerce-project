import SlideArrows from "@/components/shared/SlideArrows";
import discoverOffers from "../../../data/discoverOffers";
import Heading from "../../shared/Heading";
import OfferItem from "./OfferItem";

const DiscoverOffers = () => {
  return (
    <section className="py-32 px-8 sm:px-0">
      <div className="container">
        <Heading
          title="Discover more."
          secondTitle="Good things are waiting for you"
        >
          <SlideArrows />
        </Heading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
          {discoverOffers?.map((offer) => (
            <OfferItem key={offer?.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverOffers;
