import React from "react";

function Statistics({size}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : '24'}
      height={size ? size : '24'}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#0D0E0F"
        strokeLinecap="round"
        strokeWidth="1.15"
        d="M20 20H4"
      ></path>
      <path
        stroke="#0D0E0F"
        strokeWidth="1.15"
        d="M19.2 20v-6a1.2 1.2 0 00-1.2-1.2h-2.4a1.2 1.2 0 00-1.2 1.2v6M14.4 20V6.4c0-1.131 0-1.697-.352-2.049C13.697 4 13.131 4 12 4c-1.132 0-1.697 0-2.049.351C9.6 4.703 9.6 5.27 9.6 6.4V20M9.6 20V10a1.2 1.2 0 00-1.2-1.2H6A1.2 1.2 0 004.8 10v10"
      ></path>
    </svg>
  );
}

export default Statistics;
