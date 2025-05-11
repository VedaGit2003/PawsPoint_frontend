import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ur}) => {
  return (
    <Link>
    <div className='bg-black h-40 w-36 md:h-56 md:w-48 p-1 flex flex-col rounded-md hover:shadow-[0px_6px_32px_0px_#f7fafc] hover:animate-pulse'>
    <img src={ur} className='h-full'></img>
    </div>
    </Link>
  )
}

export default ProductCard