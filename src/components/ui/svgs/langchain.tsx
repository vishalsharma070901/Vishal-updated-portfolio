import type { SVGProps } from "react";

const LangChain = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path fill="#1C3C3C" d="M0 0h256v256H0z" />
    <path
      fill="#3B7B7B"
      d="M128 32L32 96v64l96 64 96-64V96L128 32zm0 32l64 42.67v53.33L128 192 64 160V106.67L128 64z"
    />
    <path fill="#10B981" d="M128 96l-32 21.33v42.67L128 181.33 160 160V117.33L128 96z" />
  </svg>
);

export { LangChain };
