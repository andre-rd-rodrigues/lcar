import { Route, Routes } from "react-router-dom";
import Leasing from "../Leasing/Leasing";
import "styles/global.scss";

function App() {
  return (
    <Routes>
      <Route path="/lcar" element={<Leasing />} />
    </Routes>
  );
}

export default App;
