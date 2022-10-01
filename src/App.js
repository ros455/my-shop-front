import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import HeaderBottom from './Components/HeaderBottom/HeaderBottom';
import HeaderMiddle from './Components/HeaderMiddle/HeaderMiddle';
import HearedTop from './Components/HeaderTop/HeaderTop';

function App() {
  return (
    <div className="App">
      <HearedTop/>
      <HeaderMiddle/>
      <HeaderBottom/>
    </div>
  );
}

export default App;
