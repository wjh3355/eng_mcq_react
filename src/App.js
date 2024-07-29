import NavigationBar from "./components/header/NavigationBar";
import Home from "./components/Home";
import GEPApp from "./components/GEP MCQ/GEPApp";

import { Routes, Route } from "react-router-dom";

export default function App() {
   return (
      <>
         <NavigationBar/>

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gep_mcq" element={<GEPApp />} />
         </Routes>
      </>
   );
}
