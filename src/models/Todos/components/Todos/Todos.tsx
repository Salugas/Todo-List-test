import cl from "./Todos.module.scss"
import ChangeTodos from "../VariableTodos/VariableTodos"
import TodoLinks from "../TodoLinks/TodoLinks"
import AddTodos from "../AddTodos/AddTodos"
import { Route, Routes } from "react-router-dom"

const Todos = () => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.todos}></div>

      <AddTodos />

      <Routes>
        <Route path="all" element={<ChangeTodos state="all" />} />
        <Route path="active" element={<ChangeTodos state="active" />} />
        <Route path="complited" element={<ChangeTodos state="complited" />} />
      </Routes>

      <TodoLinks />
    </div>
  )
}

export default Todos
