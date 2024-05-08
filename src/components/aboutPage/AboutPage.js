import React from 'react'
import "./aboutPage.css"

import about1 from '../../assets/images/about1.png';
import about2 from '../../assets/images/about2.png';



const AboutDetails = ({title ,dis}) => {
    return (
        <div className='d-flex flex-column  mt-2 '>
            <div className='fw-bold fs-6 '>{title}</div>
            <div className='mt-2 text-secondary '>{dis}</div>
        </div>
    )
}





const AboutPage = () => {
    return (
        <div className='aboutPage  container d-flex flex-column justify-content-center align-items-center'>
            <div >
                <div className='about__title fs-2  fw-bold text-blac text-uppercase  text-center'>about us</div>
                <div className=' text-black-50 w-75 m-auto text-center'>We are passionate about creating furniture that enriches
                lives and transforms spaces.
                With a deep appreciation for craftsmanship and a commitment to exceptional quality. </div>
            </div>
            <div className='row mt-5 p-5 justify-content-center align-items-center '>
                <img src={about1} alt='#' className='col-xl-6 col-md-12  img'></img>

                <div className='col-xl-6 col-md-12  '>
                    
                    <AboutDetails title="Our Journey" dis="Our journey began with a vision to bring artistry and innovation into every home. We believe that furniture is not merely a functional necessity but an expression of personal style and a reflection of individuality. That's why we meticulously handcraft each piece, paying attention to the finest details and using only the finest materials,
                to ensure that our furniture stands the test of time." />
                    <AboutDetails title="Our Work" dis="Fromluxurious sofas and elegant dining sets to stylish bedroom collections and functional storage solutions, our diverse range of furniture is designed to meet the unique needs and tastes of our discerning customers.
                We blend traditional craftsmanship with contemporary design elements, creating pieces that seamlessly blend into any interior style."/>
                </div>

                <div className='col-xl-6 col-md-12 '>
                    
                    <AboutDetails title="Our Commitment" dis="Our commitment doesn't end with exceptional products. We also prioritize exceptional customer service. Our knowledgeable team is here to assist you in finding the perfect furniture pieces for your home, 
                offering personalized guidance and support throughout your shopping experience." />
                    <AboutDetails title="Our Mission" dis="Join us in our mission to create inspiring living spaces that evoke comfort, style, and joy. Explore our collection and discover the perfect furniture that reflects your 
                personality and transforms your home into a haven of beauty and functionality." />
                </div>

                <img src={about2} alt='#' className='col-xl-6 col-md-12 mt-5 img'></img>
            </div>
        </div>
    )
}

export default AboutPage