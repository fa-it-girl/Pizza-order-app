import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="mx-4" >
      <div className="float-left">
        {quantity}&times; {name}
      </div >
      <div className="flex items-center justify-between w-[100%] mb-2 ">
        <p className="pt-2 ">{formatCurrency(totalPrice)}</p>

        <Button type='small'>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
