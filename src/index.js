import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "header",
        element: <Header />,
      },
      {
        path: "nav",
        element: <Nav />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "post",
        element: <NewPost />,
      },
      {
        path: "post/:id",
        element: <PostPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "footer",
        element: <Footer />,
      },
    ],
  },
  {
    path: "*",
    element: <Missing />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
