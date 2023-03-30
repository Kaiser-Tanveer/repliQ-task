import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/LogIn/Register";
import Products from "../Pages/Products/Products";

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