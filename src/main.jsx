import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { HooksApp } from './HooksApp';
import { MainPage } from './09-useContext/MainPage';

// import './08-useReducer/intro-reducer';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
//   {
//     path: "/main",
//     element: <MainPage />,
//   },

// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
  {/*  <React.StrictMode> */}
  {/* <RouterProvider router={router} /> */}
  <HooksApp />
   {/* <MainPage /> */}
  {/* // </React.StrictMode>, */}
  </BrowserRouter>

)
