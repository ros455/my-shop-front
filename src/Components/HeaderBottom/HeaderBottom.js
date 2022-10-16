import React from 'react'
import { Navbar,Container,Nav,NavDropdown, Form, Button } from 'react-bootstrap';
import {BsPersonFill} from 'react-icons/bs';
import headerbottom from './headerbottom.css';
import {useDispatch, useSelector} from 'react-redux';
import { fetchCategory } from '../../store/category.js';
import { currentCategory,allCategory, searchProduct } from '../../store/product';
import { selectProductOnPage, setCurrentPage, selectCurrentPage } from '../../store/productOnPage';
import SigIn from '../SigIn/SigIn';
export default function HeaderBottom() {

  const dispatch = useDispatch();

  const category = useSelector((state) => state.category.category.items);

  React.useEffect(() => {
    dispatch(fetchCategory())
  },[])

  const changeCategory = (el) => {
    dispatch(currentCategory(el))
  }

  const changeAllCategory = () => {
    dispatch(allCategory())
  }

  const search = (e) => {
    dispatch(searchProduct(e))
    dispatch(setCurrentPage(1))
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
            <NavDropdown title="Категорії" id="navbarScrollingDropdown" className='header-bottom-dropdown'>
            <NavDropdown.Item href="#action3" onClick={changeAllCategory}>Всі</NavDropdown.Item>
              {category && category.map((el) => (
                <NavDropdown.Item href="#action3" key={el._id} value={el.category} onClick={() => changeCategory(el.category)}>{el.category}</NavDropdown.Item>
              ))}
            </NavDropdown>

          <Form className="header-bottom-form">
            <Form.Control
              type="search"
              placeholder="Пошук"
              className="me-2"
              aria-label="Search"
              onChange={(e) => search(e.target.value)}
            />
          </Form>
          <div className='sig-in-bottom-wrapper'>
          <SigIn/>
          </div>
      </Container>
    </Navbar>
  )
}
