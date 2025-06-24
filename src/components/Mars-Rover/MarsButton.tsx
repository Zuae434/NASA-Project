import type { ReactNode } from "react";

type MarsButtonProps = {
  svg: ReactNode;
  text: string;
  invertGradient?: boolean;
};

const MarsButton: React.FC<MarsButtonProps> = ({
  svg,
  text,
  invertGradient,
}) => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <button
          className="button-box-shadow h-[48px] w-[240px] flex shadow-xl-30 items-center justify-around"
          style={{
            background: `linear-gradient( ${
              invertGradient ? 90 : 270
            }deg, rgba(5, 5, 5, 0.5) 0%, rgba(135, 47, 156, 0.5) 50%, rgba(240, 163, 228, 0.5) 100%`,
          }}
        >
          <h1 className="shrink-0 text-[#f9f8fc] font-[Inter] text-[16px] items-center justify-center">
            {text}
          </h1>
          {svg}
        </button>
      </div>
    </>
  );
};

export default MarsButton;
