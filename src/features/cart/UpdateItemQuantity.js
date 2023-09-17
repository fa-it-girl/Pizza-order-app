import React from 'react'
import { useDispatch} from 'react-redux'
import { increaseQuantity } from './cartSlice'
import Button from '../../ui/Button'
import { decreaseQuantity } from './cartSlice'


const UpdateItemQuantity = ({pizzaId}) => {
  const dispatch = useDispatch()

  return (
    <div className=' flex items-center gap-1 float-right ml-12 sm:ml-[70%]'>
      <Button type='round' onClick={()=> dispatch(increaseQuantity(pizzaId
        ))}>+</Button>

      <Button type='round' onClick={()=> dispatch(decreaseQuantity(pizzaId
        ))}>-</Button>



    </div>
  )
}

//some features

export default UpdateItemQuantity
