import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/LogIn/Register";
import ProductDetails from "../Pages/Products/ProductDetails";
import Products from "../Pages/Products/Products";
import Shop from "../Pages/Shop/Shop";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminCustomers from "../Pages/Dashboard/AdminCustomers";
import AdminOrders from "../Pages/Dashboard/AdminOrders";
import AddProduct from "../Pages/Dashboard/AddProduct";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => await fetch("https://repli-q-task-server.vercel.app/categories")
            },
            {
                path: '/products/:name',
                element: <Products />,
                loader: async ({ params }) => await fetch(`https://repli-q-task-server.vercel.app/products/${params.name}`)
            },
            {
                path: '/product/:id',
                element: <ProductDetails />,
                loader: async ({ params }) => await fetch(`https://repli-q-task-server.vercel.app/product/${params.id}`)
            },
            {
                path: '/shop',
                element: <Shop />,
                loader: async () => await fetch('https://repli-q-task-server.vercel.app/shop')
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart /></PrivateRoute>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard /></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard',
                        element: <PrivateRoute><AdminCustomers /></PrivateRoute>
                    },
                    {
                        path: '/dashboard/orders',
                        element: <PrivateRoute><AdminOrders /></PrivateRoute>
                    },
                    {
                        path: '/dashboard/addProduct',
                        element: <PrivateRoute><AddProduct /></PrivateRoute>
                    },
                ]
            },
            {
                path: '/logIn',
                element: <LogIn />
            },
            {
                path: '/reg',
                element: <Register />
            },
        ]
    }
]);

export default router;