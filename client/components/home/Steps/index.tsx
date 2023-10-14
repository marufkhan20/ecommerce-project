import StepItem from "./StepItem";

const Steps = () => {
  return (
    <section>
      <div className="container px-8 sm:px-0 py-32 border-b border-light relative">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <StepItem
            image="1"
            step={1}
            title="Filter & Discover"
            description="Smart filtering and suggestions make it easy to find"
          />
          <StepItem
            image="2"
            step={2}
            title="Add to bag"
            description="Easily select the correct items and add them to the cart"
          />
          <StepItem
            image="3"
            step={3}
            title="Fast shipping"
            description="The carrier will confirm and ship quickly to you"
          />
          <StepItem
            image="4"
            step={4}
            title="Enjoy the product"
            description="Have fun and enjoy your 5-star quality products"
          />
        </div>
        <img
          className="absolute top-[20%] left-0 right-0 w-full -z-20"
          src="/images/steps/shadow.svg"
          alt="shadow"
        />
      </div>
    </section>
  );
};

export default Steps;
