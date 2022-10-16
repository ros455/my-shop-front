import React from "react";
import { Link } from "react-router-dom";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cart";
import basket from './basket.css'
import TotalCarSum from "../TotalCarSum/TotalCarSum";
export default function Basket() {
  const cart = useSelector(selectCart);

  const cartLength = cart.length;

  console.log("cartLength", cartLength);

  return (
    <div className="basket-wrapper">
      <TotalCarSum />
      <Nav className="header-middle-basket-wrapper">
        <Link to="cart">
          <BsFillBasket3Fill className="header-basket" />
        </Link>
        <Link className="header-cart-link-length" to="cart">
          <p className="header-cart-length">{cartLength}</p>
        </Link>
      </Nav>
    </div>
  );
}
