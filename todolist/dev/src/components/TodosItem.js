import React, { Component } from "react";
import PropTypes from "prop-types";

class TodosItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f5f5f5",
      padding: "10px",
      border: "1px dotted #ccc",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            checked={completed}
          />{" "}
          {title}
          <button
            type="button"
            onClick={this.props.delTodo.bind(this, id)}
            style={btnStyle}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

TodosItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  backgroundColor: "#ff0000",
  color: "#ffffff",
  borderRadius: "50px",
  border: "1px solid #ff0000",
  padding: "4px 8px",
  fontSize: "14px",
  float: "right",
  cursor: "pointer"
};

export default TodosItem;
