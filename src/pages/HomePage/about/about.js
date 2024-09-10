import React from 'react'
import "./about.css"

import { websiteInfo} from "../../../data"
import AboutImg from "../../../assets/images/about.png";

const About = () => {
    return (
        <div className='sec'>
            <div className='sec__title  text-center text-uppercase'>about us</div>
            <div className='about container'>
            <div className='about__content  container position-relative d-flex flex-column justify-content-center align-items-center '>
                <h2 className='w-75 text-center fs-3 text-uppercase'>we are passionate about creating furniture that enriches lives and transforms spaces.</h2>
                <p className='w-50 text-center fw-lighter small mb-5'>We are passionate about creating furniture that enriches lives and transforms spaces.
                    With a deep appreciation for craftsmanship and a commitment to exceptional quality,
                    we strive to offer furniture pieces that combine timeless elegance with modern functionality.</p>
                <img src={AboutImg} alt='#' className='w-75 rounded' />
                <div className='website__info  w-100 d-flex justify-content-center align-items-end m-auto rounded'>
                    {websiteInfo.map((item ,index) => {
                        return (
                            <div className='cont d-flex contianer justify-content-center align-items-end  text-center m-auto' key={index}>
                                <h3 className='num fw-bold '>{item.num }</h3>
                                <div className='small ps-2 pt-2 w-25  '>{item.text }</div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
    </div> 
        </div>
        
    )
}

export default About