import { CiSearch } from "react-icons/ci";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Slider = () => {
  return (
    <div className="bg-[#E3FFE6] px-5 relative">
      <div className="container flex items-center justify-between gap-3">
        <div>
          <h4 className="text-xl font-medium text-[#334155]">
            In this season, find the best 🔥
          </h4>
          <h2 className="text-primary font-semibold text-[72px] leading-[72px] w-[80%] mt-8 mb-[70px]">
            Exclusive collection for everyone
          </h2>
          <button className="flex items-center gap-2 px-8 py-5 rounded-full bg-primary text-white font-medium text-base">
            <span>Explore now</span>
            <CiSearch className="text-xl" />
          </button>
        </div>
        <div className="h-[650px] w-[780px]">
          <img
            className="h-full w-full"
            src="/images/hero-right-2.webp"
            alt="hero"
          />
        </div>
      </div>

      {/* slider arrows */}
      <div className="absolute top-[50%] left-8 translate-y-[-50%] h-12 w-12 rounded-full transition-all border-2 border-transparent hover:border-[#94A3B8] cursor-pointer flex items-center justify-center">
        <FiArrowLeft className="text-2xl" />
      </div>

      <div className="absolute top-[50%] right-8 translate-y-[-50%] h-12 w-12 rounded-full transition-all border-2 border-transparent hover:border-[#94A3B8] cursor-pointer flex items-center justify-center">
        <FiArrowRight className="text-2xl" />
      </div>

      {/* slider integrator */}
      <div className="flex items-center gap-2 absolute bottom-5 left-[50%] translate-x-[-50%]">
        <div className="w-20 h-1 bg-primary rounded-full cursor-pointer"></div>
        <div className="w-20 h-1 bg-white rounded-full cursor-pointer"></div>
        <div className="w-20 h-1 bg-white rounded-full cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Slider;
