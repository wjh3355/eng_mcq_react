import React from "react";

import NavigationBar from "./components/header/NavigationBar";
import Home from "./components/HOMEPAGE/Home";
import GEPApp from "./components/GEP MCQ/GEPApp";
import NotFound from "./components/utils/NotFound";

import { Routes, Route } from "react-router-dom";

export default function App() {
   return (
      <>
         <NavigationBar/>

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gep_mcq" element={<GEPApp />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </>
   );
}
