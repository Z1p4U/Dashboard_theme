import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

  return (
    <div style={{ backgroundColor: '#f7f9fc'}}>
        <Link to={'/'}>
            <button className="px-5 py-2 text-xs rounded  absolute top-16 right-10 inline-flex bg-sky-500 text-white opacity-75">Return to Website</button>
        </Link>
        <img className=' h-screen mx-auto absolute left-60 top-auto' src={'/404.svg'} alt="" />
    </div>
  )
}

export default NotFound