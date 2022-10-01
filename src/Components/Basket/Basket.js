import React from "react";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import basket from './basket.css'
export default function Basket() {

    const [width,setWidth] = React.useState(window.outerWidth);

    function handleResize() {
      setWidth(window.outerWidth)
    }
  
    React.useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
  
    console.log('width',width)
    if (width >= 992) {
      return(
        <Nav className='header-middle-basket-wrapper'>
            <BsFillBasket3Fill className='header-basket'/>
         </Nav>
      )
    } else if (width < 992) {
      return (
        <Nav className='header-top-basket-wrapper'>
            <BsFillBasket3Fill className='header-basket'/>
         </Nav>
      )
    }
}
