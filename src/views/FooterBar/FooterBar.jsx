import './FooterBar.css'
import FooterButton from './FooterButton'
import portfolio from './Icons/portfolio.png'
import buy from './Icons/buy.png'
import sell from './Icons/sell.png'

const buttons = [
    {
        name: 'Portfolio',
        icon: portfolio,
    },
    {
        name: 'Buy',
        icon: buy
    },
    {
        name: 'Sell',
        icon: sell
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