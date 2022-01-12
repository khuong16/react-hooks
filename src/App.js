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
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching Hoi Dan IT Channel' },
    { id: 'todo2', title: 'Doing homework' },
    { id: 'todo3', title: 'Playing game' }
  ]);

  const handleEventClick = (event) => {
    // hooks not merge stage.
    // ... spread

    if (!address) {
      alert('empty input');
      return;
    }

    let newToDo = {
      id: 'abc',
      title: address
    }
    setTodos([...todos, newToDo]);
    setAddress('');
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
        <div className='todo-container'>
          {todos && todos.length > 0 &&
            <>
              {todos.map(todo => {
                return (
                  <div className='todo-child' key={todo.id}>
                    {todo.id} - {todo.title}
                  </div>
                )
              })}
            </>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
