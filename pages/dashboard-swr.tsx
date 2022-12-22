import useSWR from 'swr'

function dashboardSw() {
    const fetcher = async () =>{
        const response=await fetch(`http://localhost:5000/dashboard`)
        const data = await response.json()
        return data
    }
    const { data, error } = useSWR('dashboard', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  return (
    <div>
        Likes {data.likes}
        Follow {data.follow}
    </div>
  )
}

export default dashboardSw