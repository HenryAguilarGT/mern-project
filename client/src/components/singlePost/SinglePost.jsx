import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
    const location = useLocation();
    // console.log(location)
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data)
        };
        getPost()
    }, [path]);

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo &&
                    <img className="singlePostImg" 
                        src={post.photo}
                        alt="" 
                    />
                }
                
            <h1 className="singlePostTitle">
                {post.title}
                <div className="singlePostEdit">
                    <i className="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAutor"><Link>Author: <b>{post.username} </b></Link></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post.description}
                </p>
            </div>
        </div>
    )
}
