
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './ui/Home';
import Menu , {loader as MenuLoader}from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {action as formAction} from './features/order/CreateOrder';
import Order, {loader as OrderLoader} from './features/order/Order';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import OrderNow from './features/order/OrderNow';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
        { path: '/', element: <Home />},
        { path: '/menu', element: <Menu /> , loader: MenuLoader},
        { path: '/cart', element: <Cart />},
        { path: '/order/new', element: <CreateOrder />, action: formAction },
        { path: '/order/:orderId', element: <Order />, loader: OrderLoader},
        { path: '/order/success', element: <OrderNow />}
    ]
  },

])
function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
