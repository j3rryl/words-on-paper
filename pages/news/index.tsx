import { InferGetStaticPropsType } from "next"
import { getStaticPaths } from "../posts/[postId]"
interface Newss{
    id: number,
    title: string
    author: string
}
function NewsPostList({news}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <>
    {news.map((newss:Newss)=>{
    return (
        <div key={newss.id}>
        <h4>{newss.title}</h4>
        <h5>{newss.author}</h5>
        </div>
        
    )}
    )}
    </>
  )
}

export default NewsPostList
export async function getServerSideProps() {
    const res = await fetch(`http://localhost:5000/news`)
    const data = await res.json()
    return {
        props:{
            news:data,
        }
    }
    
}

// export async function getStaticProps() {
//     const res = await fetch(`http://localhost:5000/news`)
//     const data = await res.json()
//     return {
//         props:{
//             news:data,
//         }
//     }
    
// }