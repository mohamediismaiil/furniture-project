import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Home/footer/Footer';



import Navbar from './components/Home/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutPage from './components/aboutPage/AboutPage';


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