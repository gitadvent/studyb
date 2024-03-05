import { useEffect, useState } from "react"
import UserPost from "./UserPost"
import axios from "axios";

const UserPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const [posts, setPosts] = useState([])
    const [postList, setPostList] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url)
                const jsonData = await response.json();
                console.log(jsonData)
                setPosts(jsonData.results)

                let lists = posts.filter((post) => {
                    return (post.id < 3)
                  //return (post.title.includes("a"))

                })
                // console.log(lists)
                setPostList(lists)
                //console.log(postList)
            }
            catch (err) {
                throw err;
            }

        }

        // axios.get(url)
        // .then((response)=>{
        //     const posts = response.data;
        //     setPosts(posts);

        //    // console.log(posts)

        //     var lists= posts.filter((post)=>{
        //         return (post.id<3)

        //     })
        //     setPostList(lists)
        // })


        // async function fetchData() {
        //     await axios.get(url)
        //         .then((response) => {
        //             const posts = response.data;
        //             setPosts(posts);
        //             console.log(posts)

        //             var lists = posts.filter((post) => {
        //                 return (post.id < 3)

        //             })
        //             setPostList(lists)
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         })
        // }

        fetchData();


    }, [])
    console.log(posts)

    return (
        <div style={{ width: "200px", width: "200px" }}>
            <ul>

                {postList.map((post) => (
                    <li>  <UserPost key={post.id} post={post}></UserPost></li>)
                )}

            </ul>

        </div>
    )
}

export default UserPosts;