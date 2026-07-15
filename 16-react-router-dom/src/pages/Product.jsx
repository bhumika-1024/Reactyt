import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div >
        <div className='flex items-center justify-evenly'>
          <Link className='text-lg font-medium' to='/product/men'>Men's Collection</Link>
        <Link className='text-lg font-medium' to='/product/women'>Women's Collection</Link>
        </div>

        <Outlet />
    </div>
  )
}

export default Product