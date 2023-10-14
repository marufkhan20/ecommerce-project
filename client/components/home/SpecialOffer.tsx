import Button from "../ui/Button";

const SpecialOffer = () => {
  return (
    <section>
      <div className="container px-8 sm:px-0 flex flex-col lg:flex-row items-center gap-7 justify-between bg-[#FEFCE8] rounded-3xl">
        <img
          className="h-full md:h-[666px]"
          src="/images/promo2.webp"
          alt="promo"
        />
        <div className="w-full lg:w-[50%] pb-10 lg:pb-0 px-10 lg:px-0 mt-5 lg:mt-0">
          <h3 className="text-2xl text-primary">Logo Here</h3>
          <h2 className="mt-14 mb-7 text-[40px] sm:text-[60px] leading-[50px] sm:leading-[68px]">
            Special offer
            <br />
            in kids products
          </h2>
          <span>
            Fashion is a form of self-expression and autonomy at a<br />{" "}
            particular period and place.
          </span>
          <div className="mt-10">
            <Button>Discover more</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
