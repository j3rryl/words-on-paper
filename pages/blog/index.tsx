import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function BlogPage() {
  const router = useRouter()
  const handleMe=()=>{
    console.log('Order placing')
    router.push('/product')
  }
  return (
    <div>
        <h1>BlogPage</h1>
        <Link href='/product'>
            Product
        </Link>
        <button onClick={handleMe}>Place Me</button>
    </div>
  )
}

export default BlogPage