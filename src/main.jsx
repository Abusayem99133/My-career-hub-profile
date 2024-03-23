import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Jobs from "./Components/Jobs/Jobs.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json"), // only load the data you need. do  not load all the data.
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>, // do not load all data load only what you need
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
