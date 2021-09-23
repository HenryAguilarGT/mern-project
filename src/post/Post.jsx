import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Profession</span>
                    <span className="postCat">Education</span>
                </div>
                <span className="postTitle">
                    Lorem Ipsum
                </span>
                
                <span className="postDate">
                    1 hour ago
                </span>
            </div>
            <p className="postDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus 
                atque quos, perferendis illo necessitatibus fuga pariatur ut iure in a cum ab deleniti! 
                Facilis non laudantium sit pariatur voluptas?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus 
                atque quos, perferendis illo necessitatibus fuga pariatur ut iure in a cum ab deleniti! 
                Facilis non laudantium sit pariatur voluptas?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus 
                atque quos, perferendis illo necessitatibus fuga pariatur ut iure in a cum ab deleniti! 
                Facilis non laudantium sit pariatur voluptas?
                </p>
        </div>
    );
}
