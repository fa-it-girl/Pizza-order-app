import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

const Header = () => {
  return (
    <div>
      <header>
        <Link to='/'>Pizza App</Link>
        <SearchOrder />
      </header>
    </div>
  )
}

export default Header
