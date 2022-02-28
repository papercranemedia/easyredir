import React from "react";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.js";
import Features from "./components/Features.js";
import Solutions from "./components/Solutions.js";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import Pricing from "./components/Pricing.js";
import Enterprise from "./components/Enterprise.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/solutions" element={<Solutions />}></Route>
        <Route path="/blog" element={<AllPosts />}></Route>
        <Route path="/blog/:slug" element={<OnePost />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/enterprise" element={<Enterprise />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;