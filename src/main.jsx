import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayoutPage from './component/LayoutPage/LayoutPage';
import Home from './component/Home/Home';
import Statistic from './component/Statistic/Statistic';
import Blog from './component/Blog/Blog';
import AppliedJob from './component/AppliedJob/AppliedJob';
import JobDetails from './component/JobDetails/JobDetails';
import FourZero from './component/FourZero/FourZero';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage></LayoutPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>
      },
      {
        path: "/applied",
        element: <AppliedJob></AppliedJob>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "jobdetails/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`job-features.json/${params.id}`)
      },
      {
        path: "*",
        element: <FourZero></FourZero>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
