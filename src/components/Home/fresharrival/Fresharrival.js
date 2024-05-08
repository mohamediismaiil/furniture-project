import React from 'react'
import fresh1 from "../../../assets/images/fresh1.png"
import fresh2 from "../../../assets/images/fresh2.png"
import fresh3 from "../../../assets/images/fresh3.png"
import fresh4 from "../../../assets/images/fresh4.png"

import "./FreshArrival.modules.css"

const Fresharrival = () => {
  return (
      <div className='freshArr'>
          <div className=' d-flex container justify-content-around align-items-center  '>
              <div className='text__content'>
                  <h3 className='text-uppercase '>Fresh arrival</h3>
                  <p className='subtitle' >fresh styles. new beginnings discover our latest arrivals</p>
              </div>
              <button className='btn  ms-auto border-0 p-2  '><a className='text-uppercase bg-light text-dark text-decoration-none p-2 rounded-lg' href='/product' >view all <i class="bi bi-arrow-up-right ms-2"></i></a></button>
            </div>
          <div className='cards__container  mt-5 mb-5 m-auto row'>
              
              
                <a className='cards__items absolute m-auto col-lg-3 col-sm-6 mt-4 text-dark text-decoration-none'>
                    <img src={fresh1} alt='#' className='w-100 mb-2 '></img>
                  <p className='fs-bold mb-0'>Awesome Sponge Armchair </p>
                  <p className='light__text'>$ 12.76</p>
                  <a href='#' className='explore'><i class="bi bi-arrow-up-right  text-dark "></i></a>
              </a>

              <a className='cards__items absolute m-auto col-lg-3 col-sm-6 mt-4 text-dark text-decoration-none'>
                    <img src={fresh2} alt='#' className='w-100 mb-2 '></img>
                  <p className='fs-bold mb-0'>Blue Wooden Armchair</p>
                  <p className='light__text'>$ 12.76</p>
                  <a href='#' className='explore'><i class="bi bi-arrow-up-right  text-dark "></i></a>
              </a>

              <a className='cards__items absolute m-auto col-lg-3 col-sm-6 mt-4 text-dark text-decoration-none'>
                    <img src={fresh3} alt='#' className='w-100 mb-2 '></img>
                  <p className='fs-bold mb-0'>Wooden Box with Stand</p>
                  <p className='light__text'>$ 12.76</p>
                  <a href='#' className='explore'><i class="bi bi-arrow-up-right  text-dark "></i></a>
              </a>

              <a className='cards__items absolute m-auto col-lg-3 col-sm-6 mt-4 text-dark text-decoration-none'>
                    <img src={fresh4} alt='#' className='w-100 mb-2 '></img>
                  <p className='fs-bold mb-0'>Black Night Lamp </p>
                  <p className='light__text'>$ 12.76</p>
                  <a href='#' className='explore'><i class="bi bi-arrow-up-right  text-dark "></i></a>
              </a>

              </div>
              </div>

  )
}

export default Fresharrival