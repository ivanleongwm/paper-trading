import MiniChart from '../MiniChart/MiniChart'
import './SellStockCard.css'
import Form from '../Form/ControlledForm'
import { useState } from 'react';
import productsArr from '../Form/products';

export default function BuyStockCard ({stockHistoricalPrices, userAccountData,  secret,  setSecret, username }) {

    const [products, setProducts] = useState(productsArr);
    let quantityHeld = 0

    const handleSubmit = (productName,productPrice,productDescription) => {
        setProducts([
          {
            name: productName,
            price: productPrice,
            description: productDescription,
          },
          ...products
        ])
      }
      
console.log("SELLSTOCKCARD WHAT ",secret)
      for (let stock of secret.stockBalance) {
        if (stock.ticker == stockHistoricalPrices.symbol) {
          quantityHeld = stock.quantity
        } else {
          quantityHeld = 0;
        }
      }

    return (
        <div className="card-container">
            <div className="text-content">{stockHistoricalPrices.symbol}</div>
            <div className="text-content">{stockHistoricalPrices.historical[0].close}</div>
            <div className="text-content">{quantityHeld}</div>
            <div className="mini-chart-container">
                <MiniChart historicalPrices={stockHistoricalPrices.historical.slice(0,20)}/>
            </div>
            <Form handleSubmit={handleSubmit} historicalPrices={stockHistoricalPrices} userAccountData={userAccountData} secret={secret}/>
        </div>
    )
}


//<div className="text-content">{stockHistoricalPrices.price}</div>
//<div className="text-content">{stockHistoricalPrices.twentyFourHourChange}</div>

