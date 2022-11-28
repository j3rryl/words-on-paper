import React from 'react'
import { useRouter } from 'next/router'

function Doc() {
    const router = useRouter()
    const {params = []} = router.query //runtime error stuffhence the bracket
    console.log(params)
    if(params.length===2){
        return(
            <h1>Viewing docs for feature {params[0]} and concept {params[1]}</h1>
        )
    } else if(params.length===1){
        return(
            <h1>Viewing docs for feature {params[0]}</h1>
        )
    }
  return (
    <div>Docs Home Page</div>
  )
}

export default Doc