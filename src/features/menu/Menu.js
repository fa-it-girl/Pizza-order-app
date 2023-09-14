import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menus = useLoaderData()
  // console.log(menu)
  return(
  <ul className="divide-y divide-stone-200">
   {menus.map((pizza)=>( <MenuItem pizza={pizza} key={pizza.id}/>))}
  </ul>
  );
}

 export async function loader(){
 const menu = await getMenu()
 return menu
}

export default Menu;
