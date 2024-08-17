import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center p-2'>
      <img className='' src="https://logos-download.com/wp-content/uploads/2016/11/IMDb_logo_logotype.png" alt="imdb-logo" style={{width:"5%"}} />
      <Link className='text-blue-500 text-lg subpixel-antialiased' to="/">Movies</Link>
      <Link className='text-blue-500 text-lg subpixel-antialiased' to="/watchlist">Watch List</Link>
    </div>
  )
}

export default Navbar