import { FC } from "react";

interface IProps {
  title: string;
  description: string;
  center?: boolean;
}

const SecondaryHeading: FC<IProps> = ({ title, description, center }) => {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-4xl leading-[40px] mb-4">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default SecondaryHeading;
