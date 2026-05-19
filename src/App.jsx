import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chatbot from "./pages/Chatbot";
import Dashboard from "./pages/Dashboard";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;