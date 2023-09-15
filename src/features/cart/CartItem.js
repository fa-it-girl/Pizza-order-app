import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import {deleteItem} from '../cart/cartSlice.js'
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { numberofItems } from "../cart/cartSlice.js";
function CartItem({ item }) {

  const { pizzaId, name, quantity, totalPrice} = item;
  const dispatch = useDispatch()


  function deleteItemHandler() {
    dispatch(deleteItem(pizzaId))
  }
  return (
    <li className="mx-4" >
      <div className="float-left">
        {quantity}&times; {name}
      </div >
      <div className="flex items-center justify-between w-[100%] mb-2 ">
        <p className="pt-2 ">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} numberofItems={numberofItems}/>
        <div className="mb-4">
          <Button type='small' onClick={deleteItemHandler} >Delete</Button>
          </div>
      </div>
    </li>
  );
}

export default CartItem;
