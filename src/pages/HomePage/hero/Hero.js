import React from 'react'
import "./hero.css"
import { heroContent } from "../../../data"




const Hero = () => {
  const { title, subtitle, button } = heroContent;

  

    return (
      <div className='hero__section  '>
        <div className='hero__content mt-0  justify-content-center '>
          <div className='hero__text '>
            <h1 className='title'>{title}</h1>
          <p className='subtitle '>{subtitle}</p>
            <button className='btn move'><a href='products'>{button}</a></button>
          </div>
  
        </div>
      </div>
  )
}

export default Hero;