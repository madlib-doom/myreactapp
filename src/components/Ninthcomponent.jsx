import { useState } from "react"


const Ninthcomponent = () => {
    let [Number,setNumber]=useState(0)
    let price=30;
  return (
    
    <div>
        <h2>Welcome to my Ninth component</h2>
        <h4>The number is :{Number}</h4>
        <button onClick={()=>{
            setNumber(Number +1)
        }}>+</button>
        <button onClick={()=>{
            setNumber(Number-1)
        }}>-</button>
        <h4>The total prize is: { price*Number}</h4>
    </div>
  )
}

export default Ninthcomponent