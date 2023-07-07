interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="rounded bg-purple-500 px-4 py-2 font-bold text-white transition duration-200 hover:bg-purple-700">
      {text}
    </button>
  )
}

export default Button
