import type { SVGProps } from "react";

const Oop = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path fill="#3B82F6" d="M0 0h256v256H0z" />
    <path fill="#FFF" d="M64 64h64v64H64V64zm64 64h64v64h-64v-64z" />
  </svg>
);

export { Oop };
