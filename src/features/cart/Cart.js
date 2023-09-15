import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';
// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const dispatch = useDispatch()
  const name = useSelector(state=> state.user.userName)
  const cart = useSelector(state=> state.cart.cart)

  if (cart.length ===0 ) return  <EmptyCart />
  return (
    <div className="mt-7 ">

          <Link to="/menu" className='float-left text-sm text-blue-400 hover:text-blue-600  px-2'>&larr; Back to menu</Link>
         <div className='pt-8'>
            <h2 >Your cart, {name}</h2>
            <ul className='divide-y divide-stone-200 border-b mt-4'>
               {cart.map(item => <CartItem  key={item.key} item ={item}/>) }
            </ul>
         </div>

      <div className='mt-6 space-x-2'>
        <Button to="/order/new" type='primary'>Order pizzas</Button>
        <Button type='secondary' onClick={()=>dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
