import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import './App.css'
import React from "react";
import {PostLogin} from "./pages/post-login/PostLogin.tsx";
import {PreLogin} from "./pages/pre-login/PreLogin.tsx";
import { Book } from './pages/post-login/book/Book.tsx';
import {Dashboard} from "./pages/post-login/dashboard/Dashboard.tsx";
import { Order } from './pages/post-login/order/Order.tsx';
import {User} from "./pages/post-login/user/User.tsx";
import {Header} from "./component/header/Header.tsx";



const App:React.FC=()=> {
        const route=createBrowserRouter([
            {path:"/",element:<PostLogin/>,children:[
                    {path:"",element:<Dashboard/>},
                    {path:"book",element:<Book/>},
                    {path:"order",element:<Order/>},
                    {path:"user",element:<User/>},
                ]},
            {path:"/pre",element:<PreLogin/>},

        ])
  return (
    <>
        <Header/>
        <RouterProvider router={route} />
    </>
  )
}

export default App
