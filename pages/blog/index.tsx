import React from 'react'
import Link from 'next/link'

function BlogPage() {
  return (
    <div>
        <h1>BlogPage</h1>
        <Link href='/product'>
            Product
        </Link>
    </div>
  )
}

export default BlogPage