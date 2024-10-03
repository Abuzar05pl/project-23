import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ProductPage } from "./Pages/ProductPage";
import { AboutPage } from "./Pages/AboutPage";
import { Navigation } from "./Components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
