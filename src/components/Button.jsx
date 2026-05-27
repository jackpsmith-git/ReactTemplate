export const Button = ({children, className='', id=""}) => {
  return (
    <button className={`bg-blue-500 hover:bg-blue-700 active:bg-blue-800
      text-white font-bold
      py-2 px-4 rounded
      ${className}`}
    id={id}
    >
      {children}  
    </button>
  )
}