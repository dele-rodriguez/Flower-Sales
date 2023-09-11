import { useState } from 'react';
import "./styles.css";
import Header from './Header/Navbar.jsx';
import Body from './Body/Body.jsx';
import Footer from './Footer/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Body />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
