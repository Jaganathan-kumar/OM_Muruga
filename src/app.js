import React, { lazy,Suspense } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Body from"./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./Components/About";
import Services from "./Components/Services";
import Error from "./Components/Error";
import RestaurantMenu from "./RestaurantMenu";
import Shimmer from "./Components/Shimmer";
// import Grocery from "./Components/Grocery";



const AppLayout = ()=>{
    return(
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
            
        </div>
    )
};

const Grocery = lazy(()=>import("./Components/Grocery"));

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
                path:"/grocery",
                element:<Suspense fallback= {<Shimmer />}><Grocery /> </Suspense>,
        
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
