import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from "./pages/Landing";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import React from "react";
import DashboardPage from "./pages/Dashboard";
import Practice from "@/component/ui/Practice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/practice",
    element: <Practice />,
    errorElement: <NotFoundPage />
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
