import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./Home.jsx";
import { createBrowserRouter } from 'react-router';
import Layout from "./Layout/Layout.jsx";
import { RouterProvider } from 'react-router/dom';
import App from "./Pages/App.jsx";
import AppDetails from './Pages/Details.jsx';
import NotFound from "./Pages/Error.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "app",
        element: <App/>
      },
      {
        path: "app/:id",
        element: <AppDetails/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
