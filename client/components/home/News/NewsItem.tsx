import Link from "next/link";

const NewsItem = () => {
  return (
    <div className="flex justify-between gap-8">
      <div className="w-full">
        <h2 className="text-2xl transition-all hover:text-[#0c4a6e] mt-6">
          <Link href="#">
            Sagittis Vitae Et Leo Duis Ut Diam Quam Nulla Porttitor
          </Link>
        </h2>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          vero perspiciatis mollitia? Aperiam...
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
      <img
        src="/images/blogs/2.webp"
        className="w-[300px] h-[210px] rounded-3xl"
        alt="blog"
      />
    </div>
  );
};

export default NewsItem;
