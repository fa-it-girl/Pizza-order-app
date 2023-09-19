import React from 'react'
import Button from '../../ui/Button'
import { Link } from 'react-router-dom'

const OrderNow = () => {
  return (
    <div className='mt-10 uppercase space-x-4'>
       <h1>Thank you. We are processing your order.</h1>
       <Link to='/menu'><Button type='primary' >Go Back</Button></Link>
    </div>
  )
}

export default OrderNow
