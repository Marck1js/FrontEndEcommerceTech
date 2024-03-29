import * as React from "react";

const Trash = (props) => (
  <svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 5V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7h1a1 1 0 1 0 0-2h-3Zm-2-1H9v1h6V4Zm2 3H7v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7Z"
      fill="currentColor"
    />
    <path d="M9 9h2v8H9V9ZM13 9h2v8h-2V9Z" fill="currentColor" />
  </svg>
);

export default Trash;
