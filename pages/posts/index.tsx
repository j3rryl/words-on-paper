import { InferGetStaticPropsType } from "next"

interface Post{
    id:number,
    title:string
}

// const Posts: Post[]=[
//     {
//         "id":2,
//         "title":"sdsd"
//     }
// ]
function PostList({posts}:InferGetStaticPropsType<typeof getStaticProps>){
return (
    <>
    <h1>List of Posts</h1>
    {posts.map((post: Post)=>{
        return (
            <div key={post.id}>
                <h2>{post.id} {post.title}</h2>
                <hr />
            </div>
        )
    })}
    </>
)
}
export default PostList
export async function getStaticProps(){
const response  = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await response.json()
console.log(data)
return{
  props:{
    posts:data.slice(0,3),
  }
}
}