"use client";
import { Product } from "@/data/products";
import { FC, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuExpand } from "react-icons/lu";
import ProductQuickView from "./ProductQuickView";

interface IProps {
  product: Product;
}

const ProductItem: FC<IProps> = ({ product }) => {
  const [openQuickView, setOpenQuickView] = useState(false);

  const { id, thumbnail, sizes, title, category, price, rating, reviews } =
    product;
  return (
    <>
      <div>
        <div className="bg-[#F8FAFC] rounded-3xl flex items-center justify-center  relative overflow-hidden product-image h-[400px]">
          <img
            className="rounded-3xl"
            src={`/images/products/${thumbnail}`}
            alt="product"
          />

          {sizes ? (
            <div className="absolute transition-all -bottom-[200%] product-option left-0 right-0 w-full flex items-center justify-center gap-2">
              {sizes?.map((size) => (
                <button
                  className="w-9 h-9 rounded-xl bg-white uppercase font-semibold text-primary text-sm transition-all hover:bg-primary hover:text-white"
                  key={size}
                >
                  {size}
                </button>
              ))}
            </div>
          ) : (
            <div className="absolute transition-all -bottom-[200%] product-option left-0 right-0 w-full flex items-center justify-center gap-2">
              <button className="text-xs text-[#f8fafc] bg-primary px-4 py-2 rounded-full flex items-center gap-1 cursor-pointer shadow-sm">
                <HiOutlineShoppingBag className="text-white" />
                <span>Add to bag</span>
              </button>
              <button
                className="text-xs text-primary bg-white px-4 py-2 rounded-full flex items-center gap-1 cursor-pointer shadow-sm"
                onClick={() => setOpenQuickView(true)}
              >
                <LuExpand />
                <span>Quick view</span>
              </button>
            </div>
          )}
        </div>
        <div className="mt-5 mx-4">
          <div className="flex items-center gap-1">
            <div className="h-6 w-6 flex items-center justify-center rounded-full border border-[#A78BFA] p-[2px]">
              <div className="bg-[#A78BFA] rounded-full h-full w-full"></div>
            </div>
            <div className="h-6 w-6 flex items-center justify-center rounded-full border border-transparent p-[2px]">
              <div className="bg-[#FACC15] rounded-full h-full w-full"></div>
            </div>
            <div className="h-6 w-6 flex items-center justify-center rounded-full border border-transparent p-[2px]">
              <div className="bg-[#FB923C] rounded-full h-full w-full"></div>
            </div>
            <div className="h-6 w-6 flex items-center justify-center rounded-full border border-transparent p-[2px]">
              <div className="bg-[#38BDF8] rounded-full h-full w-full"></div>
            </div>
            <div className="h-6 w-6 flex items-center justify-center rounded-full border border-transparent p-[2px]">
              <div className="bg-[#4ADE80] rounded-full h-full w-full"></div>
            </div>
          </div>
          <h3 className="mt-4 text-base">{title}</h3>
          <p className="text-secondary text-sm font-medium">{category}</p>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-success border-2 border-success px-3 rounded-lg font-semibold">
              ${price}
            </p>
            <div className="flex items-center gap-1">
              <AiFillStar className="text-[#FBBF24]" />
              <span>{rating}</span>
              <span>({reviews?.length} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* product quick view */}
      <ProductQuickView
        id={id}
        openQuickView={openQuickView}
        setOpenQuickView={setOpenQuickView}
      />
    </>
  );
};

export default ProductItem;
