import Link from 'next/link'
import React from 'react'

function Product() {
  return (
    <div>
        <h1>Product</h1>
        <Link href='/blog'>
        Blog
        </Link>

        {/* Go to home instead of previous page lets say blogs list */}
        <Link href='/blog' replace> 
        Blog
        </Link>
        </div>
  )
}

export default Product