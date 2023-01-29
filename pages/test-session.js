import { getSession } from "next-auth/react";

import React from 'react'




const handler =  async(req,res)=>{
    const session = await getSession({req})
    if(!session){
        return res.status(401).json({error: "Unauthenticated user."})
    } else {
        return res.status(200).json({message: "Success", session})
    }
    return(
        <h2>Hello</h2>
    )

}

export default handler