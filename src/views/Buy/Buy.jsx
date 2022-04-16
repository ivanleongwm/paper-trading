import TopSpacer from "../Header/TopSpacer";
import stockHistoricalPrices from "../../model/stockHistoricalPrices"
import userAccountData from "../../model/userAccountData";
import BuyStockCard from "./BuyStockCard/BuyStockCard";
import './Buy.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Buy() {
    const [stock, setStock] = useState({
      })
    
      useEffect(()=> {
        axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/AAPL,AMZN,GOOG,MSFT,NVDA?apikey=ed422f5ab8a52bef7a04a8d39de5129d')
        .then(res => {
          const stockObject = res.data;
          console.log(res.data.historicalStockList[0])
          //console.log(stockObject[0])
          setStock(res.data.historicalStockList[0])
          console.log(stock)
        })
      },[])

    return (
        <div>
            <TopSpacer />
            <div className="buy-container">
                {
                    Object.keys(stock).map(function(key, index) {
                        return (<BuyStockCard stockHistoricalPrices={stock} userAccountData={userAccountData}/>);
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