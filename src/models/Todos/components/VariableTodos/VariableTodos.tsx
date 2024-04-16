import TodoList from "../TodoList/TodoList"

import { FC } from "react"

interface VariableTodosProps {
  state: "all" | "active" | "complited"
}

const VariableTodos: FC<VariableTodosProps> = ({ state }) => {
  return <TodoList state={state} />
}

export default VariableTodos
