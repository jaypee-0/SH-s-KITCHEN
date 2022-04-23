import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home"
import About from "./Routes/About"
import Product from "./Routes/Product"
import Contact from "./Routes/Contact"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import "./Components/Fontawesome"

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>        
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/product' element={<Product />}></Route>        
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 