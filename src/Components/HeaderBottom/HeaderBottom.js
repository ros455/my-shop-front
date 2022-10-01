import React from 'react'
import { Navbar,Container,Nav,NavDropdown, Form, Button } from 'react-bootstrap';
import {BsPersonFill} from 'react-icons/bs';
import headerbottom from './headerbottom.css';
import {useDispatch, useSelector} from 'react-redux';
import { fetchCategory } from '../../store/category.js';
import SigIn from '../SigIn/SigIn';
export default function HeaderBottom() {

  const category = useSelector((state) => state.category.category.items);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCategory())
  },[])

  console.log('category:',category)

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
            <NavDropdown title="Категорії" id="navbarScrollingDropdown" className='header-bottom-dropdown'>
              {category && category.map((el) => (
                <NavDropdown.Item href="#action3" key={el._id}>{el.category}</NavDropdown.Item>
              ))}
            </NavDropdown>

          <Form className="header-bottom-form">
            <Form.Control
              type="search"
              placeholder="Пошук"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Знайти</Button>
          </Form>
          <div className='sig-in-bottom-wrapper'>
          <SigIn/>
          </div>
      </Container>
    </Navbar>
  )
}
