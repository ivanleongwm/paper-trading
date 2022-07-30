import TopSpacer from "../Header/TopSpacer";
import PieChart from "./PieChart";
import Tabs from './Tabs/Tabs'
import './Portfolio.css'
import { useState, useEffect } from "react";
import urlcat from "urlcat";
import { BACKEND } from "../../utils/utils";
import axios from 'axios';
import moment from 'moment'
import fetchData from '../fetch';

export default function Portfolio() {
  
  const [secret, setSecret] = useState({
        username: "",
        purchaseLog:[],
        stockBalance: []
      });
    const [tickers,setTickers] = useState({});
    const [historicalStockPrices, setHistoricalStockPrices] = useState([])
    const [pieChartData,setPieChartData] = useState([])
    const [aggregatedByStocksPastSevenDays,setAggregatedByStocksPastSevenDays] = useState([])
    const [mainLineGraphData,setMainLineGraphData] = useState([])
    const [colours,setColours] = useState({})
    const [coloursState,setColoursState] = useState(['#ADD8E6','#9cacf1','#8dd1e1','#82ca9d','#a4de6c','#d0ed57'])
    
    // First UseEffect call
    useEffect(() => {
      // checks for login success and retrieves data for user
      const url = urlcat(BACKEND, `/api/users/loginsuccessful/${sessionStorage.getItem("username")}`);
      fetchData(url, "GET",undefined,undefined,setSecret)
    },[])

    // Second A UseEffect call
    useEffect(()=>{
      //fetches colors based on username
      const url2 = urlcat(BACKEND, `/api/piechart/colours/${secret.username}`);
      fetchData(url2, "GET",undefined,undefined,setColours)
    },[secret])

    // Second B UseEffect call
    useEffect(()=> {
      // retrieve the tickers held by user
      const internalSetTickers = {}
      for (const stock of secret.stockBalance) {
          internalSetTickers[stock.ticker] = stock.quantity
      }
      setTickers(internalSetTickers)
    },[secret])

    // Third UseEffect call
    useEffect(()=> {
      // set colors state used by pie charts
      setColoursState([colours.colour1,colours.colour2,colours.colour3,colours.colour4,colours.colour5,colours.colour6])
    },[colours])


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

          const pieChartData = []
          

         
          for (let i = 0; i < historicalPrices.length; i++) {
            console.log("PIE CHART VALUE",historicalPrices[i].historical[0].close * stocksHeld[historicalPrices[i].symbol])
            pieChartData.push({
                name: historicalPrices[i].symbol,
                value: (Math.round(historicalPrices[i].historical[0].close * stocksHeld[historicalPrices[i].symbol])),
                fill: coloursState[i]
            })    
          }
          
          setPieChartData(pieChartData)
          console.log("piechart data",pieChartData)
          
      }
     
      const retrieveMainLineChartDetails = () => {
          const purchaseDates = {}
          for (let purchase of secret.purchaseLog) {
              purchaseDates[purchase.ticker] = moment.utc(purchase.date).format('YYYY-MM-DD')
          }
        console.log("moment purchase date",purchaseDates)
        
    
        const pastSevenDays = []
        for (let stock of historicalStockPrices) {
            pastSevenDays.push({
                symbol : stock.symbol,
                historical : stock.historical.slice(0,7)
            })
        }
        console.log("pastSevenDays", pastSevenDays )

        const stocksHeld = tickers
        for (let stock of pastSevenDays) {
            for (let dailyData of stock.historical) {
                dailyData.close = dailyData.close * stocksHeld[stock.symbol]
            }
        }
        console.log("aggregatedPastSevenDays", pastSevenDays)
        const aggregatedByStocksPastSevenDays = pastSevenDays
        setAggregatedByStocksPastSevenDays(aggregatedByStocksPastSevenDays)
    }

        

      useEffect(()=> {
        // calculate pie chart data
        retrievePieChartDetails()
      },[historicalStockPrices,colours])

      useEffect(()=> {
        // calculate pie chart data
        retrieveMainLineChartDetails()
      },[historicalStockPrices])

      useEffect(()=> {
        const aggregatedStocks = []
        if (aggregatedByStocksPastSevenDays.length > 0) {
            for (let i = 0; i < aggregatedByStocksPastSevenDays[0].historical.length; i++) {
                let totalForDay = 0
                for (let x = 0; x < aggregatedByStocksPastSevenDays.length; x++) {
                    totalForDay += aggregatedByStocksPastSevenDays[x].historical[i].close
                }
                aggregatedStocks.push({
                    date: aggregatedByStocksPastSevenDays[0].historical[i].date,
                    close: totalForDay
                })
            }
        console.log("aggregatedFinal",aggregatedStocks)
        }
        setMainLineGraphData(aggregatedStocks.reverse())     
            
      },[aggregatedByStocksPastSevenDays])

      useEffect(()=> {
        if (mainLineGraphData.length > 0) {
            console.log("main line graph data", mainLineGraphData)
        }
       
      },[mainLineGraphData])

    return (
        <div>
            <TopSpacer/>
            <div class="loader" id="loader"></div>
            <div className="chart-container">
                <PieChart pieChartData={pieChartData}/>
                <Tabs mainLineGraphData={mainLineGraphData} individualLineGraphData={aggregatedByStocksPastSevenDays}/>
            </div>
        </div>
    )
}