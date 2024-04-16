import { FC, PropsWithChildren } from "react"
import cl from "./Container.module.scss"

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className={cl.container}>{children}</div>
}

export default Container
