import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

// component: template + logic
// JSX: code html trong 1 file js.
// trình compiler là babel.

const App = () => { // class

  let name = 'khuong';
  let number = 2022;
  let obj = {
    name: 'Minh Khuong',
    channel: 'Minh Khuong'
  }
  let link = 'https://github.com/khuong16/react-hooks/commits/dev';

  const handleEventClick = (event) => {
    console.log('>>> click me: ', event.target.value);
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name} - Đây là năm {number} - Đây là Object {obj.name}
          <input type="text" value="Minh Khuong" onClick={(event) => handleEventClick(event)} />
          <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
        </p>
      </header>
    </div>
  );
}

export default App;
