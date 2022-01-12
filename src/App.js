import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

// component: template + logic
// JSX: code html trong 1 file js.
// trình compiler là babel.

const App = () => {

  let name = 'khuong';
  let number = 2022;
  let obj = {
    name: 'Minh Khuong',
    channel: 'Minh Khuong'
  }
  let link = 'https://github.com/khuong16/react-hooks/commits/dev';

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name} - Đây là năm {number} - Đây là Object {obj.name}
          <a href={link} target='blank'>Nhấn và link</a>
          <p className='note' style={{ color: 'red', fontSize: '20px', marginTop: '15px' }}>{JSON.stringify(obj)}</p>
        </p>
      </header>
    </div>
  );
}

export default App;
