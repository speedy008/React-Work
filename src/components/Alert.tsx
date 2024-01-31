import { ReactNode } from "react"

interface Props {
  children: ReactNode
  alertType?: string | null,
  onClose: () => void
}
const renderSwitch = (alertType?:string) => {
  switch(alertType) {
    case 'primary':
      return 'primary'
    case 'secondary':
      return 'secondary'
    case 'success':
      return 'success'
    case 'danger':
      return 'danger'
    case 'warning':
      return 'warning'
    default: return 'primary'
  }
}

const Alert = ({children, alertType, onClose}: Props) => {
  return (
    <div className={'alert alert-dismissible alert-'+renderSwitch(alertType!)}>
      {children}
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert