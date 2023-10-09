import { FC } from "react";
import { DiscoverOffer } from "../../../data/discoverOffers";

interface IProps {
  offer: DiscoverOffer;
}

const OfferItem: FC<IProps> = ({ offer }) => {
  const { color, category, title, img } = offer;

  return (
    <div
      className={`p-8 rounded-lg flex items-center justify-between gap-5`}
      style={{ backgroundColor: color }}
    >
      <div>
        <span className="text-[#334155] text-sm">{category}</span>
        <h3 className="text-2xl">{title}</h3>
        <button className="mt-[100px] text-[#334155] font-medium text-sm px-6 py-3 bg-white rounded-full transition-all hover:bg-white/60 shadow-sm">
          Show me all
        </button>
      </div>
      <img className="w-[40%]" src={`/images/offers/${img}`} alt="offer" />
    </div>
  );
};

export default OfferItem;
