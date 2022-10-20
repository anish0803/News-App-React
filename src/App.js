import React from "react";
// import './App.css';
import Home from "./components/Home";
import News from "./components/News";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Likes from "./components/Likes";


function App() {

  return (
    <div className="App">
      <Home />
      <News />

      <About />

      <Contact />

      <Footer />
      {/* < Likes /> */}
      
     
    </div>
  );
}

export default App;
