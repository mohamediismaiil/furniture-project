import React, { useState } from 'react';
import "./btn.css"

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  window.onscroll = function() {
    if (document.documentElement.scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth' 
    });
  };

    return (
      <div className='absolute'>
            <button 
      onClick={scrollToTop} 
          style={{ display: isVisible ? 'block' : 'none' }} 
          className='btton  '
      >
          <i class="bi bi-arrow-up-short text-dark"></i>
      </button>
      </div>
    
  );
}

export default ScrollToTopButton;
