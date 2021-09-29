// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://scontent.fgua3-2.fna.fbcdn.net/v/t1.6435-1/p200x200/73215692_2677198088992077_2330737043388235776_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=XaeN_GncaB4AX_I-Bik&_nc_ht=scontent.fgua3-2.fna&oh=3162132d0f921c0ebf71de175c42bbca&oe=6172C6D5" alt="" />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio erat, elementum eu tincidunt non, 
                pharetra vel est. 
                </p>  
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Profession</li>
                <li className="sidebarListItem">Education</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Life Events</li>
            </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Me</span>
                <div className="sidebarSocial">
                    <i className=" sidebarIcon fab fa-facebook"></i>
                    <i className=" sidebarIcon fab fa-twitter"></i>
                    <i className=" sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
