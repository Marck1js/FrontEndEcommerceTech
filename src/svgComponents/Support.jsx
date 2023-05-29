import * as React from "react";
const Support = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 10}
    height={props.size || 10}
    fill="none"
    stroke={props.fill || '#000'}
    strokeWidth={4}
    viewBox="0 0 64 64"
    // {...props}
  >
    <path
      strokeLinecap="round"
      d="M12.91 31.8v-5.7a19.09 19.09 0 0 1 38.18 0v5.7"
    />
    <path
      strokeLinecap="round"
      d="M12.06 31.8h4.7v13.38h0-4.7a3 3 0 0 1-3-3V34.8a3 3 0 0 1 3-3ZM51.94 45.18h-4.7 0V31.8h4.7a3 3 0 0 1 3 3v7.38a3 3 0 0 1-3 3ZM51.7 45.56v5a4 4 0 0 1-4 4H36.56"
    />
    <rect
      width={8.1}
      height={5.07}
      x={28.45}
      y={51.92}
      strokeLinecap="round"
      rx={2}
    />
  </svg>
);
export default Support;
