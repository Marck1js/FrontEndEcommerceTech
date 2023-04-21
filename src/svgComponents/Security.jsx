import * as React from "react";
const Security = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 10}
    height={props.size || 10}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 10-4 4-2-2M4 5v7.056a8 8 0 0 0 4.422 7.155L12 21l3.578-1.789A8 8 0 0 0 20 12.056V5l-.697.077a10 10 0 0 1-6.917-1.801L12 3l-.386.276a10 10 0 0 1-6.917 1.801L4 5Z"
    />
  </svg>
);
export default Security;
