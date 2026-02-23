import type { SVGProps } from "react";

const Sql = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path fill="#E38C00" d="M80.5 48.5h95v159h-95z" />
    <path
      fill="#fff"
      d="M80.5 48.5v159h95v-31h-64v-32h64v-32h-64v-32h64v-32h-95z"
    />
    <path
      fill="#E38C00"
      d="M80.5 48.5v32h64v-32h-64zm0 64v32h64v-32h-64zm0 64v32h64v-32h-64z"
    />
    <path
      fill="#fff"
      d="M144.5 80.5h31v32h-31zM144.5 144.5h31v32h-31zM144.5 208.5h31v32h-31z"
    />
  </svg>
);

export { Sql };
