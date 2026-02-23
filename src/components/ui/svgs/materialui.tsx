import type { SVGProps } from "react";

const MaterialUi = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path
      fill="#007FFF"
      d="M0 110.848V256h256V0H0v110.848z"
    />
    <path
      fill="#FFF"
      d="M42.667 42.667h85.333v85.333H42.667V42.667zm128 0H256v85.333H170.667V42.667zM42.667 128h85.333v85.333H42.667V128zm128 0H256v85.333H170.667V128z"
    />
  </svg>
);

export { MaterialUi };
