import React from 'react'
import Register from './screens/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './screens/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/about",
    element: <About />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

// right now we cannot access the variable outside that js file but if we want to access it we will use the REDUX which will store the states
