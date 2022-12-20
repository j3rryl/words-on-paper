import { InferGetStaticPropsType } from "next"
interface Post{
    id:any,
    title:string,
    body: string
}
function Posts({post}: InferGetStaticPropsType<typeof getStaticProps>){
return (
    <>
    <h2>{post.id} {post.title}</h2>
    <p>{post.body}</p>
    </>
)
}
export default Posts
export async function getStaticPaths(){
  // return{
  //   paths: [
  //     {
  //       params: {postId: '1'},
  //     },
  //     {
  //       params: {postId: '2'},
  //     },
  //     {
  //       params: {postId: '3'},
  //     },
  //   ],
  //   fallback:false
  // }
  const response  = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await response.json()
  const paths= data.map((post: Post)=>{
    return{
      params:{
        postId:`${post.id}`
      }
    }
  })
  return{
  paths,
  fallback:false
}
}
export async function getStaticProps(context: any){
    const {params} = context
    const response  = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    console.log(data)
    return{
      props:{
        post:data,
      }
    }
    }