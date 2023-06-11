// import './App.css';
import Header from './Comps/Header.js'
import Footer from './Comps/Footer.js'
import Work from './Comps/Work.js'
import Add from './Comps/Add.js'
import { useState } from 'react';
import About from './Comps/About.js';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'

function App() {
  let [count, setCount] = useState(0);
  const Delete = (todo) => {
    set_list(todo_list.filter((e) => {
      return e !== todo;
    }))
  }
  const AddTask = (todo) => {
    if(todo.length) {
      set_list(todo_list)
      let new_task = {
        "sn": count,
        "title":todo,
      }
      set_list([...todo_list, new_task])
      setCount(count+1);
    }
  }
  let [todo_list, set_list] = useState([])

  return (
    <Router>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet"></link>
      <Header/>
      
      <Routes>
        <Route exact path = '/' element = {<>
        <Add AddTask = {AddTask}/>
        <Work tasks={todo_list} Delete = {Delete}/>
        </>}>
        </Route>
        <Route exact path = '/About' element = {<About/>}>
        </Route>
      </Routes>    
      
      <Footer/>
    </Router>
  );
}

export default App;
