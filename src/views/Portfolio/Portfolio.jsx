import TopSpacer from "./TopSpacer";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Tabs from './Tabs/Tabs'
import './Portfolio.css'

export default function Portfolio() {
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