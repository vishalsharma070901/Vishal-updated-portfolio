import type { SVGProps } from "react";

const Groq = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path fill="#000" d="M0 0h256v256H0z" />
    <path
      fill="#FFF"
      d="M128 48c44.183 0 80 35.817 80 80s-35.817 80-80 80-80-35.817-80-80 35.817-80 80-80zm0 16c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64z"
    />
  </svg>
);

export { Groq };
