import React from 'react'
import countImg from '../../../assets/images/countDown.png'

import {countDownData} from '../../../data'

import "./countdown.css"

const CountDown = () => {
  return (
    <div className='countDown container row '>
      <div className=' count__img col-lg-6 col-md-12 col-sm-12'><img className='' src={countImg} alt='#' /></div>
      <div className='count__content col-lg-6 col-md-12 col-sm-12'>
        <h1 className='discount'>30% OFF</h1>
        <p className='discount__disc'>Enjoy 20% off on home furniture!</p>
        <div className='time d-flex'>
        {countDownData.map((item , index) => {
          return (
            <div className='time__card ' key={index}>
                <h4 className='number'>{item.value}</h4>
              <p className='time__text'>{item.name }</p>
            </div>
          )
        })}
        </div>
        <a href='/shop' className='shop__btn'>SHOP NOW</a>
      </div>
    </div>
  )
}

export default CountDown