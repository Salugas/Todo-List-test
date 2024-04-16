import { useActions } from "hooks/useActions"
import cl from "./TodoLinks.module.scss"
import { NavLink } from "react-router-dom"
import { useAppSelector } from "hooks/redux"
import { links } from "./data/links"

const TodoLinks = () => {
  const { clearTodoList, currentComplitedTodo } = useActions()
  const { coplitedTodo } = useAppSelector((state) => state.TodosReducer)

  const clearTodo = () => {
    clearTodoList()
    currentComplitedTodo()
  }

  return (
    <div className={cl.wrapper}>
      <div className={cl.links}>
        <span>{coplitedTodo + " items left"}</span>
      </div>
      <div className={cl.links}>
        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? `  ${cl.active}` : `${cl.disable}`
            }
          >
            <span>{item.path}</span>
          </NavLink>
        ))}
      </div>
      <div className={cl.links} onClick={() => clearTodo()}>
        <button>{"Clear complited"}</button>
      </div>
    </div>
  )
}

export default TodoLinks
