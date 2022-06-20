interface IButtonProps {
  label: string
  bgColor?: string
  textColor?: string
  isRounded?: boolean
  onClick?: () => void
}

export default function Button({
  label,
  bgColor = 'bg-white',
  textColor = 'text-nextflix',
  isRounded = true,
  onClick,
}: IButtonProps) {
  return (
    <button
      className={`${textColor} ${bgColor} ${
        isRounded && 'rounded-sm'
      } px-4 py-1`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
