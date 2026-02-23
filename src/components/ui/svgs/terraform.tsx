import type { SVGProps } from "react";

const Terraform = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path fill="#7B42BC" d="M0 0h256v256H0z" />
    <path
      fill="#FFF"
      d="M128 48l-64 37v74l64 37 64-37V85L128 48zm0 24l32 18.5v37L128 138l-32-18.5v-37L128 72z"
    />
  </svg>
);

export { Terraform };
