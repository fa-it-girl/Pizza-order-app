import { Link } from "react-router-dom";
function CartOverview() {
  return (
    <div className="bg-stone-600 flex items-center justify-between h-12 pl-2">
      <p className="text-stone-200">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <span className="text-stone-200 pr-2"><Link to='/cart'>Open cart &rarr;</Link></span>
    </div>
  );
}

export default CartOverview;
