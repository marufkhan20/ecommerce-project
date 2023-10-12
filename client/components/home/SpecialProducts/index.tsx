import Heading from "@/components/shared/Heading";
import SlideArrows from "@/components/shared/SlideArrows";
import products from "@/data/products";
import SpecialProductItem from "./SpecialProductItem";

const SpecialProducts = () => {
  return (
    <section>
      <div className="container py-32">
        <Heading title="Chosen by our experts">
          <SlideArrows />
        </Heading>

        <div className="grid grid-cols-4 gap-7 mt-14">
          {products &&
            products?.map((product) => (
              <SpecialProductItem key={product?.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialProducts;
