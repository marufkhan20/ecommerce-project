import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <section className="py-32">
      <div className="container px-8 sm:px-0">
        <div className="w-[85%] mx-auto">
          <div className="flex items-center justify-between w-[70%] mx-auto">
            <img src="/images/testimonials/2.webp" alt="user" />
            <img src="/images/testimonials/1.webp" alt="user" />
            <img src="/images/testimonials/3.webp" alt="user" />
          </div>
          <div className="flex items-center justify-between mt-12 mx-auto">
            <img src="/images/testimonials/4.webp" alt="user" />
            <TestimonialItem />
            <img src="/images/testimonials/5.webp" alt="user" />
          </div>
          <div className="flex items-center justify-between w-[60%] mx-auto">
            <img src="/images/testimonials/6.webp" alt="user" />
            <img src="/images/testimonials/7.webp" alt="user" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
