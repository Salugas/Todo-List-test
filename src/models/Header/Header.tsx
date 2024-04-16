import Container from "components/Container/Container"
import cl from "./Header.module.scss"

const Header = () => {
  return (
    <div className={cl.wrapper}>
      <span>{"todos"}</span>
    </div>
  )
}

export default Header
