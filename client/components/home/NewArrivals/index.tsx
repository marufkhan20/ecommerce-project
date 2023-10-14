import ProductItem from "@/components/product/ProductItem";
import Heading from "@/components/shared/Heading";
import SlideArrows from "@/components/shared/SlideArrows";
import products from "@/data/products";

const NewArrivals = () => {
  return (
    <section>
      <div className="container px-8 sm:px-0 pb-32 border-b border-light">
        <Heading title="New Arrivals." secondTitle="REY backpacks & bags">
          <SlideArrows />
        </Heading>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-14">
          {products?.map((product) => (
            <ProductItem key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
