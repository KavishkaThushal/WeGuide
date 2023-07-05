import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin/Signin";
import Tour from "../pages/Tour/Tour";
import Intro1 from "../intro/Southern";
import Intro2 from "../intro/Central";
import Intro3 from "../intro/Uva";
import Intro4 from "../intro/Western";
import Intro5 from "../intro/Eastern";
import Intro6 from "../intro/Northern";
import Intro7 from "../intro/NorthCentral";
import Intro8 from "../intro/Sabaragamuwa";
import Intro9 from "../intro/Wayamba";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/intro1" element={<Intro1 />} />
      <Route path="/intro2" element={<Intro2 />} />
      <Route path="/intro3" element={<Intro3 />} />
      <Route path="/intro4" element={<Intro4 />} />
      <Route path="/intro5" element={<Intro5 />} />
      <Route path="/intro6" element={<Intro6 />} />
      <Route path="/intro7" element={<Intro7 />} />
      <Route path="/intro8" element={<Intro8 />} />
      <Route path="/intro9" element={<Intro9 />} />
    </Routes>
  );
}

export default Router;
