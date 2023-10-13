import ProductItem from "@/components/product/ProductItem";
import SecondaryHeading from "@/components/shared/SecondaryHeading";
import products from "@/data/products";
import Filter from "./Filter";

const TrandingProducts = () => {
  return (
    <section>
      <div className="container py-32">
        <SecondaryHeading
          title="What's trending now"
          description="Discover the most trending products in Ciseco."
        />

        <Filter />

        <div className="grid grid-cols-4 gap-7 mt-14">
          {products?.map((product) => (
            <ProductItem key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrandingProducts;
