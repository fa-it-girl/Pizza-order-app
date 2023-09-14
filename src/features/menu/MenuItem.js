import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl,} = pizza;

  return (
    <li className="flex gap-4 py-2 mt-2 mx-4">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''} ` }/>
      <div className="flex flex-col grow">
        <p className="text-left ">{name}</p>
        <p className="text-sm italic capitalize text-left">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className="uppercase text-sm text-stone-500">Sold out</p>}
          <Button type='small' >Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
