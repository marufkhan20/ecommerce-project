import { FC, ReactNode } from "react";

interface IProps {
  title: string;
  secondTitle?: string;
  children?: ReactNode;
}

const Heading: FC<IProps> = ({ title, secondTitle, children }) => {
  return (
    <div className="flex items-center gap-5 justify-between">
      <h2 className="text-primary text-4xl">
        {title} <span className="text-secondary">{secondTitle}</span>
      </h2>
      {children}
    </div>
  );
};

export default Heading;
