import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home"
import About from "./Routes/About"
import Product from "./Routes/Product"
import Contact from "./Routes/Contact"

function App() {
  return (
    <Router>
      <Routes>        
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/product' element={<Product />}></Route>        
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;