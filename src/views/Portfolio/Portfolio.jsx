import TopSpacer from "../Header/TopSpacer";
import PieChart from "./PieChart";
import Tabs from './Tabs/Tabs'
import './Portfolio.css'
import { useState, useEffect } from "react";
import urlcat from "urlcat";
import { BACKEND } from "../../utils/utils";
import axios from 'axios';

const url = urlcat(BACKEND, "/api/users/loginsuccessful");

export default function Portfolio() {
    const [secret, setSecret] = useState({
        user: "",
        purchaseLog:[]
      });
    const [tickers,setTickers] = useState({});
    const [historicalStockPrices, setHistoricalStockPrices] = useState([])

      const loginSuccessCheck = () => {
        fetch(url, {
          method: "GET",
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
              console.log(response)
            return response.json()
          })
          .then((data) => {
            console.log(data)
            setSecret({ ...secret, user: data.username, purchaseLog: data.purchaseLog })
          })
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
          // retrieve stockholdings data for user
        loginSuccessCheck()
      },[])

      useEffect(()=> {
        // retrieve the tickers held by user
        const internalSetTickers = {}
        for (const stock of secret.purchaseLog) {
            internalSetTickers[stock.ticker] = stock.quantity
        }
        setTickers(internalSetTickers)
      },[secret])

      useEffect(()=> {
          // retrieve historical stock prices for tickers
          const stockPromises = []
          const stockResults = []

          const stockTickerCalls = async () => {
              console.log("tickers",tickers)
            for (const ticker of Object.keys(tickers)) {
                stockPromises.push(
                    axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?apikey=ed422f5ab8a52bef7a04a8d39de5129d`)
                    )
              }
    
              const stockResponses = await Promise.allSettled(stockPromises)
    
              stockResponses.forEach((resp,index) => {
                stockResults.push(resp.value.data)
              })
              console.log("resolved api calls",stockResults)
              setHistoricalStockPrices(stockResults)
            }
          stockTickerCalls()
      },[tickers])

      const retrievePieChartDetails = () => {
          const stocksHeld = tickers
          const historicalPrices = historicalStockPrices
          console.log("STOCKSHELD",stocksHeld)
          console.log("HISTORICAL PRICES",historicalPrices)
/*
          for (const stock of historicalPrices) {
              stock.historicalStockList[0].symbol
          }
*/
      }
      retrievePieChartDetails()

    return (
        <div>
            <TopSpacer/>
            <div className="chart-container">
                <PieChart />
                <Tabs />
            </div>
        </div>
    )
}