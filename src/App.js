import React from "react";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import About from "./components/About";


const App = () => {
    return (
        <div className="app">
          <BrowserRouter> 
          <Routes> 
            <Route exact path="/" element={<Home />} />
            <Route path="/Reservation/*" element={<Reservation/>} />
            <Route path="/About" element={<About/>} />
          </Routes>
          </BrowserRouter>
        </div>
    );
  }
  export default App;