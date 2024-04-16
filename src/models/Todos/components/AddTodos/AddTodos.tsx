import cl from "./AddTodos.module.scss"
import AddInput from "../UI/AddInput"
import { useState } from "react"
import { useActions } from "hooks/useActions"
import { CiSquarePlus } from "react-icons/ci"
import { useLocation } from "react-router-dom"

const AddTodos = () => {
  const [value, setValue] = useState<string>("")
  const { addTodo, changeTodoType } = useActions()

  const [state, setState] = useState<string | undefined>()

  const location = useLocation()

  const onChange = (value: string) => {
    setValue(value)
  }

  const addTodoList = (value: string) => {
    addTodo(value)
    setValue("")
    setState(location.pathname)
    changeTodoType(state)
  }

  return (
    <div className={cl.wrapper}>
      <AddInput value={value} onChange={onChange} />

      <button onClick={() => addTodoList(value)} className={cl.icons}>
        <CiSquarePlus size={"3rem"} />
      </button>
    </div>
  )
}

export default AddTodos
