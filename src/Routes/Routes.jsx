/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main/Main"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import Blog from "../pages/Blog"
import Login from "../pages/Login"
import Register from "../pages/Register"
import MyToys from "../pages/MyToys"
import AllToys from "../pages/AllToys"
import AddAToy from "../pages/AddAToy"
import ProtectedRoute from "./ProtectedRoute"
import SingleToy from "../pages/SingleToy"
import UpdateToy from "../pages/UpdateToy"

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            
                {
                    path: '/',
                    element: <Home />,
                    // loader: () => ,
                },
                {
                    path: 'blog',
                    element: <Blog></Blog>
                },
                
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'register',
                    element: <Register></Register>
                },
                {
                    path: 'myToys',
                    element: <ProtectedRoute><MyToys></MyToys></ProtectedRoute>,
                },
                {
                    path: 'allToys',
                    element: <AllToys></AllToys>,
                    loader: () => fetch(`https://xtreme-wheelz-server.vercel.app/allToys/`)
                },
                {
                    path: 'addAToy',
                    element: <ProtectedRoute><AddAToy></AddAToy></ProtectedRoute>
                },
                {
                    path: 'toy/:id',
                    element: <ProtectedRoute><SingleToy></SingleToy></ProtectedRoute>,
                    loader: ({params}) => fetch(`https://xtreme-wheelz-server.vercel.app/toy/${params.id}`)
                },
                {
                    path: 'updateToy/:id',
                    element: <ProtectedRoute><UpdateToy></UpdateToy></ProtectedRoute>,
                    loader: ({params}) => fetch(`https://xtreme-wheelz-server.vercel.app/toy/${params.id}`)
                }

                
            
        ]
    }
])

export default router
