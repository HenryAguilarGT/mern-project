import { Link } from "react-router-dom";
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form  className="loginForm">
                <label className="loginInput">Email</label>
                <input type="email" placeholder="your email@server.com" />
                <label className="loginInput">Password</label>
                <input type="password" placeholder="Your password" />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton"><Link to="/register">Register</Link></button>
        </div>
    )
}