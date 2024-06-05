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
import EsqueceuSenha from "./Pages/EsqueceuSenha.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home/>},
      {path: "sobrenos", element: <Sobre/>},
      {path: "login", element: <Login/>},
      {path: "dashboard", element: <Dashboard/>},
      {path: "cadastro", element: <Cadastro/>},
      {path: "esqueceusenha", element: <EsqueceuSenha/>},
      {path: "*", element: <PageNotFound/>}

    ]
  
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);