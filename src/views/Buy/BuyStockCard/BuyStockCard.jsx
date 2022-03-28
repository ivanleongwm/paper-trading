import MiniChart from '../MiniChart/MiniChart'
import './BuyStockCard.css'
import Form from '../Form/ControlledForm'
import { useState } from 'react';
import productsArr from '../Form/products';

export default function BuyStockCard ({stockHistoricalPrices}) {

    const [products, setProducts] = useState(productsArr);

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

    return (
        <div className="card-container">
            <div className="text-content">{stockHistoricalPrices.name}</div>
            <div className="text-content">{stockHistoricalPrices.price}</div>
            <div className="text-content">{stockHistoricalPrices.twentyFourHourChange}</div>
            <div className="mini-chart-container">
                <MiniChart historicalPrices={stockHistoricalPrices.historical}/>
            </div>
            <Form handleSubmit={handleSubmit} historicalPrices={stockHistoricalPrices}/>
        </div>
    )
}


