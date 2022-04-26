import './HeaderBar.css'

export default function HeaderBar() {
    return (
        <div className="headerContainer">
            <div className="fixedElement">
                <div className="loggedInUser">
                    Logged In User: {sessionStorage.getItem("username")}
                </div>
                <div className="title">
                    PAPER TRADE
                </div>
                <div className="links">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </div>
        </div>
        
    )
}