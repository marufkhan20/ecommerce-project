import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const SlideArrows = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="h-10 w-10 rounded-full transition-all border-2 border-transparent hover:border-[#94A3B8] cursor-pointer flex items-center justify-center">
        <FiArrowLeft className="text-xl" />
      </div>

      <div className="h-10 w-10 rounded-full transition-all border-2 border-transparent hover:border-[#94A3B8] cursor-pointer flex items-center justify-center">
        <FiArrowRight className="text-xl" />
      </div>
    </div>
  );
};

export default SlideArrows;
