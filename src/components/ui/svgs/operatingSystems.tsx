import type { SVGProps } from "react";

const OperatingSystems = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path fill="#64748B" d="M0 0h256v256H0z" />
    <path fill="#FFF" d="M64 80h128v16H64V80zm0 40h96v16H64v-16zm0 40h128v16H64v-16z" />
  </svg>
);

export { OperatingSystems };
