import Button from "@/components/ui/Button";
import Link from "next/link";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <section>
      <div className="container p-32 rounded-[30px] bg-[#F7F7F9]">
        <h2 className="text-primary text-4xl">
          The latest news.{" "}
          <span className="text-secondary">From the Ciseco blog</span>
        </h2>

        <div className="flex justify-between gap-8 mt-12">
          <div className="w-full">
            <img
              src="/images/blogs/1.webp"
              className="w-full h-[460px] rounded-3xl"
              alt="blog"
            />
            <h2 className="text-2xl transition-all hover:text-[#0c4a6e] mt-6">
              <Link href="#">
                Sagittis Vitae Et Leo Duis Ut Diam Quam Nulla Porttitor
              </Link>
            </h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              vero perspiciatis ullam ea? Nihil accusamus similique debitis
              tempore mollitia? Aperiam...
            </p>
            <div className="mt-5 flex items-center gap-2">
              <img
                src="/images/users/1.webp"
                alt="user"
                className="w-6 h-6 rounded-full"
              />
              <h4 className="text-sm font-medium text-secondary cursor-pointer hover:text-black">
                Kailey Greer
              </h4>
              <span className="text-sm">May 20, 2021</span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-8">
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </div>
        </div>

        <div className="flex items-center justify-center mt-12">
          <Button type="secondary">Show all blog articles</Button>
        </div>
      </div>
    </section>
  );
};

export default News;
