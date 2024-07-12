import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, markAsDone } from "../redux/todo/todoSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEdit(!isEdit);
    if (isEdit) {
      dispatch(editTodo({ id: todo.id, newText }));
    }
  };

  return (
    <div className="todo-item">
      <div className="todo-text">
        <ul>
          <li >
            {isEdit ? (
             
              <TextField
                id="outlined-basic"
                label="Edit task"
                size="small"
                variant="outlined"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
            ) : (
              <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>{todo.text}</span>
            )}
            &nbsp; &nbsp;
            <Button variant="contained" onClick={handleEdit}>
              {isEdit ? "Save" : "Edit"}{" "}
            </Button>
            &nbsp;
            
            <Button
              variant="contained"
              color="success"
              onClick={() => dispatch(markAsDone(todo.id))}
            >
              {todo.done ? "Undo" : "Done"}
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="error"
              onClick={() => dispatch(deleteTodo(todo.id))}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </li>
        </ul>
        </div>
        </div>
  );
};

export default TodoItem;
