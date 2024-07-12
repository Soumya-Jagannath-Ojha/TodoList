import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';
const Todo = () => {

    const todos = useSelector((state) => state.todos);

  return (
    <div>
        <div>
            { todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    </div>
  )
}

export default Todo