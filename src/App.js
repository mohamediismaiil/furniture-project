import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Footer from "./components/Footer/Footer";



const App = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Home />
      <Footer />
    </div>
    
    )
}

export default App
