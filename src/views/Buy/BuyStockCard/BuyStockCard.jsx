import MiniChart from '../MiniChart/MiniChart'
import './BuyStockCard.css'

export default function BuyStockCard ({stockHistoricalPrices}) {
    return (
        <div className="card-container">
            <div className="text-content">{stockHistoricalPrices.name}</div>
            <div className="text-content">{stockHistoricalPrices.price}</div>
            <div className="text-content">{stockHistoricalPrices.twentyFourHourChange}</div>
            <div className="mini-chart-container">
                <MiniChart historicalPrices={stockHistoricalPrices.historical}/>
            </div>
        </div>
    )
}