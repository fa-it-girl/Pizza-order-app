import React from 'react'
import Button from '../../ui/Button'
import { useNavigate } from 'react-router-dom'

const EmptyCart = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-10'>
      <Button type='primary' onClick={()=> navigate('/menu')} >Back to menu</Button>
      <h1 className='mt-10'>Your cart is still empty. Add items to your cart</h1>
    </div>
  )
}

export default EmptyCart
