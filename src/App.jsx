// src/App.jsx
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </HashRouter>
  );
}
