import axios from "axios"
import { useState } from "react"

const UserPost = ({ post }) => {

    const [comments, setComments] = useState([])
    const[showPost,setShowPost]=useState(false)

    const url="https://jsonplaceholder.typicode.com/posts/"+ post.id +"/comments";
    console.log(url)

    const onPostHandler = () => {

        axios.get("https://jsonplaceholder.typicode.com/posts/"+ post.id +"/comments")
            .then((response) => {
                const results = response.data;
                setComments(results);
                setShowPost(true)
            })
            console.log(comments)
    }
    const setVisibilityHandler=()=>{
        setShowPost(false)
    }


    return (
        <div>
            <a href="#" onClick={onPostHandler}>
                <div>{post.id}</div>
                <div>{post.title}</div>
                {/* <div>{post.body}</div> */}
            </a>
            <br></br>
            {showPost && 
            <div onClick={setVisibilityHandler}> X
                <ul>
                    <li>
                        {comments.map((item)=>(
                            <div>
                            <div>{item.title}</div>
                            
                            <div>{item.email}</div>
                            </div>
                        ))}
                    </li>
                </ul>
            </div>}
        </div>
    )
}
export default UserPost;