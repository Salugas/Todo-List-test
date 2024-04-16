import cl from "./AddInput.module.scss"
import { FC } from "react"

interface AddInputProps {
  value?: string
  onChange: (value: string) => void
}

const AddInput: FC<AddInputProps> = ({ onChange, value }) => {
  return (
    <form className={cl.wrapper}>
      <input
        type="text"
        placeholder="What needs to be done?"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </form>
  )
}

export default AddInput
