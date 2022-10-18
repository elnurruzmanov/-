import React from "react";

//routers
import { Routes, Route, Form } from "react-router-dom";

import "swiper/css/bundle";


import Navbar from "./components/Navbar/Navbar";
import Navbars from "./components/Navbars/Navbars";
import Home from "./components/Home/Home";
import Digital from "./components/Digital/Digital";
import Solutions from "./components/Solutions/Solutions";
import Portfolio from "./components/Portfolio/Portfolio";
import Sales from "./components/Sales/Sales";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Results from "./components/Results/Results";
import Clients from "./components/Clients/Clients";
import Feedback from "./components/Feedback/Feedback";
import Work from "./components/pages/Work/Work";
import Departments from "./components/Departments/Departments";
import Register from "./components/Form/Register";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Portfolios from "./components/Portfolios/Portfolios";
import Abouts from "./components/Abouts/Abouts";
import Websites from "./components/Website/Websites/Websites";


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Navbars />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Navbar />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Home />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Digital />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Solutions />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Portfolio />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Sales />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<About />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Team />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Results />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Clients />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Feedback />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Work />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Departments />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Register />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/" element={<Footer />} exact></Route>
      </Routes>
     <Routes>
        <Route path="/contact" element={<Contact />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/portfolios" element={<Portfolios />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/abouts" element={<Abouts />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/websites" element={<Websites />} exact></Route>
      </Routes>
     
    </div>
  );
}

export default App;
