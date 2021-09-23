import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            <h1 className="singlePostTitle">
                Single Post Page!
                <div className="singlePostEdit">
                    <i className="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAutor">Author: <b>Henry Belmonte </b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio erat, 
                    elementum eu tincidunt non, pharetra vel est. Vivamus dui tortor, finibus non molestie vel, 
                    porta et libero. Ut dictum elementum leo sed molestie. Ut maximus eget diam at rhoncus. 
                    Phasellus bibendum, felis nec commodo viverra, enim metus feugiat nunc, et aliquam mi mi et turpis. 
                    Nunc pulvinar mollis accumsan. Nam porta sagittis quam, at aliquam leo mattis id. 
                    Donec interdum ligula egestas massa aliquet rhoncus. Aenean placerat molestie erat sit amet maximus. 
                    Curabitur rutrum nisl est. 
                </p>
            </div>
        </div>
    )
}
