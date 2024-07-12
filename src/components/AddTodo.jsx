import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todo/todoSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddTodo = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
          dispatch(addTodo(text));
          setText('');
        }
      }

  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      /> */}
      <TextField id="outlined-basic" label="Add a new task" size='small' variant="outlined" value={text} onChange={(e) => setText(e.target.value)} />
      {/* <button type="submit">Add</button> */}
      <Button variant="contained" type='submit'>Add</Button>
    </form>
  )
}

export default AddTodo