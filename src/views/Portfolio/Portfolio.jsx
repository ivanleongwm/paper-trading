import TopSpacer from "../Header/TopSpacer";
import PieChart from "./PieChart";
import Tabs from './Tabs/Tabs'
import './Portfolio.css'
import { useState, useEffect } from "react";
import urlcat from "urlcat";
import { BACKEND } from "../../utils/utils";

const url = urlcat(BACKEND, "/api/users/loginsuccessful");

export default function Portfolio() {
    const [secret, setSecret] = useState({
        user: "",
        purchaseLog:[]
      });
    const tickers = [];

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
        for (const stock of secret.purchaseLog) {
          tickers.push(stock.ticker)
        }
        console.log(tickers)
        console.log("second secret",secret)
      },[secret])

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