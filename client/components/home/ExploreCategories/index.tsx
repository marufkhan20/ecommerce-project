import { AiOutlineMan } from "react-icons/ai";
import { RiWomenLine } from "react-icons/ri";
import ExploreItem from "./ExploreItem";

const ExploreCategories = () => {
  return (
    <section>
      <div className="container">
        <div className="py-[132px] px-[120px] rounded-[30px] bg-[#F7F7F9]">
          <div className="flex flex-col items-center">
            <h2 className="text-[48px] mb-12">Start exploring.</h2>
            <nav className="flex w-auto p-1 rounded-full bg-white shadow-xl shadow-black/5">
              <li className="px-6 py-3 cursor-pointer rounded-full text-white  flex items-center gap-2 text-sm font-medium bg-primary">
                <RiWomenLine className="text-lg" />
                <span>Women</span>
              </li>
              <li className="px-6 py-3 cursor-pointer rounded-full text-primary flex items-center gap-2 text-sm font-medium">
                <AiOutlineMan className="text-lg" />
                <span>Man</span>
              </li>
              <li className="px-6 py-3 cursor-pointer rounded-full text-primary flex items-center gap-2 text-sm font-medium">
                <AiOutlineMan className="text-lg" />
                <span>Kids</span>
              </li>
              <li className="px-6 py-3 cursor-pointer rounded-full text-primary flex items-center gap-2 text-sm font-medium">
                <AiOutlineMan className="text-lg" />
                <span>Sports</span>
              </li>
              <li className="px-6 py-3 cursor-pointer rounded-full text-primary flex items-center gap-2 text-sm font-medium">
                <AiOutlineMan className="text-lg" />
                <span>Beauty</span>
              </li>
              <li className="px-6 py-3 cursor-pointer rounded-full text-primary flex items-center gap-2 text-sm font-medium">
                <AiOutlineMan className="text-lg" />
                <span>Jewelry</span>
              </li>
            </nav>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-5">
            <ExploreItem
              image="explore1.webp"
              totalProducts={155}
              subCategory="Manufacturar"
              category="Backpack"
              shadowImage="explore-shadow.svg"
            />
            <ExploreItem
              image="explore1.webp"
              totalProducts={155}
              subCategory="Manufacturar"
              category="Shoes"
              shadowImage="explore-shadow.svg"
            />
            <ExploreItem
              image="explore1.webp"
              totalProducts={155}
              subCategory="Manufacturar"
              category="Recycled Blanket"
              shadowImage="explore-shadow.svg"
            />
            <ExploreItem
              image="explore1.webp"
              totalProducts={155}
              subCategory="Manufacturar"
              category="Cycling Shorts"
              shadowImage="explore-shadow.svg"
            />
            <ExploreItem
              image="explore1.webp"
              totalProducts={155}
              subCategory="Manufacturar"
              category="Cycling Jersey"
              shadowImage="explore-shadow.svg"
            />
            <ExploreItem
              image="explore1.webp"
              totalProducts={155}
              subCategory="Manufacturar"
              category="Car Coat"
              shadowImage="explore-shadow.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
