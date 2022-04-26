import './HeaderBar.css'

export default function HeaderBar({cashBalance}) {
    return (
        <div className="headerContainer">
            <div className="fixedElement">
                <div className="loggedInUser">
                    <div className="userDetails">
                        Logged In: {sessionStorage.getItem("username")}
                    </div>
                    <div className="userDetails">
                        Cash Balance: {cashBalance}
                    </div>
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