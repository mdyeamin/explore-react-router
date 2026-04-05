import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/UserDetails";
import PostDetails from "./components/postDetails/PostDetails";

const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (data) => data.json(),
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "blog", Component: Blog },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "posts",
        element: (
          <Suspense fallback={<p>Loading....</p>}>
            <Posts postsPromise={postsPromise} />
          </Suspense>
        ),
      },
      {
        path: "posts/:id",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        Component: PostDetails,
      },
      {
        path: "users/:userId",
        loader: ({ params }) => {
          return fetch(
            `https://jsonplaceholder.typicode.com/users/${params.userId}`,
          );
        },
        Component: UserDetails,
      },
    ],
  },
  {
    path: "/path-1",
    element: "this is path 1",
  },
  {
    path: "/path-2",
    element: "this is path 2",
  },
  {
    // i want to show a component so what can i do
    path: "/app",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
