import type { SVGProps } from "react";

const Llm = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path fill="#6366F1" d="M0 0h256v256H0z" />
    <path fill="#FFF" d="M64 64h128v128H64V64zm16 16v96h96V80H80z" />
  </svg>
);

export { Llm };
