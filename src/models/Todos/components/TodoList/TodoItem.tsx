import cl from "./TodoList.module.scss"

import { FC } from "react"
import { ITodo } from "types/ITodo"
import { MdDeleteOutline } from "react-icons/md"

interface TodoItemProps {
  item: ITodo
  state: string | undefined
  removeTodo: (id: string) => void
  toogleTodoComplete: (id: string) => void
  currentComplitedTodo: () => void
  changeTodoType: (state: string | undefined) => void
}

const TodoItem: FC<TodoItemProps> = ({
  currentComplitedTodo,
  toogleTodoComplete,
  changeTodoType,
  removeTodo,
  state,
  item,
}) => {
  const deleteTodo = (id: string) => {
    removeTodo(id)
    changeTodoType(state)
    currentComplitedTodo()
  }

  const toggleTodo = (id: string) => {
    toogleTodoComplete(id)
    currentComplitedTodo()
    changeTodoType(state)
  }

  return (
    <div className={cl.todo}>
      <div>
        <input
          type="checkbox"
          checked={item.complited}
          onChange={() => toggleTodo(item.id)}
        />
        <span
          className={
            !item.complited
              ? `${cl.todo__text}`
              : `${cl.todo__text} ${cl.complited}`
          }
        >
          {item.text}
        </span>
      </div>
      <button className={cl.todo__delete} onClick={() => deleteTodo(item.id)}>
        <MdDeleteOutline size={"2rem"} />
      </button>
    </div>
  )
}

export default TodoItem
