import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
// import Hooks:
import { useState } from 'react';

// component: template + logic
// JSX: code html trong 1 file js.
// trình compiler là babel.

const App = () => { // class

  let [name, setName] = useState('Khuong');
  const [address, setAddress] = useState('');

  const handleEventClick = (event) => {
    console.log('>>> addresss: ', address);
    setName(address);
  }

  const handleOnChangeInput = (event) => {

    setAddress(event.target.value);
    //console.log(event.target.value);
  }

  // re-render
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}
          <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)} />
          <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
        </p>
      </header>
    </div>
  );
}

export default App;
