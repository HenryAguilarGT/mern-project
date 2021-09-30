import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Sample MERN Based App</span>
                <span className="headerTitleLg">by Henry Belmonte</span>
            </div>
            <img className="headerImg" src="https://henrybelmonte.website/assets/img/mybanner-dark.jpg" alt="" />
        </div>
    )
}
