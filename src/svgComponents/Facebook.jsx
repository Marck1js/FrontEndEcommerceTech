import * as React from "react";

const Facebook = ({size, fill}) => (
  <svg
    width={size || 10}
    height={size || 19}
    xmlns="http://www.w3.org/2000/svg"
    fill={fill ? fill : "#fff"}
  >
    <path  d="M3 6.511H.833V9.4H3v8.667H6.61V9.4h2.63L9.5 6.511H6.61V5.307c0-.69.139-.963.805-.963H9.5V.734H6.75C4.153.733 3 1.876 3 4.065v2.445Z" />
  </svg>
);

export default Facebook;
