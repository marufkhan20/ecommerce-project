"use client";
import products, { Product } from "@/data/products";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";

interface IProps {
  id: number;
  openQuickView: boolean;
  setOpenQuickView: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductQuickView: FC<IProps> = ({
  id,
  openQuickView,
  setOpenQuickView,
}) => {
  const [product, setProduct] = useState<Product>();
  const [openSection, setOpenSection] = useState(0);

  // get single product from products list
  useEffect(() => {
    if (id) {
      products?.forEach((item) => {
        if (item?.id === id) {
          setProduct(item);
        }
      });
    }
  }, [id]);
  return (
    <div
      className={`transition-all duration-500 ${
        openQuickView ? "opacity-100 visible" : "opacity-0 invisible"
      } w-full h-screen bg-black/40 fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center`}
    >
      <div className="w-[50%] h-[93vh] bg-white rounded-xl flex justify-between gap-8 p-7 overflow-y-auto relative">
        <AiOutlineClose
          onClick={() => setOpenQuickView(false)}
          className="absolute top-5 right-4 cursor-pointer text-lg"
        />
        <div className="w-[50%]">
          <div className="bg-[#F2F4F5] w-full rounded-xl">
            <img
              src={`/images/products/${product?.thumbnail}`}
              alt="thumbnail"
            />
          </div>
          <div className="grid grid-cols-2 justify-between mt-5 gap-4">
            <img
              src={`/images/products/${product?.detailsImages[0]}`}
              className="rounded-lg"
              alt="details picture"
            />
            <img
              src={`/images/products/${product?.detailsImages[1]}`}
              className="rounded-lg"
              alt="details picture"
            />
          </div>
        </div>
        <div className="w-[50%]">
          <h2 className="transition-all hover:text-focus text-2xl mb-4">
            <Link href="#">{product?.title}</Link>
          </h2>

          <div className="flex items-center">
            <div className="pr-4 border-r border-light mr-4">
              <p className="text-success border-2 border-success px-3 rounded-lg font-semibold inline-block">
                ${product?.price}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <AiFillStar className="text-[#FBBF24]" />
              <span>{product?.rating}</span>
              <span>-</span>
              <span className="underline">
                {product?.reviews?.length} reviews
              </span>
              <span>-</span>
              <span className="text-sm">{product?.category}</span>
            </div>
          </div>

          <div className="mt-9">
            <div className="flex items-center gap-1">
              <span className="font-medium text-sm">Color:</span>
              <span className="font-semibold text-sm text-primary">Black</span>
            </div>

            <div className="flex items-center gap-1 mt-4">
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
          </div>

          {product?.sizes && (
            <div className="mt-9">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="font-medium text-sm">Size:</span>
                  <span className="font-semibold text-sm text-primary">XS</span>
                </div>
                <Link href="#" className="text-sm text-focus font-medium">
                  See sizing chart
                </Link>
              </div>

              <div className="flex items-center gap-2 mt-4">
                {product?.sizes?.map((size) => (
                  <button
                    className="w-[54px] h-11 rounded-xl border border-light uppercase font-semibold text-primary text-base transition-all hover:bg-gray-100 cursor-pointer"
                    key={size}
                  >
                    {size}
                  </button>
                ))}
                L
              </div>
            </div>
          )}

          <div className="mt-7 flex items-center justify-between gap-3 pb-7 border-b border-light mb-7">
            <div className="flex items-center gap-3 bg-[#F5F8FB] py-3 px-4 rounded-full">
              <span className="h-9 bg-white cursor-pointer w-9 rounded-full border flex items-center justify-center text-xl">
                -
              </span>
              <span>1</span>
              <span className="h-9 bg-white cursor-pointer w-9 rounded-full border flex items-center justify-center text-xl">
                +
              </span>
            </div>
            <button className="font-medium text-[#f8fafc] bg-primary px-4 py-4 focus:ring-1 rounded-full flex items-center gap-3 cursor-pointer shadow-sm w-full justify-center">
              <HiOutlineShoppingBag className="text-white" />
              <span>Add to bag</span>
            </button>
          </div>

          {product?.productSections && (
            <div className="flex flex-col gap-2">
              {product?.productSections?.map((section, index) => (
                <div
                  key={section?.title}
                  className={`transition-all duration-500 ${
                    openSection === index ? "h-full" : "h-9"
                  } overflow-hidden`}
                >
                  <div
                    className="flex items-center justify-between gap-3 bg-[#f3f6f9] transition-all hover:bg-[#EEF1F6] py-2 px-3 rounded-lg cursor-pointer"
                    onClick={() => setOpenSection(index)}
                  >
                    <h4 className="font-medium">{section?.title}</h4>
                    <span className="text-base font-medium">+</span>
                  </div>
                  <p className={`mx-4 pt-[22px] pb-4 text-sm`}>
                    {section?.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
