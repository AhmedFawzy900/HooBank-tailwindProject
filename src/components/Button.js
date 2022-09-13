import React from 'react'

const Button = ({styles}) => {
  return (
    <buttom type="button" className={`py-4 px-4 
    bg-blue-gradient outline-none text-black
    font-medium text-[18px] font-poppins hover:opacity-[.8] 
    cursor-pointer rounded-lg ${styles}`}>
       Get Started
    </buttom>
  )
}

export default Button
