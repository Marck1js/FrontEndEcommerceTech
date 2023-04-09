import React from "react";

function Board() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke="#5D5D6B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.15"
        d="M8 12v-2M6.713 1.88l-4.62 3.7c-.52.414-.853 1.287-.74 1.94l.887 5.307c.16.947 1.067 1.713 2.027 1.713h7.466c.954 0 1.867-.773 2.027-1.713l.886-5.307c.107-.653-.226-1.526-.74-1.94l-4.62-3.693c-.713-.573-1.866-.573-2.573-.007z"
      ></path>
    </svg>
  );
}

export default Board;
