import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Body from"./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./Components/About";
import Services from "./Components/Services";
import Error from "./Components/Error";
import RestaurantMenu from "./RestaurantMenu";



const AppLayout = ()=>{
    return(
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
            
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children: [
            {
                path:"/",
                element:<Body />,

            },
            {
                path:"/about",
                element:<About />,
        
            },
            {
                path:"/services",
                element:<Services />,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            }

        ],
        errorElement:<Error />,

    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
