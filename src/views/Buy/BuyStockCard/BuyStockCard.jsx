import MiniChart from '../MiniChart/MiniChart'
import './BuyStockCard.css'

export default function BuyStockCard ({stockHistoricalPrices}) {
    return (
        <div className="card-container">
            <div>{stockHistoricalPrices.name}</div>
            <div>{stockHistoricalPrices.price}</div>
            <div>{stockHistoricalPrices.twentyFourHourChange}</div>
            <div>
                <MiniChart historicalPrices={stockHistoricalPrices.historical}/>
            </div>
        </div>
    )
}