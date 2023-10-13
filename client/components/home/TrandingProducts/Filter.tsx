import Button from "@/components/ui/Button";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { TbFilterSearch } from "react-icons/tb";

const Filter = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between gap-5">
        <nav className="flex items-center gap-1">
          <li className="px-[22px] py-[10px] rounded-full font-medium cursor-pointer bg-primary text-white transition-all">
            All Items
          </li>
          <li className="px-[22px] py-[10px] rounded-full font-medium cursor-pointer hover:bg-[#F5F8FB] hover:text-primary transition-all">
            Women
          </li>
          <li className="px-[22px] py-[10px] rounded-full font-medium cursor-pointer hover:bg-[#F5F8FB] hover:text-primary transition-all">
            Mans
          </li>
          <li className="px-[22px] py-[10px] rounded-full font-medium cursor-pointer hover:bg-[#F5F8FB] hover:text-primary transition-all">
            Kids
          </li>
          <li className="px-[22px] py-[10px] rounded-full font-medium cursor-pointer hover:bg-[#F5F8FB] hover:text-primary transition-all">
            Jewels
          </li>
        </nav>
        <Button>
          <div className="flex items-center gap-3">
            <TbFilterSearch className="text-xl" />
            Filter
            <MdOutlineKeyboardArrowUp className="ml-2 text-xl" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Filter;
