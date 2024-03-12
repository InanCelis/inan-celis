import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/App.scss';
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import About from './pages/About';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <App />
  }, 
  {
    path: "/inan-celis",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },

])



const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<RouterProvider router={router} >
  <ScrollRestoration />
</RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

