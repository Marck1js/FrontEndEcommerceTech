import * as React from "react";

const Cart = (props) => (
  <svg
    width={props.size || 10}
    height={props.size || 10}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2a1 1 0 0 0 0 2h.472a1 1 0 0 1 .965.737l.416 1.526L6 14.133V16c0 .694.235 1.332.63 1.84A2.5 2.5 0 1 0 10.95 19h3.1a2.5 2.5 0 1 0 4.771-.43A1 1 0 0 0 18 17H9.001a1 1 0 0 1-1-1v-1h10.236a2 2 0 0 0 1.93-1.474l1.635-6A2 2 0 0 0 19.87 5H5.582l-.215-.79A3 3 0 0 0 2.472 2H2Zm14.5 17a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.736-6H7.764L6.127 7h13.744l-1.635 6ZM8.5 19a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z"
    />
  </svg>
);

export default Cart;
