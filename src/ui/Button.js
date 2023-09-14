import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, disabled, to, type}) => {
  const base ="bg-yellow-300   rounded tracking-wide mt-5 rounded-full focus:ring-offset-2 focus:ring focus:ring-yellow-300 focus:outline-none "

  const styles = {
    primary: base + 'w-36 px-4 py-2 sm:w-48 uppercase',
    small: base + 'w-28 lowercase px-2 py-2 mr-3 ',
    secondary: 'bg-transparent border-2 border-stone-300 px-4 py-2 rounded-full h-10 items-center text-stone-300 p-auto hover:bg-stone-300 hover:text-stone-700 focus:bg-stone-300  focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2'
  }
  if(to) return <Link className = {styles[type]} to={to}>{children}</Link>

  return (
    <button disabled={disabled}  className={styles[type]}>
    {children}
    </button>
  )
}

export default Button
