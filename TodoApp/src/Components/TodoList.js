import { Component } from "react";
import "./TodoList.css";
import Item from "./Item.js";
import AllCheck from "../Images/allCheck.png";
import FunctionBox from "./FunctionBox.js";
import UpdateCheck from "../Images/updateCheck.png";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      unfinishedItem: [],
      completeItem: [],
      userInput: "",
      todoList: [
        {
          id: 1,
          content: "Wake up at 6.00",
          status: false,
          important: false,
          update: false
        },
        {
          id: 2,
          content: "Go to school",
          status: false,
          important: false,
          update: false
        }
      ]
    };
    this.changeItem = this.changeItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.allCheck = this.allCheck.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.completedItem = this.completedItem.bind(this);
    this.All = this.All.bind(this);
    this.Unfinished = this.Unfinished.bind(this);
    this.starChange = this.starChange.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
  }

  changeItem(id, index) {
    const { todoList } = this.state;
    todoList[index].status = !todoList[index].status;
    this.setState({
      todoList: todoList
    });
  }

  deleteItem(id, index) {
    const { todoList } = this.state;
    todoList.splice(index, 1);
    this.setState({
      todoList: todoList
    });
  }

  onKeyUp(event) {
    let text = event.target.value;
    if (event.keyCode === 13) {
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        userInput: "",
        todoList: [
          {
            id: Math.random(),
            content: text,
            status: false
          },
          ...this.state.todoList
        ]
      });
    } else {
      this.setState({
        userInput: text
      });
    }
  }

  onChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  addNewItem(input) {
    input = input.trim();
    if (input !== "") {
      this.setState({
        userInput: "",
        todoList: [
          {
            id: Math.random(),
            content: input,
            status: false
          },
          ...this.state.todoList
        ]
      });
    }
  }

  allCheck() {
    const { todoList } = this.state;
    todoList.map((item) => (item.status = true));
    this.setState({
      todoList: todoList
    });
  }

  deleteAll() {
    const checkList = this.state.todoList.filter((Element) => !Element.status);
    this.setState({
      todoList: checkList
    });
  }

  completedItem() {
    this.state.completeItem = [];
    this.state.todoList.map((item) => {
      if (item.status) {
        this.state.completeItem.push(item);
      }
    });
    this.setState({
      completeItem: this.state.completeItem
    });
  }

  All() {
    this.setState({
      completeItem: [],
      unfinishedItem: []
    });
  }

  Unfinished() {
    this.state.unfinishedItem = [];
    this.state.todoList.map((item) => {
      if (!item.status) {
        this.state.unfinishedItem.push(item);
      }
    });
    this.setState({
      unfinishedItem: this.state.unfinishedItem,
      completeItem: []
    });
  }

  starChange(indexItem) {
    const { todoList } = this.state;
    todoList[indexItem].important = !todoList[indexItem].important;
    const importItem = todoList[indexItem];
    todoList.splice(indexItem, 1);
    this.setState({
      todoList: [importItem, ...todoList]
    });
  }

  updateItem(id, index) {
    const { todoList } = this.state;
    todoList[index].update = true;
    this.setState({
      userInput: todoList[index].content,
      todoList: todoList
    });
  }

  updateCheck(index, input) {
    const { todoList } = this.state;
    todoList[index].content = input;
    todoList[index].update = false;
    this.setState({
      userInput: "",
      todoList: todoList
    });
  }

  render() {
    return (
      <div className="TodoList">
        <div className="inputValue">
          <img src={AllCheck} alt="allCheck" onClick={() => this.allCheck()} />
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
            placeholder="Type something..."
          />
          {this.state.todoList.map((item, index) => (
            <button
              onClick={() => this.updateCheck(index, this.state.userInput)}
              className={item.update ? "updateCheck" : "empty"}
            >
              <img
                className="imageUpdateCheck"
                src={UpdateCheck}
                alt="updateCheck"
              />
            </button>
          ))}
          <button
            className="addItem"
            onClick={() => this.addNewItem(this.state.userInput)}
          >
            +
          </button>
        </div>
        {this.state.completeItem.length === 0 &&
          this.state.unfinishedItem.length > 0 &&
          this.state.unfinishedItem.map((item, index) => (
            <Item
              Item={item}
              changeItem={() => this.changeItem(item.id, index)}
              deleteItem={() => this.deleteItem(item.id, index)}
            />
          ))}
        {this.state.completeItem.length > 0 &&
          this.state.completeItem.map((item, index) => (
            <Item
              Item={item}
              changeItem={() => this.changeItem(item.id, index)}
              deleteItem={() => this.deleteItem(item.id, index)}
            />
          ))}
        {this.state.unfinishedItem.length === 0 &&
          this.state.completeItem.length === 0 &&
          this.state.todoList.length > 0 &&
          this.state.todoList.map((item, index) => (
            <Item
              Item={item}
              changeItem={() => this.changeItem(item.id, index)}
              deleteItem={() => this.deleteItem(item.id, index)}
              importantCheck={() => this.starChange(index)}
              editItem={() => this.updateItem(item.id, index)}
            />
          ))}
        <FunctionBox
          deleteAll={() => this.deleteAll()}
          Complete={() => this.completedItem()}
          All={() => this.All()}
          Unfinished={() => this.Unfinished()}
        />
      </div>
    );
  }
}
export default TodoList;
