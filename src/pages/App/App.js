import { Route, Routes, useLocation } from "react-router-dom";
import Leasing from "pages/Leasing/Leasing";
import Homepage from "pages/Homepage/Homepage";
import { AnimatePresence } from "framer-motion";
import "styles/global.scss";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route path="/lcar" element={<Homepage />} />
        <Route path="/simulator" element={<Leasing />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
