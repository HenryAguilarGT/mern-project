import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form  className="registerForm">
                <label className="registerInput">Username</label>
                <input type="text" placeholder="username" />
                <label className="registerInput">Email</label>
                <input type="email" placeholder="your email@server.com" />
                <label className="registerInput">Password</label>
                <input type="password" placeholder="Your password" />
                <button className="loginButton">Register</button>
            </form>
            <button className="registerRegisterButton">Login</button>
        </div>
    )
}
