import { InferGetStaticPropsType } from "next"
import { Context } from "vm"
interface Post{
    id:number,
    title:string,
    body: string
}

function Posts(post: InferGetStaticPropsType<typeof getStaticProps>){
return (
    <>
    <h2>{post.id} {post.title}</h2>
    <p>{post.body}</p>
    </>
)
}
export default Posts
export async function getStaticProps(){
    // const {params} = context
    const response  = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    const data = await response.json()
    console.log(data)
    return{
      props:{
        post:data,
      }
    }
    }