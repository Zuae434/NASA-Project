import type { ReactNode } from "react";
import "../../index.css";

type NavButtonProps = {
  svg?: ReactNode;
  text: string;
  invertGradient?: boolean;
};

const NavButton: React.FC<NavButtonProps> = ({ svg, text, invertGradient }) => {
  return (
    <>
      <button
        className="rounded-[16px] flex flex-row items-center justify-end min-h-[56px] max-h-[56px] py-[4px] px-[12px] gap-[10px] shrink-0 cursor-pointer"
        style={{
          background: `linear-gradient( ${
            invertGradient ? 90 : 270
          }deg, rgba(5, 5, 5, 0.5) 0%, rgba(135, 47, 156, 0.5) 50%, rgba(240, 163, 228, 0.5) 100%`,
        }}
      >
        {svg}
        <h1 className="text-[#FFF] font-[Inter] font-bold font-xl">{text}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M6.66669 16H25.3334M25.3334 16L16 6.66667M25.3334 16L16 25.3333"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
};

export default NavButton;
