import { InferGetServerSidePropsType } from "next"
import { useRouter } from "next/router"
import { ReactElement, useState } from "react"
import Header from "./components/header"

function EventList({news}: InferGetServerSidePropsType<typeof getServerSideProps>){
    const [events, setEvents] = useState(news)
    const router = useRouter()
    const filterThis= async () =>{
        const response=await fetch(`http://localhost:5000/news?category=sports`)
    const data = await response.json()
    setEvents(data)
    router.push('events?category=politics', undefined, {shallow:true})
    }
    return (
        <>
        <button onClick={filterThis}>Sports</button>
        {events.map((newss: any)=>{
            return(
            <div key={newss.id}>
                {newss.title}
                <br />
                {newss.author}
                <hr />
            </div>
            )
        })}
        </>
    )

}
export default EventList
EventList.getLayout = function PageLayout(page: ReactElement){
    return (
        <>
        <Header/>
        {page}
        </>
    )
}
export async function getServerSideProps(context: any){
    const {query} = context
    const {category} = query
    const queryString = category ? 'category=sports': ''
    const response=await fetch(`http://localhost:5000/news?${queryString}`)
    const data = await response.json()
    return {
        props: {
            news: data,
        }
    }
}