import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node Client</span>
                <span className="headerTitleLg">UjatCare Sample App</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </div>
    )
}
