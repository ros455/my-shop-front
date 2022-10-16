import React from 'react'
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCart, selectCart, incrementCart } from "../../store/cart";
export default function AddToCart({el}) {
    const dispatch = useDispatch();

    const cart = useSelector(selectCart);

    const onAdd = (el) => {
        let isCart = false
        cart.map((item) => {
          if(item._id == el._id) {
            isCart = true;
            dispatch(incrementCart(item._id))
          }
        })
    
        if(!isCart) {
          dispatch(addCart(el))
        }
      }

  return (
    <>
        <Button variant="outline-dark" onClick={() => onAdd(el)}>В корзину</Button>
    </>
  )
}
