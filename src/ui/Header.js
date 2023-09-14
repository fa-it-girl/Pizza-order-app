import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

const Header = () => {
  return (
    <div className='bg-yellow-300 uppercase pt-2'>
      <header className='grid grid-cols-2'>
        <div><Link to='/' className='tracking-[10px]'>Pizza App</Link></div>
        <div><SearchOrder /></div>
      </header>
    </div>
  )
}

export default Header
