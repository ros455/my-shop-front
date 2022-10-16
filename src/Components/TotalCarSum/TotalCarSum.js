import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCart } from '../../store/cart'
import totalsum from './totalsum.css'
export default function TotalCarSum() {
    let totalSum = 0;

    const cart = useSelector(selectCart);

    cart.forEach((el) => {
        totalSum += el.price * el.count
      })
      
      console.log('totalSum',totalSum)
  return (
    <>
      {totalSum != 0 ? 
      (<div className='total-sum'>{totalSum}</div>) 
      : 
      (<></>)}
    </>
  )
}
