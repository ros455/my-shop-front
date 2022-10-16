import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="about-us">Про нас</Link>
            <Link to="pay-and-delivery">Оплата та доставка</Link>
            <Link to="exchange-and-return">Обмін та повернення</Link>
            <Link to="contacts">Контакти</Link>
          </Nav>
          <Nav className='social-wrapper'>
          <Nav.Link href="https://uk-ua.facebook.com/">
            <AiFillFacebook className='social'/>
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/">
            <AiFillInstagram className='social'/>
          </Nav.Link>
          <Nav.Link href="https://twitter.com/">
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
