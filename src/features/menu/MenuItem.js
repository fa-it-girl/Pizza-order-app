import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl,} = pizza;
  const dispatch = useDispatch()

  function addCartHandler(){
     console.log(id)
     const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
     }

     dispatch(addItem(newItem))
  }

  return (
    <li className="flex gap-4 py-2 mt-2 mx-4">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''} ` }/>
      <div className="flex flex-col grow">
        <p className="text-left ">{name}</p>
        <p className="text-sm italic capitalize text-left">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className="uppercase text-sm text-stone-500">Sold out</p>}
          {!soldOut && <Button type='small' onClick={addCartHandler}>Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
