import TodoItem from "./TodoItem"
import { useAppSelector } from "hooks/redux"
import { useActions } from "hooks/useActions"
import { FC, useEffect } from "react"
import { useLocation } from "react-router-dom"

interface TodoListProps {
  state: "all" | "active" | "complited"
}

const TodoList: FC<TodoListProps> = ({ state }) => {
  const {
    removeTodo,
    toogleTodoComplete,
    currentComplitedTodo,
    changeTodoType,
  } = useActions()
  const { modifiedTodo: todo } = useAppSelector((state) => state.TodosReducer)

  const location = useLocation()

  useEffect(() => {
    changeTodoType(state)
  }, [location.pathname])

  return (
    <div>
      {todo.map((item) => (
        <>
          <TodoItem
            currentComplitedTodo={currentComplitedTodo}
            toogleTodoComplete={toogleTodoComplete}
            changeTodoType={changeTodoType}
            removeTodo={removeTodo}
            key={item.id}
            state={location.pathname}
            item={item}
          />
        </>
      ))}
    </div>
  )
}

export default TodoList
