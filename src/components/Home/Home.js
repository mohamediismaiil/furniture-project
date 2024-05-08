import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './hero/Hero';
import ScrollToTopButton from './btnTop/Btn';
import Fresharrival from './fresharrival/Fresharrival';
import BlogSec from './Blog/BlogSec';
import Featured from './featured/Featured';
import Offers from './offer/Offers';
import CountDown from './countdown/CountDown';
import About from './about/about';
import Services from './serv/services';
import Newsletter from './newsletter/Newsletter';


const Home = () => {
    return (
        <>
        <Hero />
        <ScrollToTopButton />
        <Fresharrival />
        <BlogSec />
        <Featured />
        <Offers />
        <CountDown />
        <About />
        <Services />
        <Newsletter />
        </>
    )
}

export default Home