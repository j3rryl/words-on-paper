import { InferGetStaticPropsType } from "next"
import Link from "next/link"

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
                <Link href={`posts/${post.id}`} passHref>
                <h2>{post.id} {post.title}</h2>
                </Link>
                <hr />
            </div>
        )
    })}
    </>
)
}
export default PostList
export async function getStaticProps(){
    console.log('Generating/regenerating')
const response  = await fetch(`http://localhost:5000/posts`)
const data = await response.json()

return{
  props:{
    posts:data.slice(0,3),
  },
  revalidate:20,
}
}