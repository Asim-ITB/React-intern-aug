import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          { path: "principal", element: <div>Hello i am principal</div> },
          { path: "sajal", element: <div>Hello i am sajal</div> },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    element: <Layout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
