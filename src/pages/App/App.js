import { Route, Routes } from "react-router-dom";
import Leasing from "pages/Leasing/Leasing";
import Homepage from "pages/Homepage/Homepage";
import "styles/global.scss";

function App() {
  return (
    <Routes>
      <Route path="/lcar" element={<Homepage />} />
      <Route path="/simulator" element={<Leasing />} />
    </Routes>
  );
}

export default App;
