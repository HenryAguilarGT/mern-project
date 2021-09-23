import { Link } from "react-router-dom";
import "./topbar.css";

export default function topbar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
            <i className=" topIcon fab fa-facebook"></i>
            <i className=" topIcon fab fa-twitter"></i>
            <i className=" topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/">Home</Link></li>
                    <li className="topListItem"><Link to="/">About</Link></li>
                    <li className="topListItem"><Link to="/">Contact Us</Link></li>
                    <li className="topListItem"><Link to="/write">Write</Link></li>
                    <li className="topListItem">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="profile-thumb" src="https://scontent.fgua3-2.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/73215692_2677198088992077_2330737043388235776_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=XaeN_GncaB4AX_I-Bik&_nc_ht=scontent.fgua3-2.fna&oh=c9b8655840649b8472fe7e9e2de89773&oe=61725D8E" 
                        alt="" />   
                    ) : (
                        <>
                        <Link to="/login">Login</Link>
                        <span>|</span>
                        <Link to="/register">Register</Link>
                        </>
                    )
                }
                
                <i className="topSearchIcon fab fa-searchengin"></i>
            </div>
        </div>
    )
}
