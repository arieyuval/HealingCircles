import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeOffer from "./pages/WhatWeOffer";
import WhyJoin from "./pages/WhyJoin";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatweoffer" element={<WhatWeOffer />} />
        <Route path="/whyjoin" element={<WhyJoin />} />
      </Routes>
    </Layout>
  );
}
