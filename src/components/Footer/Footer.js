import React from 'react'
import visa1 from "../../../assets/images/c4.png"
import visa2 from "../../../assets/images/c5.png"


const Footer = () => {
    return (
        <div className='footer bg-black ' >
            <div className='footer__items d-flex justify-content-center border-bottom border-secondary row p-5 '>
                
                <div className='d-flex flex-column col-lg-2 col-sm-12 '>
                    <div className='fs-3  text-white'><span className='fs-2 fw-bold me-1 '>F</span>urniZen</div>
                    <div className='text-secondary'>Our mission is to empower individuals in creating <br/> personalized living spaces.</div>
                    <div className='email bg-black text-secondary border-0 d-flex mt-3 mb-3'>
                        <i class="bi bi-envelope"></i>
                        <div className='ms-3' >contact@urban.com</div>
                    </div>
                    <div className='phone bg-black text-secondary border-0 d-flex mt-3 mb-3'>
                        <i class="bi bi-telephone ms-2 "></i>
                        <div className='ms-3' >+20 1096812961</div>
                    </div>
                </div>

                <div className='info col-lg-2 col-sm-12 '>
                    <p className='text-uppercase text-white mb-3 mt-3'>info</p>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>About</a></div>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>Policy</a></div>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>Terms</a></div>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>Our story</a></div>
                </div>

                <div className='info col-lg-2 col-sm-12 '>
                    <p className='text-uppercase text-white mb-3 mt-3'>SHOP</p>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>Sofa</a></div>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>Chair</a></div>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>Beds</a></div>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>Out Doors</a></div>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>Lighting</a></div>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>View All</a></div>
                </div>

                <div className='info col-lg-2 col-sm-12 '>
                    <p className='text-uppercase text-white mb-3 mt-3'>CUSTOMER</p>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>FAQs</a></div>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>Returns</a></div>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>Exchange</a></div>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>Sizing</a></div>
                    <div className='mt-2'> <a href='/about' className='text-secondary mt-3 text-decoration-none'>Shipping</a></div>
                </div>


                <div className='d-flex flex-column col-lg-2 col-sm-12 bg-black '>
                    <p className='text-uppercase text-white mb-3 mt-3'>Social media</p>
                    <div className='social'>
                    <a href='https://www.facebook.com' className='p-2 bg-light bg-black text-decoration-none'> <i class="bi bi-facebook bg-black text-secondary text-decoration-none"></i> </a>
                    <a href='https://www.facebook.com/' className='p-2 bg-light bg-black text-decoration-none'> <i class="bi bi-twitter-x bg-black text-secondary text-decoration-none"></i> </a>
                    <a href='https://www.facebook.com/' className='p-2 bg-light bg-black text-decoration-none'> <i class="bi bi-instagram bg-black text-secondary text-decoration-none"></i> </a>
                    </div>
                    
                </div>

            </div>
            <footer className='d-flex justify-content-between container p-4 bg-black text-secondary'>
                <div className='left d-flex' >
                    <div className='text-uppercase pe-3  border-end border-secondary'>english</div>
                    <div className='text-secondary ps-3'>© 2024    All rights reserved to Muhammad Ismail   </div>
                </div>
                <div className='right d-flex '>
                    <img src={visa1} className='me-2' alt='#'></img>
                    <img src={visa2} alt='#'></img>
                </div>
            </footer>
        </div>
    )
}

export default Footer