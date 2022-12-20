import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <Link href='/users'>Users Page</Link>
    </>
  )
}

export default Home
