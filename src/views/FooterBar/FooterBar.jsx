import './FooterBar.css'
import FooterButton from './FooterButton'
import portfolio from './Icons/portfolio.png'
import buy from './Icons/buy.png'
import sell from './Icons/sell.png'
import piechart from './Icons/piechart.png'

const buttons = [
    {
        name: 'Portfolio',
        icon: portfolio,
        link: '/',
    },
    {
        name: 'Buy',
        icon: buy,
        link: '/buy'
    },
    {
        name: 'Sell',
        icon: sell,
        link: '/sell'
    },
    {
        name: 'Pie Chart',
        icon: piechart,
        link: '/piechart'
    }
]

export default function FooterBar() {
    return (
        <div className="footerFixedElement">
            <div className="button-container">
                {
                    buttons.map(
                        element => {
                            return <FooterButton buttonData={element}/>
                        }
                    )
                }
            </div>
        </div>
    )
}