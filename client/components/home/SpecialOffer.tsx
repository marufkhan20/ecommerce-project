import Button from "../ui/Button";

const SpecialOffer = () => {
  return (
    <section>
      <div className="container flex items-center gap-7 justify-between bg-[#FEFCE8] rounded-3xl">
        <img className="h-[666px]" src="/images/promo2.webp" alt="promo" />
        <div className="w-[50%]">
          <h3 className="text-2xl text-primary">Logo Here</h3>
          <h2 className="mt-14 mb-7 text-[60px] leading-[68px]">
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
