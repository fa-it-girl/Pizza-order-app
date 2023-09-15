import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { numberofItems, totalPriceofItems } from "./cartSlice";

function CartOverview() {
const x = useSelector(numberofItems);
const y = useSelector(totalPriceofItems)

if (!x) return null

  return (
    <div className="bg-stone-600 flex items-center justify-between h-12 pl-2">
      <p className="text-stone-200">
        <span>{x} pizzas</span>
        <span> € {y} </span>
      </p>
      <span className="text-stone-200 pr-2"><Link to='/cart'>Open cart &rarr;</Link></span>
    </div>
  );
}

export default CartOverview;
