import React from 'react'
import { useRouter } from 'next/router'

function BlogId() {
  const router = useRouter()
  const blogId = router.query.blogId             
  return (
    <div>Details About blog {blogId}</div>
  )
}

export default BlogId