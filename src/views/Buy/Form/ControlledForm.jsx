import React, { useState } from "react";
import './ControlledForm.css'
import urlcat from "urlcat";
import { BACKEND } from "../../../utils/utils";

const url = urlcat(BACKEND, "/api/users/register");

function Form(props) {
  const [error, setError] = useState("");
  const [date, setCurrentDate] = useState("2022-04-22");
  const [purchasePrice, setPurchasePrice] = useState(2.23);
  const [quantity, setQuantity] = useState(12);
  const [username, setUsername] = useState("Joy Kwok");
  const [ticker,setTicker] = useState("AAPL");
  // create a function that makes a post request when the buy button is clicked
  const buyStock = (stockDetails) => {
    fetch(url, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stockDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted!")
    const stockDetails = { username, date, ticker, quantity, purchasePrice };
    buyStock(stockDetails);
  };

  // with the current date, today's price and quantity, username

  // might need to store current state of logged in user on the superparent level


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

  console.log(props.historicalPrices)
  //in onSubmit; passing props to parent through handleSubmit
  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
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
        <div>Total Price: {(formData.price * props.historicalPrices.historical[0].close).toLocaleString('en', {useGrouping:true})}</div>
      {
          (formData.price * props.historicalPrices.historical[0].close) < props.userAccountData.Ivan.balance ?
          <input className="buy-button" type="submit" value="Buy" /> :
          <div className="funds-exceeded">Insufficient Funds (Max:{(props.userAccountData.Ivan.balance).toLocaleString('en', {useGrouping:true})})</div>
      }
        <p>{error}</p>
      </form>
    </div>
  );
}
export default Form;
