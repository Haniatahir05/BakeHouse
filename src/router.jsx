import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import AdminMenu from './AdminMenu.jsx';
import CustomerMenu from './CustomerMenu.jsx';
import RiderMenu from './RiderMenu.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import AddProduct from './components/AddProduct.jsx';
import ManageOrders from './components/ManageOrders.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import ContactUs from './components/ContactUs.jsx';
import CustomizeCake from './components/CustomizeCake.jsx';
import PlaceOrder from './components/PlaceOrder.jsx';
import CustomerPanel from './components/CustomerPanel.jsx';
import RiderLogin from './components/RiderLogin.jsx';
import RiderPanel from './components/RiderPanel.jsx';
import AssignedOrders from './components/AssignedOrders.jsx';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },

  { path: '/admin', element: <AdminMenu /> },
  { path: '/admin-login', element: <><AdminMenu /><AdminLogin /></> },
  { path: '/admin-dashboard', element: <><AdminMenu /><AdminDashboard /></> },
  { path: '/add-product', element: <><AdminMenu /><AddProduct /></> },
  { path: '/manage-orders', element: <><AdminMenu /><ManageOrders /></> },

  { path: '/customer', element: <CustomerMenu /> },
  { path: '/signup', element: <><CustomerMenu /><Register /></> },
  { path: '/login', element: <><CustomerMenu /><Login /></> },
  { path: '/contact', element: <><CustomerMenu /><ContactUs /></> },
  { path: '/customize-cake', element: <><CustomerMenu /><CustomizeCake /></> },
  { path: '/place-order', element: <><CustomerMenu /><PlaceOrder /></> },
  { path: '/customer-panel', element: <><CustomerMenu /><CustomerPanel /></> },

  { path: '/rider', element: <RiderMenu /> },
  { path: '/rider-login', element: <><RiderMenu /><RiderLogin /></> },
  { path: '/rider-dashboard', element: <><RiderMenu /><RiderPanel /></> },
  { path: '/assigned-orders', element: <><RiderMenu /><AssignedOrders /></> },
]);
