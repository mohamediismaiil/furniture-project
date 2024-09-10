import React from 'react'
import fast from "../../../assets/images/fast.png"
import safe from "../../../assets/images/secure-payment.png"
import help from "../../../assets/images/support.png"
import curated from "../../../assets/images/content-curation.png"

import "./services.css"

const Services = () => {
    return (
        <div className='services'>
            <div className='fs-1 text-center  sec__title text-uppercase'>Our Services</div>
            <div className=' bg-light row '>
            
            <div className='services__items mt-5 mb-5 col-lg-3 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center'>
                    <div className='text__icon d-flex flex-column justify-content-center align-items-center '>
                    <img src={fast} alt='#' width="40px"></img>
                    <p className='mb-0'>FAST DELIVERY</p>
                </div>
                <div className='text-secondary'>Delivery in 24 hours max</div>
            </div>
            
            <div className='services__items mt-5 mb-5 col-lg-3 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center'>
                    <div className='text__icon d-flex flex-column justify-content-center align-items-center '>
                    <img src={safe} alt='#' width="40px"></img>
                    <p className='mb-0'>SAFE PAYMENT</p>
                </div>
                <div className='text-secondary'>100% Secure Payment</div>
            </div>
            
            <div className='services__items mt-5 mb-5 col-lg-3 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center'>
                    <div className='text__icon d-flex flex-column justify-content-center align-items-center '>
                    <img src={help} alt='#' width="40px"></img>
                    <p className='mb-0'>HELP CENTER</p>
                </div>
                <div className='text-secondary'>Dedicated 24/7 Support</div>
            </div>
            
            <div className='services__items mt-5 mb-5 col-lg-3 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center'>
                    <div className='text__icon d-flex flex-column justify-content-center align-items-center '>
                    <img src={curated} alt='#' width="40px"></img>
                    <p className='mb-0'>CURATED ITEMS</p>
                </div>
                <div className='text-secondary'>From hand picked sellers</div>
            </div>
            
            </div>
        </div>
        
    )
}

export default Services