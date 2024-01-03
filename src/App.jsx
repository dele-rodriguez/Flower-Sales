import { useState } from 'react';
import "./styles.css";
import Header from './Header/Navbar.jsx';
import Footer from './Footer/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Body/Home';
import Shop from './Body/Shop';
import Blog from './Body/Blog';
import About from './Body/About ';
import Contact from './Body/Contact';
import Product from './Body/Product.jsx';
import NotFound from './Components/NotFound.jsx';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path='/shop'
            element={<Shop/>}
          ></Route>
          <Route
              path='/shop/:flowerID'
              element={<Product />}
            ></Route>    
          <Route
            path='/blog'
            element={<Blog />}
          ></Route>
          <Route
            path='/about'
            element={<About />}
          ></Route>
          <Route
            path='/contact'
            element={<Contact />}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
