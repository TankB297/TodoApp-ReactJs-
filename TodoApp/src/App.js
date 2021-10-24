import "./styles.css";
import { Component } from "react";
import TodoList from "./Components/TodoList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">TODO APP</h1>
        <TodoList />
      </div>
    );
  }
}
export default App;
