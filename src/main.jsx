import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProvider from './AuthProvider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
    <AuthProvider>    
      <RouterProvider router={router}></RouterProvider>
</AuthProvider>
</HelmetProvider>
  </React.StrictMode>,
)
