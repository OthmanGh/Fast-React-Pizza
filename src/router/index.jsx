import { createBrowserRouter } from 'react-router-dom';

import Home from '../ui/Home';
import Menu from '../features/menu/Menu';
import Cart from '../features/cart/Cart';
import Order from '../features/order/Order';
import CreateOrder from '../features/order/CreateOrder';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/menu',
    element: <Menu />,
  },

  {
    path: '/cart',
    element: <Cart />,
  },

  {
    path: '/order/:orderId',
    element: <Order />,
  },

  {
    path: '/order/new',
    element: <CreateOrder />,
  },
]);