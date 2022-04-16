import MiniChart from '../MiniChart/MiniChart'
import './BuyStockCard.css'
import Form from '../Form/ControlledForm'
import { useState } from 'react';
import productsArr from '../Form/products';

export default function BuyStockCard ({stockHistoricalPrices, userAccountData}) {

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
            <div className="text-content">{stockHistoricalPrices.symbol}</div>
            <div className="text-content">{stockHistoricalPrices.historical[0].close}</div>
            <div className="text-content">{stockHistoricalPrices.historical[0].change}</div>
            <div className="mini-chart-container">
                <MiniChart historicalPrices={stockHistoricalPrices.historical.slice(0,10)}/>
            </div>
            <Form handleSubmit={handleSubmit} historicalPrices={stockHistoricalPrices} userAccountData={userAccountData} />
        </div>
    )
}


//<div className="text-content">{stockHistoricalPrices.price}</div>
//<div className="text-content">{stockHistoricalPrices.twentyFourHourChange}</div>

