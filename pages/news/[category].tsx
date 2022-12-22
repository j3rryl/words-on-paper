import { InferGetServerSidePropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
interface Article{
    id:number
    title:string
    category:string
    author:string
}
interface IParams extends ParsedUrlQuery {
    params: string
  }
function NewsByCategory({news, category}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>News by {category}
    {news.map((article:Article)=>{
        return(
            <div key={article.id}>
                
            </div>
        )
    }
    )}
    </div>
  )
}

export default NewsByCategory
export async function getServerSideProps(context: any){
    const {params, req, res, query} = context
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie','name=Jeremy')
    const {category}=params
    const response=await fetch(`http://localhost:5000/news?category=${category}`)
    const data = await response.json()
    return {
        props:{
            news:data,
            category,
        }
    }
}