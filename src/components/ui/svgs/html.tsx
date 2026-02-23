import type { SVGProps } from "react";

const Html = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path fill="#E34F26" d="M0 0h256v256H0V0z" />
    <path
      fill="#FFF"
      d="M48 38l20 226 80 22 80-22 20-226H48zm149 76H85l4 45h108l-6 69-50 14-50-14-3-32h-22l5 63 93 26 93-26 13-140H59l-4-45h142l-4 38z"
    />
  </svg>
);

export { Html };
