import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./pages/MainLayout";

const App = () => {
 const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
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
