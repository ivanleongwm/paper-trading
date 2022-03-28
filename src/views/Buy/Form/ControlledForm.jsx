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
        <input type="submit" value="Buy" />
        <label>
          Quantity:
          <input className="input-quantity"
            name="Quantity"
            placeholder="qty"
            onChange={handleChange}
            type="number"
          />
        </label>
      </form>
      <div>Price: {(formData.price * props.historicalPrices.price).toLocaleString('en', {useGrouping:true})}</div>
    </div>
  );
}
export default Form;
