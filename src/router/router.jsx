import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import HowItWork from "../HowItWork/HowItWork";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contact/Contact";
import FAQ from "../FAQ/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/HowItWork", element: <HowItWork /> },
      { path: "/Pricing", element: <Pricing /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/FAQ", element: <FAQ /> },
      {
        path: "*",
        element: (
          <h1 className="p-5 min-h-screen text-red-600 font-[700]">
            PAGE NOT FOUND
          </h1>
        ),
      },
    ],
  },
]);
