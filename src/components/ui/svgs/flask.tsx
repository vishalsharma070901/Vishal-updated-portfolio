import type { SVGProps } from "react";

const Flask = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path
      fill="#000"
      d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0z"
    />
    <path
      fill="#FFF"
      d="M128 32c-8.837 0-16 7.163-16 16v48H80v16h32v96H80v16h96v-16h-32v-96h32V96h-32V48c0-8.837-7.163-16-16-16z"
    />
  </svg>
);

export { Flask };
