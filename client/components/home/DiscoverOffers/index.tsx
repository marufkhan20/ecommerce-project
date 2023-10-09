import SlideArrows from "@/components/shared/SlideArrows";
import discoverOffers from "../../../data/discoverOffers";
import Heading from "../../shared/Heading";
import OfferItem from "./OfferItem";

const DiscoverOffers = () => {
  return (
    <section className="py-32">
      <div className="container">
        <Heading
          title="Discover more."
          secondTitle="Good things are waiting for you"
        >
          <SlideArrows />
        </Heading>

        <div className="grid grid-cols-3 gap-7 mt-12">
          {discoverOffers?.map((offer) => (
            <OfferItem key={offer?.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverOffers;
