import React from 'react'
import { useState } from 'react';
import "./sidbar.css"

const Sidebar = () => {

    const [sidebar, SetSidebar] = useState(true);
  
  const sidbarHandler = () => {
    return SetSidebar(!sidebar)
  }
  return (
      <div>
      
      {sidebar ?
            <i className="bi sidbar__icon  bi-list move" onClick={sidbarHandler} ></i> :
            <div className="container-fluid  ">
            <div className="row">
              <div className="col-md-3 text-light sidebar__styles">
                  <i className="bi bi-x close__icon fs-4 " onClick={sidbarHandler}></i>
                  <ul className="nav  flex-column jusify-content-center align-items-center mt-5">
                  <li className="nav-item mt-4 fs-6"><a className="nav-link" href="#">one</a></li>
                  <li className="nav-item mt-4 fs-6"><a className="nav-link" href="#">two</a></li>
                  <li className="nav-item mt-4 fs-6"><a className="nav-link" href="#">three </a></li>
                </ul>
              </div>
                </div>
                  </div> }</div>
  )
}

export default Sidebar