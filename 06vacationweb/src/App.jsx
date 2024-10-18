import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Github from "./pages/Github";
import DataContext from "./context/DataContext";
import UserContext from "./context/UserContext";
import DarkModeContext from "./context/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeContext>
        <UserContext>
          <DataContext>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/github" element={<Github />} />
            </Routes>
            <Footer />
          </DataContext>
        </UserContext>
      </DarkModeContext>
    </>
  );
}

export default App;
