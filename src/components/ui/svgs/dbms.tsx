import type { SVGProps } from "react";

const Dbms = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path fill="#0EA5E9" d="M0 0h256v256H0z" />
    <path fill="#FFF" d="M64 64h128v32H64V64zm0 48h128v32H64v-32zm0 48h128v32H64v-32z" />
  </svg>
);

export { Dbms };
