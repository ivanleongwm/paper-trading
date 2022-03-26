import TopSpacer from "./TopSpacer";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import './Portfolio.css'

export default function Portfolio() {
    return (
        <div>
            <TopSpacer/>
            <div className="chart-container">
                <PieChart />
                <LineChart />
            </div>
        </div>
    )
}
//<MixedChart />