import "../Navbar/components.css"
import React from "react";
import { useCartContext } from "../../context/CartContext";
export const CartWidget = () => {
  const{totalProducts }=useCartContext();

  return (
    <>
    <div> 
    <img className="Cart" src="https://cdn.icon-icons.com/icons2/1558/PNG/512/353439-basket-buy-cart-ecommerce-online-purse-shop-shopping_107515.png" />
    </div>
    <span>{totalProducts()	|| "" }</span>
    
    </>
    )
};

export default CartWidget
