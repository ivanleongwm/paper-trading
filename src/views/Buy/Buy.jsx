import TopSpacer from "../Header/TopSpacer";
import stockHistoricalPrices from "../../model/stockHistoricalPrices"
import BuyStockCard from "./BuyStockCard/BuyStockCard";
import './Buy.css'

export default function Buy() {
    return (
        <div>
            <TopSpacer />
            <div className="buy-container">
                {
                    Object.keys(stockHistoricalPrices).map(function(key, index) {
                        return (<BuyStockCard stockHistoricalPrices={stockHistoricalPrices[key]}/>);
                      })
                }
            </div>
        </div>
    )
}

/*
Object.keys(myObject).map(function(key, index) {
  myObject[key] *= 2;
});


*/