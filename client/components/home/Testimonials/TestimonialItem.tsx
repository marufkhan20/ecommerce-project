import { AiTwotoneStar } from "react-icons/ai";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

const TestimonialItem = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-8 mx-auto w-[70%]">
        <div className="flex items-center">
          <BiSolidQuoteSingleLeft className="text-[#CFEAE7] text-[50px]" />
          <BiSolidQuoteSingleLeft className="text-[#CFEAE7] text-[50px]" />
        </div>
        <p className="text-2xl mx-auto text-center text-primary">
          Great quality products, affordable prices, fast and friendly delivery.
          I very recommend.
        </p>
        <div className="flex items-center">
          <BiSolidQuoteSingleLeft className="text-[#CFEAE7] text-[50px] rotate-180" />
          <BiSolidQuoteSingleLeft className="text-[#CFEAE7] text-[50px] rotate-180" />
        </div>
      </div>
      <h3 className="text-center mt-10 text-2xl">Tiana Abie</h3>
      <div className="flex items-center justify-center text-[#EAB308] text-2xl mt-3">
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
      </div>
    </div>
  );
};

export default TestimonialItem;
