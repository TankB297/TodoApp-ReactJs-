import "./Item.css";
import { Component } from "react";
import uncheck from "../Images/uncheck.png";
import checked from "../Images/checked.png";
import deleteItem2 from "../Images/deleteItem.png";
import edit2 from "../Images/edit.png";
import starUncheck from "../Images/starUncheck.png";
import starChecked from "../Images/starChecked.png";

class Item extends Component {
  render() {
    const {
      Item,
      deleteItem,
      changeItem,
      editItem,
      importantCheck
    } = this.props;
    return (
      <div className="Item">
        <div className="Item-content">
          <img
            className="checkImage"
            src={Item.status ? checked : uncheck}
            alt="uncheck"
            onClick={changeItem}
          />
          <h1 className={Item.status ? "active" : "content"}>{Item.content}</h1>
        </div>
        <div className="Item-button">
          <img
            src={edit2}
            alt="edit"
            className="editingItem"
            onClick={editItem}
          />
          <img
            src={Item.important ? starChecked : starUncheck}
            alt="star"
            className="importantItem"
            onClick={importantCheck}
          />
          <img
            src={deleteItem2}
            alt="delete"
            className="deleteItem"
            onClick={deleteItem}
          />
        </div>
      </div>
    );
  }
}
export default Item;
