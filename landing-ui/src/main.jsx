import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from "./pages/Landing";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SSOCallback from "./pages/SSOCallback";
import React from "react";
import { ClerkProvider } from "@clerk/react";

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
    path: "/signup",
    element: <Signup />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/sso-callback",
    element: <SSOCallback />,
    errorElement: <NotFoundPage />
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      afterSignUpUrl="/signup"
      afterSignInUrl="/"
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)
