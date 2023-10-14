import ProductItem from "@/components/product/ProductItem";
import Heading from "@/components/shared/Heading";
import SlideArrows from "@/components/shared/SlideArrows";
import products from "@/data/products";

const BestSellerProducts = () => {
  return (
    <section>
      <div className="container py-32 px-8 sm:px-0">
        <Heading title="Best Sellers." secondTitle="Best selling of the month">
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

export default BestSellerProducts;
