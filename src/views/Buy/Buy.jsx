import TopSpacer from "../Header/TopSpacer";
import stockHistoricalPrices from "../../model/stockHistoricalPrices"

export default function Buy() {
    return (
        <div>
            <TopSpacer />
            <div>{stockHistoricalPrices.AAPL.name}</div>
        </div>
    )
}