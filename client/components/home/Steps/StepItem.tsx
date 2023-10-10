import { FC } from "react";

interface IProps {
  image: string;
  step: number;
  title: string;
  description: string;
}

const StepItem: FC<IProps> = ({ image, step, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={`/images/steps/${image}.webp`} alt="step" className="w-[40%]" />
      <span className="bg-[#FEE2E2] text-xs font-medium text-[#991b1b] px-3 py-1 rounded-full mt-10">
        Step {step}
      </span>
      <h4 className="my-5">{title}</h4>
      <p className="text-center w-[70%]">{description}</p>
    </div>
  );
};

export default StepItem;
