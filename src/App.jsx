import "./App.css";
import Navigation from "./Customer/Components/Navigation/Navigation.jsx";
import { HomePage } from "./Customer/Components/Pages/HomePage/HomePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
