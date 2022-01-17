type ActionIconClassName = 'fa-arrow-up' | 'fa-arrow-down' | 'fa-times'

interface ActionButtonProps {
  onClick: () => void
  iconClassName: ActionIconClassName
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  iconClassName,
}) => {
  return (
    <button className="button is-primary is-small" onClick={onClick}>
      <span className="icon">
        <i className={`fas ${iconClassName}`}></i>
      </span>
    </button>
  )
}
