import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
// import Hooks:
import { useState, useEffect } from 'react';
import Todo from './components/Todo';

// component: template + logic
// JSX: code html trong 1 file js.
// trình compiler là babel.

const App = () => { // class

  let [name, setName] = useState('Khuong');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching Hoi Dan IT Channel', type: '1' },
    { id: 'todo2', title: 'Doing homework', type: '2' },
    { id: 'todo3', title: 'Playing game', type: '1' }
  ]);

  useEffect(() => {
    console.log('>>>> check run use effect');
  })

  const handleEventClick = (event) => {
    // hooks not merge stage.
    // ... spread

    if (!address) {
      alert('empty input');
      return;
    }

    let newToDo = {
      id: Math.floor((Math.random() * 100000) + 1),
      title: address,
      type: 'random'
    }
    setTodos([...todos, newToDo]);
    setAddress('');
  }

  const handleOnChangeInput = (event) => {

    setAddress(event.target.value);
    //console.log(event.target.value);
  }

  const deleteDataToDo = (id) => {
    let currentTodos = todos
    currentTodos = currentTodos.filter(item => item.id !== id);
    setTodos(currentTodos);
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
        <Todo
          todos={todos}
          title="All Jobs"
          deleteDataToDo={deleteDataToDo}
        />

        <Todo
          todos={todos.filter(item => item.type !== '1')}
          title={`Khuong's todos`}
          deleteDataToDo={deleteDataToDo}
        />
      </header>
    </div>
  );
}

export default App;
