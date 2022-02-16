import { Route, Routes, useLocation, HashRouter } from "react-router-dom";
import Leasing from "pages/Leasing/Leasing";
import Homepage from "pages/Homepage/Homepage";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "styles/global.scss";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route path="/simulator" element={<Leasing />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
      <ToastContainer progressClassName="progressBar" />
    </AnimatePresence>
  );
}

export default App;
