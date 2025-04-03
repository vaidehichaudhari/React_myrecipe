import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RecipeDetail from "./Pages/RecipeDetail";
import CreateRecipe from "./Pages/CreateRecipe";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/create" element={<CreateRecipe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
