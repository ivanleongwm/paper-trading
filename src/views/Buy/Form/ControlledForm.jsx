import React, { useState } from "react";
import './ControlledForm.css'

function Form(props) {
  //sets the 'default' fields in the form
  const [formData, setFormData] = useState({
    Quantity: 0,
    price: 0,
  });

  //makes input controlled - updates whenever something is typed
  const handleChange = (event) => {
    const name = event.target.name; //refers to input name
    setFormData({ ...formData, [name]: event.target.value, price: event.target.value }); //name is in sq brackets is to refer to variable in this scope (this.name)
    console.log(formData);
  };

  //in onSubmit; passing props to parent through handleSubmit
  return (
    <div className="form-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("clicked");
          return props.handleSubmit(formData);
        }}
      >
        <label>
          Buy Quantity : |  
          <input className="input-quantity"
            name="Quantity"
            placeholder="qty"
            onChange={handleChange}
            type="number"
          />
          |
        </label>
        <div>Total Price: {(formData.price * props.historicalPrices.price).toLocaleString('en', {useGrouping:true})}</div>
      {
          (formData.price * props.historicalPrices.price) < props.userAccountData.Ivan.balance ?
          <input className="buy-button" type="submit" value="Buy" /> :
          <div className="funds-exceeded">Insufficient Funds (Max:{(props.userAccountData.Ivan.balance).toLocaleString('en', {useGrouping:true})})</div>
      }
      </form>
      
      
    </div>
  );
}
export default Form;
