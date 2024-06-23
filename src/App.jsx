import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./pages/MainLayout";
import AllFlowers from "./pages/AllFlowers";
import Page404 from "./pages/Page404";
import ContactPage from "./pages/ContactPage";

const App = () => {
 const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/allflowers" element={<AllFlowers />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    )
  );
  return (
    <>
      {/* <Navbar />
      <Hero/> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
