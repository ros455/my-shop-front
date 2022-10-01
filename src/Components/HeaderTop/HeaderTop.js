import React from 'react';
import { Navbar,Container,Nav,NavDropdown, Button } from 'react-bootstrap';
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import Basket from '../Basket/Basket';
import SigIn from '../SigIn/SigIn';
import header from './header.css'
export default function HearedTop () {
    return (
        <>
    <Navbar bg="light" expand="lg" className='header-top-wrapper'>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className='top-basket'>
        <Basket/>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Про нас</Nav.Link>
            <Nav.Link href="#link">Оплата та доставка</Nav.Link>
            <Nav.Link href="#link">Обмін та повернення</Nav.Link>
            <Nav.Link href="#link">Контакти</Nav.Link>
          </Nav>
          <Nav className='social-wrapper'>
          <Nav.Link href="#home">
            <AiFillFacebook className='social'/>
          </Nav.Link>
          <Nav.Link href="#home">
            <AiFillInstagram className='social'/>
          </Nav.Link>
          <Nav.Link href="#home">
            <AiFillTwitterSquare className='social'/>
          </Nav.Link>
          </Nav>
          <Nav className='sig-in-top-wrapper'>
          <SigIn/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
      );
}
