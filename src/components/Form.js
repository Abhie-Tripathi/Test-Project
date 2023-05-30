import React, { useContext,useRef } from "react";
import { Context } from "./Context";

const Form = () => {
  const ctx = useContext(Context);
  
  const nameinputref = useRef()
  const descriptioninputref = useRef()
  const priceinputref = useRef()
  const quantityavailableinputref = useRef()


  const additemhandler = (event) =>{
    event.preventDefault()

    const enteredName = nameinputref.current.value
    const enteredDescription = descriptioninputref.current.value
    const enteredPrice  = priceinputref.current.value
    const enteredQuantity = quantityavailableinputref.current.value
    
    ctx.setitems({
        name:enteredName,
        description:enteredDescription,
        price: enteredPrice,
        quantity: enteredQuantity
    })

  } 

  return (
    <form  style={{ marginTop: "23px" }}>
      <label >Medicine Name</label>
      <input type="text" ref={nameinputref} />

      <label >Description</label>
      <input type="text" ref={descriptioninputref}/>

      <label >Price</label>
      <input type="number" ref={priceinputref}/>

      <label >Quantity Available</label>
      <input type="number" ref={quantityavailableinputref}/>

      <button onClick={additemhandler}>Add Item</button>
      <button style={{ marginLeft: "84px" }}>Cart</button>
    </form>
  );
};

export default Form;
