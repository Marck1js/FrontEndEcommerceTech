import * as React from "react";

const ClaimBook = (props) => (
  <svg
    width={props.size || 112}
    height={props.size || 80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h112v80H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.00893 .0125)" />
      </pattern>
      <image
        id="b"
        width={112}
        height={80}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default ClaimBook;
