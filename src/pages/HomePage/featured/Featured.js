import React from 'react'
import Safa from '../../../assets/images/safa.png'
import Table from '../../../assets/images/table.png'
import HomeDecore from '../../../assets/images/home decore.png'
import Chair from '../../../assets/images/chair.png'

import './featured.css'

const Featured = () => {

  return (
    <div className='featured '>
      <div className='featured__content container'>
        <div className='featured__text'>
          <div className='feat_title'>FEATURED CATEGOREY</div>
          <div className='feat_subtitle'>Get more, pay less: your ticket to furniture bliss!</div>
        </div>
        <button className='bttn'>VIEW ALL</button>
      </div>
      <div className='feat__ row mt-5'>
        <div className='feat__card col-sm-6 col-md-4 col-lg-3'>
          <img src={Safa}  alt='#'/>
          <button className='feat__name'>Safa</button>
            </div>
        <div className='feat__card col-sm-6 col-lg-4 col-lg-3'>
          <img src={Table}  alt='#'/>
          <button className='feat__name'>Table</button>
            </div>
        <div className='feat__card col-sm-6 col-lg-4 col-lg-3'>
          <img src={HomeDecore}  alt='#'/>
          <button className='feat__name'>Home Decore</button>
            </div>
        <div className='feat__card col-sm-6 col-lg-4 col-lg-3'>
          <img src={Chair}  alt='#'/>
          <button className='feat__name'>Chair</button>
            </div>
      </div>
    </div>
    
  )
}

export default Featured