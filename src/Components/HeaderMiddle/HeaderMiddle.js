import React from 'react'
import { Link } from 'react-router-dom'
import headermiddle from './headermiddle.css'
import Basket from '../Basket/Basket'
import { useDispatch, useSelector } from 'react-redux'
import { selectProductOnPage, changeProductOnPage } from '../../store/productOnPage';
import { sortDefault, sortCheap, sortExpensive } from '../../store/product';
import { Navbar,Container,Nav,NavDropdown, Form, Button } from 'react-bootstrap';
export default function HeaderMiddle() {
  const dispatch = useDispatch();

  const selectedChange = (e) => {
    console.log('cange',e.target.value)
    dispatch(changeProductOnPage(e.target.value))
  }

  const sortDefaultFunc = () => {
    dispatch(sortDefault())
  }

  const sortCheapFunc = () => {
    dispatch(sortCheap())
  }

  const sortExpensiveFunc = () => {
    dispatch(sortExpensive())
  }
  return (
    <div className='header-middle-wrapper'>
      <select onChange={selectedChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <div className='header-middle-sort-wrapper'>
      <NavDropdown title="Сортування">
        <NavDropdown.Item onClick={sortDefaultFunc}>За умовчанням</NavDropdown.Item>
        <NavDropdown.Item onClick={sortCheapFunc}>Найдешевші</NavDropdown.Item>
        <NavDropdown.Item onClick={sortExpensiveFunc}>Найдорожчі</NavDropdown.Item>
      </NavDropdown>
      </div>
        <Link to='/' className='header-middle-logotype'>
            BamBook
        </Link>
        {/* <div className='header-middle-text'>
            Інтернет магазин книг
        </div> */}
        <div className='middle-basket'>
        <Basket/>
        </div>
    </div>
  )
}
