import { useContext, useEffect,useState } from "react";
import { ItemsStore } from "../../strore/item.strore";

const TodoInput = () =>{
  const  {inputHandler,editedData}  =useContext(ItemsStore)
    const [input,setInput]= useState(null)

    // asadsadasd
console.log(editedData);

useEffect(()=>{
    setInput(editedData)
},[editedData])



      
    const getData = (e) =>{
            setInput(e.target.value)

        }

    function sendData(e){
        e.preventDefault()
        if(input){
            inputHandler(input)
            setInput('')
            
        }
        
    }
    return(
<>
<form onSubmit={(e)=>sendData(e)}>
<div className="input-group mb-3">
                <input type="text" className="form-control" value={input} placeholder="Please enter a item" onChange={(e)=>getData(e)} />

                <button type="submit" className="btn btn-secondary"  id="button-addon2" >Add item</button>
              
              </div>
              </form>
</>
    )
}

export default TodoInput;