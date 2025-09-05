import { useState } from "react"


const Seventhcomponent = () => {
    // below we initialize our hooks

    const[number,setNumber]=useState(10);
    const[weight,setWeight]=useState(60);

  return (
    <div>
  
  
  <h1>Welcome to my seventh component</h1>
  <h3>The number is: {number}</h3>
  <button
  onClick={()=>{
    setNumber(50)
  }}
  >Click to change the number</button>

  <h3>The weight is: {weight}</h3>
  <button
  onClick={()=>{
    setWeight(85)
    
  }}>Click to change weight</button>
  </div>
  )
}

export default Seventhcomponent