import React from 'react'
import headermiddle from './headermiddle.css'
import Basket from '../Basket/Basket'
export default function HeaderMiddle() {
  return (
    <div className='header-middle-wrapper'>
        <div className='header-middle-logotype'>
            BamBook
        </div>
        <div className='header-middle-text'>
            Інтернет магазин книг
        </div>
        <div className='middle-basket'>
        <Basket/>
        </div>
    </div>
  )
}
