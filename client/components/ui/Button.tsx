import { FC, ReactNode } from "react";

interface IProps {
  type?: string;
  children: ReactNode;
}

const Button: FC<IProps> = ({ type, children }) => {
  const className =
    type === "secondary"
      ? "border-light text-primary hover:bg-[#F3F4F6]"
      : "bg-primary text-[#f8fafc] border-transparent hover:bg-primary/80";

  return (
    <button
      className={`px-5 py-3 rounded-full text-base font-medium border transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
