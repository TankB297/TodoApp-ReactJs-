import { Component } from "react";
import "./FunctionBox.css";

class FunctionBox extends Component {
  render() {
    const { deleteAll, Complete, All, Unfinished } = this.props;
    return (
      <div className="FunctionBox">
        <button className="All" onClick={All}>
          All
        </button>
        <button className="deleteAll" onClick={deleteAll}>
          Clear all
        </button>
        <button className="Complete" onClick={Complete}>
          Complete
        </button>
        <button className="unFinished" onClick={Unfinished}>
          Unfinished
        </button>
      </div>
    );
  }
}
export default FunctionBox;
