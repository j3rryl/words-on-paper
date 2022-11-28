import React from 'react'
import { useRouter } from 'next/router'

function Review() {
const router = useRouter()
const {blogId, reviewId} = router.query
  return (
    <div>Review {reviewId} for Blog {blogId}</div>
  )
}

export default Review