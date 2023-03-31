import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/LogIn/Register";
import ProductDetails from "../Pages/Products/ProductDetails";
import Products from "../Pages/Products/Products";
import Shop from "../Pages/Shop/Shop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => await fetch("http://localhost:5000/categories")
            },
            {
                path: '/products/:name',
                element: <Products />,
                loader: async ({ params }) => await fetch(`http://localhost:5000/products/${params.name}`)
            },
            {
                path: '/product/:id',
                element: <ProductDetails />,
                loader: async ({ params }) => await fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/shop',
                element: <Shop />,
                loader: async () => await fetch('http://localhost:5000/shop')
            },
            {
                path: '/cart',
                element: <Cart />
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