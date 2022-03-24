import './FooterBar.css'
import FooterButton from './FooterButton'
import portfolio from './Icons/portfolio.png'

const buttons = [
    {
        name: 'Portfolio',
        icon: portfolio,
    }
]

export default function FooterBar() {
    return (
        <div className="footerFixedElement">
            <FooterButton buttonData={buttons[0]}/>
        </div>
    )
}