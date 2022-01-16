import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
// import Hooks:
import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import Covid from './components/Covid';
import { Countdown, NewCountDown } from './components/Countdown';
import Blog from './components/Blog';
import DetailBlog from './components/DetailBlog';
import AddNewBlog from './components/AddNewBlog';
import NotFound from './components/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

  // bằng với componentDidMount
  useEffect(() => {
    // không nên gọi thằng setState bên trong
    //console.log('>>>> check run use effect');
  }, [address])

  useEffect(() => {
    // không nên gọi thằng setState bên trong
    //console.log('>>>> check run use effect');
  }, [todos])

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


  const onTimesup = () => {
    //alert('times up')
  }

  // re-render
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/timer">
            <Countdown onTimesup={onTimesup} />
            <span>---------------------</span>
            <NewCountDown onTimesup={onTimesup} />

          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title="All Jobs"
              deleteDataToDo={deleteDataToDo}
            />
            <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)} />
            <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
          </Route>

          <Route path="/blog" exact>
            <Blog />
          </Route>

          <Route path="/blog/:id">
            <DetailBlog />
          </Route>

          <Route path='/add-new-blog'>
            <AddNewBlog />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
