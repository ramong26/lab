import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
