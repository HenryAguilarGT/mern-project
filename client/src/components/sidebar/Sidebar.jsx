import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://scontent.fgua3-2.fna.fbcdn.net/v/t1.6435-1/p200x200/73215692_2677198088992077_2330737043388235776_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=HdBu9Cpt5_QAX_0UkC8&_nc_ht=scontent.fgua3-2.fna&oh=0e706cc371a39587961c1ed329a63d12&oe=617AAFD5"
          alt=""
        />
        <p>
          I'm Henry Belmonte, web development enthusiast, I have been in almost every position of a web agency, 
          product modeling, account executive, front-end designer, backend developer, server administrator and lastly
          IT team dev leader at Danish Modern LA for over 6 years.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow me</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
