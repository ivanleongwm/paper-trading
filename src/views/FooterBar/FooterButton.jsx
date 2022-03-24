import './FooterButton.css'
export default function FooterButton({buttonData}) {
    return (
        <>
            <img src={buttonData.icon}></img>
            <div>{buttonData.name}</div>
        </>
    )
}