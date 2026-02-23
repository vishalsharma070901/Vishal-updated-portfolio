import type { SVGProps } from "react";

const Css = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path fill="#1572B6" d="M0 0h256v256H0V0z" />
    <path
      fill="#FFF"
      d="M53.8 102.6l4 45.4 80 22.3 80-22.3 4-45.4H53.8zM128 194.6l-65.2-18.2-5.2-58.6h22.2l2.4 26.4 42.8 11.8 42.8-11.8 2.4-26.4H198l-5.2 58.6-65.6 18.2zM64 44l4 8h80l4-8 4-18H60l4 18zM196 62l-4-18H128l-4 8h-56l4-8h120l-4 18h-48z"
    />
  </svg>
);

export { Css };
