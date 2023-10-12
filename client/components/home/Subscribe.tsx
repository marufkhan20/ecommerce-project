import { FiArrowRight } from "react-icons/fi";

const Subscribe = () => {
  return (
    <section>
      <div className="container bg-[#F8FAFC] flex justify-between items-center gap-10 rounded-[30px]">
        <div className="w-full pl-[90px]">
          <h2 className="text-[52px] leading-[48px]">
            {"Don't"} miss out on <br />
            special offers
          </h2>
          <p className="mt-5">
            Register to receive news about the latest, savings combos, <br />
            discount codes...
          </p>
          <ul className="mt-10 flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <span className="text-xs font-medium text-[#6b21a8] bg-[#F3E8FF] px-[10px] block rounded-full py-1">
                01
              </span>
              <span className="font-medium text-[#374151]">Savings combos</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xs font-medium text-[#1e40af] bg-[#DBEAFE] px-[10px] block rounded-full py-1">
                02
              </span>
              <span className="font-medium text-[#374151]">Freeship</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xs font-medium text-[#991b1b] bg-[#FEE2E2] px-[10px] block rounded-full py-1">
                03
              </span>
              <span className="font-medium text-[#374151]">
                Premium magazines
              </span>
            </li>
          </ul>
          <div className="mt-8 flex items-center justify-between w-[380px] bg-white rounded-full border">
            <input
              className="bg-transparent outline-none px-4 py-2 text-sm"
              type="email"
              placeholder="Enter your email"
            />
            <div className="w-8 h-8 rounded-full bg-primary text-white m-1 flex items-center justify-center cursor-pointer">
              <FiArrowRight className="text-xl" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <img className="h-[650px]" src="/images/promo3.webp" alt="promo3" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
