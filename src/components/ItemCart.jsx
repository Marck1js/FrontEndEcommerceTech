import React from "react";
import x from "../pages/Cart.module.css";

const ItemCart = () => {
  return (
    <div className={x["cart-item"]}>
      <img
        className={x["cart-item-img"]}
        src="https://blog.tiendasishop.com/wp-content/uploads/2022/07/productos-tecnologicos-2.webp"
        alt=""
      />
      <div className={x["cart-item-info"]}>
        <p className={x["cart-prod-title"]}>Lorem ipsum</p>
        <p className={x["cart-prod-price"]}>0.00</p>
        <div className={x["cart-prod-footer"]}>
          <div className={x["footer-buttons"]}>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
          <a href="#">
            <img src="../svgComponents/trash.svg" alt="trash" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
