import Heading from "@/components/shared/Heading";
import SlideArrows from "@/components/shared/SlideArrows";
import DepartmentItem from "./DepartmentItem";

const Departments = () => {
  return (
    <section className="pb-32">
      <div className="container px-8 sm:px-0">
        <Heading title="Shop by department">
          <SlideArrows />
        </Heading>

        <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-6 mt-[60px]">
          <DepartmentItem />
          <DepartmentItem />
          <DepartmentItem />
          <DepartmentItem />
          <DepartmentItem />
        </div>
      </div>
    </section>
  );
};

export default Departments;
