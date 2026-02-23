import type { SVGProps } from "react";

const MongoDB = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path
      fill="#47A248"
      d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0z"
    />
    <path
      fill="#FFF"
      d="M128 32c52.935 0 96 43.065 96 96 0 52.935-43.065 96-96 96S32 180.935 32 128c0-52.935 43.065-96 96-96zm0 16c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
    />
  </svg>
);

export { MongoDB };
