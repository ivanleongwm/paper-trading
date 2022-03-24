import './FooterButton.css'
export default function FooterButton({buttonData}) {
    return (
        <div className="button">
            <img src={buttonData.icon}></img>
            <div>{buttonData.name}</div>
        </div>
    )
}