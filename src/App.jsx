import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./demo.jsx";
import Home from "./home.jsx";
import Price from "./price.jsx";
import Question from "./question.jsx";
import Contact from "./contact.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Pricing page */}
        <Route path="/pricing" element={<Price />} />
        <Route path="/question" element={<Question />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />

      </Routes>
    </Router>
  );
}

export default App;
