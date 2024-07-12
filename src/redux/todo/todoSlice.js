import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, done: false });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find((todo) => todo.id == id);
      if (todo) {
        todo.text = newText;
      }
    },
    markAsDone: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, editTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer;
