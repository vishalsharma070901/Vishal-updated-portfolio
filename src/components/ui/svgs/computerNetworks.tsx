import type { SVGProps } from "react";

const ComputerNetworks = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path fill="#0F766E" d="M0 0h256v256H0z" />
    <path fill="#FFF" d="M64 64h48v48H64V64zm80 0h48v48h-48V64zm-40 80h48v48h-48v-48z" />
  </svg>
);

export { ComputerNetworks };
