import logo from './logo.svg';
import './App.css';

import { Header } from "./components/Header"
import { TodoItem } from './components/TodoItems';
import { Button } from './components/Button';
import "./style.css"

function App() {
  return (
    <>
      <div class="container">
        <Header />
        <TodoItem name="Eat"/>
        <TodoItem name="Fat"/>
        <TodoItem name="Cat"/>
        <TodoItem name="bat"/>

        <Button />
      </div>
    </>

  );
}

export default App;
