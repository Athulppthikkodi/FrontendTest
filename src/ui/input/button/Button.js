import React from 'react'

const Button = ({text, ...props}) => {
  return (
    <button {...props}>{text}</button>
  )
}

export default Button