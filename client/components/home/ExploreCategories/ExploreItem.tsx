import Link from "next/link";
import { FC } from "react";
import { BsArrowRight } from "react-icons/bs";

interface IProps {
  image: string;
  totalProducts: number;
  subCategory: string;
  category: string;
  shadowImage: string;
}

const ExploreItem: FC<IProps> = ({
  image,
  totalProducts,
  subCategory,
  category,
  shadowImage,
}) => {
  return (
    <Link href="#">
      <div className="p-7 rounded-2xl bg-white shadow-xl shadow-black/5 transition-all hover:shadow-black/10 min-h-[350px] flex flex-col justify-between relative">
        <div className="flex items-center justify-between gap-5">
          <div className="w-20 h-20 rounded-full bg-[#EEF2FF] flex items-center justify-center">
            <img
              className="w-[90%]"
              src={`/images/explores/${image}`}
              alt="explore"
            />
          </div>
          <span className="text-sm text-primary">{totalProducts} products</span>
        </div>
        <div>
          <span className="block mb-2 text-sm text-slate-500 dark:text-slate-400">
            {subCategory}
          </span>
          <h2 className="text-2xl font-semibold">{category}</h2>
        </div>
        <Link
          href="#"
          className="flex items-center text-primary text-sm font-medium hover:text-focus transition-colors gap-2"
        >
          <span>See Collection</span>
          <BsArrowRight />
        </Link>

        <img
          className="absolute bottom-2 right-0 w-[60%] opacity-80"
          src={`/images/explores/${shadowImage}`}
          alt="explore shadow"
        />
      </div>
    </Link>
  );
};

export default ExploreItem;
