import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
    return (
        <div className="post">
            {post.photo && (
                <img
                className="postImg"
                src={post.photo}
                alt=""
                />
            )}
            <img className="postImg" src="" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        {post.categories.map((c) => (
                            <span className="postCat">{c.name}</span>
                    ))}
                    </span>
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className="postDescription">
                {post.description}
            </p>
        </div>
    );
}
