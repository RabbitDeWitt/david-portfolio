import { ButtonProps } from "@/types"

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`py-4 px-7 font-medium text-white flex items-center justify-center rounded-lg bg-sky-700 hover:bg-sky-600 transition-all duration-300 ${className}`}>
      {children}
    </button>
  )
}

export default Button