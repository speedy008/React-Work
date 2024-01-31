import { ReactNode } from "react"

interface buttonProps {
    children: string,
    onClick: () => ReactNode
}

const Button = ({children, onClick}: buttonProps) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>{children}</button>
  )
}

export default Button