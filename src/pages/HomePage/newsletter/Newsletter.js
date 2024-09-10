import React from 'react'
import "./newsletter.css"

const Newsletter = () => {
    return (
        <div className='News__letter'>
            <div className='  mb-5 p-5 border border-light-subtle'>
                <div className='news__content  d-flex flex-column justify-content-center align-items-center'>
                    <h2 className='text-dark'>STAY IN THE LOOP</h2>
                    <p className='lighter'>Join our exclusive newsletter for furniture and home decor Inspiration, Insider <br /> updates, and special offers!</p>
            <div className='join__us d-flex'>
                <input type='email' placeholder='Enter your email address' className=' me-3 email'  ></input>
                <button className='border-0  join'>JOIN US</button>
                </div>
            </div>
            
        </div>
        </div>
        
    )
}

export default Newsletter