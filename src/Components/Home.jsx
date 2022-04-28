import React from 'react'
import { useGlobalContext } from '../Context/Context'
const Home = () => {

    const {text,setText}=useGlobalContext("");

    const changeHandler=(e)=>{
        setText(e.target.value)
    }
  return (
    <div>
        <h1>Home</h1>
        <input value={text} onChange={changeHandler}/></div>
  )
}

export default Home