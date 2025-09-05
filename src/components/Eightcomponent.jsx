import { useState } from "react"


const Eightcomponent = () => {
    const[car,setCar]=useState("Alfa")
    const[engine,setEngine]=useState("2.5L")
    const[model,setModel]=useState("Romeo")
  return (
    <div>
        <h1>My cars</h1>
        <h3>My cars is {car} and it has a {engine} and the model is {model}.</h3>
        <button
        onClick={()=>{
            setCar("Lamborghini")
            setEngine('3.0L')
            setModel("Avedantor")
        }}>Click !</button>
        </div>
  )
}

export default Eightcomponent