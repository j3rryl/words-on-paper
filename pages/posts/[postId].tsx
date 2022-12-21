import { InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
interface Post{
    id:any,
    title:string,
    body: string
}
interface IParams extends ParsedUrlQuery {
  params: string
}
function Posts({post}: InferGetStaticPropsType<typeof getStaticProps>){
  const router = useRouter()
  if(router.isFallback){
    return(
      <h1>Loading...</h1>
    )
  }
return (
    <>
    <h2>{post.id} {post.title}</h2>
    <p>{post.body}</p>
    </>
)
}
export default Posts
export async function getStaticPaths(){
  return{
    paths: [
      {
        params: {postId: '1'},
      },
      {
        params: {postId: '2'},
      },
      {
        params: {postId: '3'},
      },
    ],
    fallback:true //will return 404 page
  }
//   const response  = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const data = await response.json()
//   const paths= data.map((post: Post)=>{
//     return{
//       params:{
//         postId:`${post.id}`
//       }
//     }
//   })
//   return{
//   paths,
//   fallback:false
// }
}
export async function getStaticProps(context: any){
    const {params} = context
    const response  = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    console.log(`Generating page for /posts/${params.postId}`)
    if(!data.id){
      return{
        notFound: true
      }
    }
    return{
      props:{
        post:data,
      }
    }
    }