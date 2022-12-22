import { useState, useEffect } from "react"

function dashboard() {
    const[isLoad, setLoad]=useState(true)
    const [dashD, setDashD]=useState<any>(null)
    // alternatively useState<null | { message: string }>(null)
    useEffect(()=>{
        async function fetchData() {
            const response=await fetch(`http://localhost:5000/dashboard`)
            const data = await response.json()
            setDashD(data)
            setLoad(false)
        }
        fetchData()
    },[])
    if(isLoad){
        return <h2>Loading...</h2>
    }
  return (
    <div>
        Likes {dashD.likes}
        Follow {dashD.follow}
    </div>
  )
}

export default dashboard