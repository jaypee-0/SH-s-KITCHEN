import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home"
import About from "./Routes/About"
import Product from "./Routes/Product"
import Contact from "./Routes/Contact"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import "./Components/Fontawesome"
import Error404 from "./Components/404/Error404"

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
        <Route exact path='/faqs' element={<FAQs />}></Route>
        <Route exact path='*' element={<Error404 />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 