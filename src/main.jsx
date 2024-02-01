import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/* existing imports */
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
//import Blog from './Components/blog.jsx';

import ErrorPage from "./error-page";
import Contact from "./routes/contact";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,

  children: [{
    path: "contacts/:contactId",
        element: <Contact />,
  },],  
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
 <RouterProvider router={router} />
</React.StrictMode>
)
