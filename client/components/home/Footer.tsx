import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="py-28 border-t border-light">
      <div className="container px-8 sm:px-0 grid grid-cols-2 sm:grid-cols-5 gap-8">
        <div>
          <h4 className="text-xl">Logo Here</h4>
          <ul className="flex flex-col gap-2 mt-7">
            <li>
              <Link href="#" className="flex items-center gap-2">
                <BsFacebook className="text-[#4676ED] text-lg" />
                <span className="text-sm text-black">Facebook</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2">
                <IoLogoYoutube className="text-[#DA0000] text-lg" />
                <span className="text-sm text-black">Youtube</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2">
                <BsTelegram className="text-[#299FD9] text-lg" />
                <span className="text-sm text-black">Telegram</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2">
                <AiFillTwitterCircle className="text-[#5A99EC] text-xl" />
                <span className="text-sm text-black">Twitter</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm mb-5">Getting started</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-sm hover:text-black">
              <Link href="#">Release Notes</Link>
            </li>
            <li className="text-sm hover:text-black">
              <Link href="#">Upgrade Guide</Link>
            </li>
            <li className="text-sm hover:text-black">
              <Link href="#">Browser Support</Link>
            </li>
            <li className="text-sm hover:text-black">
              <Link href="#">Dark Mode</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm mb-5">Explore</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-sm hover:text-black">
              <Link href="#">Prototyping</Link>
            </li>
            <li className="text-sm hover:text-black">
              <Link href="#">Design systems</Link>
            </li>
            <li className="text-sm hover:text-black">
              <Link href="#">Pricing</Link>
            </li>
            <li className="text-sm hover:text-black">
              <Link href="#">Security</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm mb-5">Resources</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-sm hover:text-black">
              <Link href="#">Best practices</Link>
            </li>
            <li className="text-sm hover:text-black">
              <Link href="#">Support</Link>
            </li>
            <li className="text-sm hover:text-black">
              <Link href="#">Developers</Link>
            </li>
            <li className="text-sm hover:text-black">
              <Link href="#">Learn design</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm mb-5">Community</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-sm hover:text-black">
              <Link href="#">Discussion Forums</Link>
            </li>
            <li className="text-sm hover:text-black">
              <Link href="#">Code of Conduct</Link>
            </li>
            <li className="text-sm hover:text-black">
              <Link href="#">Contributing</Link>
            </li>
            <li className="text-sm hover:text-black">
              <Link href="#">API Reference</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
