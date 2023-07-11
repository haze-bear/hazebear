import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Art from './components/art/art'

import reportWebVitals from './reportWebVitals';

import ErrorPage from './components/errorPages/errorPage';

import {
  BrowserRouter
} from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "home",
//         element:  <Home/>,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "projects",
//         element: <Projects />,
//       },
//       {
//         path: "art",
//         element: <Art />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
