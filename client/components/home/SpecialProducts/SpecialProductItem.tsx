import { Product } from "@/data/products";
import { FC } from "react";
import { AiFillStar } from "react-icons/ai";

interface IProps {
  product: Product;
}

const SpecialProductItem: FC<IProps> = ({ product }) => {
  const { thumbnail, detailsImages, title, category, rating, reviews, price } =
    product;

  return (
    <div>
      <div className="bg-[#F3F4F6] rounded-3xl h-[300px] flex items-center justify-center">
        <img
          className="h-[100%]"
          src={`/images/products/${thumbnail}`}
          alt="product"
        />
      </div>
      <div className="flex items-center justify-between gap-2 mt-3">
        {detailsImages?.map((image) => (
          <div className="w-full" key={image}>
            <img
              src={`/images/products/${image}`}
              className="rounded-2xl"
              alt="details"
            />
          </div>
        ))}
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl">{title}</h3>
          <p className="text-success border-2 border-success px-3 rounded-lg font-semibold">
            ${price}
          </p>
        </div>
        <div className="flex items-center gap-1 mt-3">
          <span className="pr-2 border-r border-light">{category}</span>
          <AiFillStar className="text-[#FBBF24]" />
          <span>{rating}</span>
          <span>({reviews?.length} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default SpecialProductItem;
