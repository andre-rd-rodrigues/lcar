import { Route, Routes } from "react-router";
import Leasing from "../Leasing/Leasing";
import "styles/global.scss";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Leasing />} />
    </Routes>
  );
}

export default App;
