import React from 'react'
import { useGlobalContext } from '../Context/Context'
const Card = () => {

    const {text}=useGlobalContext();

  return (
      <>
      <h1>Card</h1>
    <div>{text}</div>
    </>
  )
}

export default Card