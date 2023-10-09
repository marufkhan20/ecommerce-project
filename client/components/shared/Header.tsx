import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { LiaUser } from "react-icons/lia";

const Header = () => {
  return (
    <header className="py-5 bg-white">
      <div className="container flex justify-between gap-5 items-center">
        <Link href="/" className="text-xl font-semibold text-primary">
          Logo Here
        </Link>
        <nav>
          <ul className="flex items-center gap-1">
            <li>
              <Link
                className="text-primary font-medium text-[15px] px-4 py-3 transition-all hover:bg-[#F1F5F9] rounded-full"
                href="#"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                className="text-primary font-medium text-[15px] px-4 py-3 transition-all hover:bg-[#F1F5F9] rounded-full"
                href="#"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                className="text-primary font-medium text-[15px] px-4 py-3 transition-all hover:bg-[#F1F5F9] rounded-full"
                href="#"
              >
                Beauty
              </Link>
            </li>
            <li>
              <Link
                className="text-primary font-medium text-[15px] px-4 py-3 transition-all hover:bg-[#F1F5F9] rounded-full"
                href="#"
              >
                Sport
              </Link>
            </li>
            <li>
              <Link
                className="text-primary font-medium text-[15px] px-4 py-3 transition-all hover:bg-[#F1F5F9] rounded-full"
                href="#"
              >
                Templates
              </Link>
            </li>
            <li>
              <Link
                className="text-primary font-medium text-[15px] px-4 py-3 transition-all hover:bg-[#F1F5F9] rounded-full"
                href="#"
              >
                Explore
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <li className=" cursor-pointer h-12 w-12 rounded-full transition-all hover:bg-slate-hover flex items-center justify-center">
            <CiSearch className="text-[25px] text-primary" />
          </li>
          <li className=" cursor-pointer h-12 w-12 rounded-full transition-all hover:bg-slate-hover flex items-center justify-center">
            <LiaUser className="text-[25px] text-primary" />
          </li>
          <li className=" cursor-pointer h-12 w-12 rounded-full transition-all hover:bg-slate-hover flex items-center justify-center relative">
            <HiOutlineShoppingCart className="text-[25px] text-primary" />
            <span className="absolute top-0 right-0 text-white font-medium text-xs bg-sky-400 rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </li>
        </div>
      </div>
    </header>
  );
};

export default Header;
