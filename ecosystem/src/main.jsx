import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Sobre from "./Pages/Sobre_Nos.jsx";
import Login from "./Pages/Login.jsx";
import Cadastro from "./Pages/Cadastro.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home/>},
      {path: "sorenos", element: <Sobre/>},
      {path: "login", element: <Login/>},
      {path: "dashboard", element: <Dashboard/>},
      {path: "cadastro", element: <Cadastro/>},
      {path: "*", element: <PageNotFound/>}

    ]
  
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);