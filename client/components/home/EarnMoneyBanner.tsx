import Button from "../ui/Button";

const EarnMoneyBanner = () => {
  return (
    <section className="py-32">
      <div className="container px-8 sm:px-0">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-10 items-center">
          <div className="w-full md:w-[50%]">
            <h3 className="text-xl">Logo Here</h3>
            <h2 className="text-[40px] sm:text-[60px] leading-[50px] sm:leading-[72px] mt-[50px] mb-7">
              Earn free money <br />
              with Ciseco
            </h2>
            <span>With Ciseco you will get freeship & savings combo...</span>
            <div className="flex items-center gap-4 mt-12">
              <Button>Savings combo</Button>
              <Button type="secondary">Discover more</Button>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <img src="/images/earn-money.webp" alt="earn money" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnMoneyBanner;
