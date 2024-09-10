import React ,{useState} from 'react'
import "./nav.css"


const Sidebar = () => {
  const [sidebar, setSideBar] = useState(true);

  const sidebarHandler = () => {
    return setSideBar (!sidebar)
  }
    
  const [shop, setShop] = useState(false)
  const shopHandler = () => {
    return setShop(!shop)
  }

  function toggleChevron() {
    var chevronIcon = document.querySelector(".shopSidebarIcon");
    chevronIcon.classList.toggle("rotated");
}
    return (
      <div className='sidebar'>
        {sidebar ? <div className='mt-2'>
          <i class="bi bi-list fs-2 text-black mt-5 ms-2 " onClick={sidebarHandler}></i>
        </div> :
          <div className=' side__stylee animated-element hidden d-flex flex-column  align-items-center bg-white w-100'>
            <i class="bi bi-x-lg  close_btn  " onClick={sidebarHandler}></i>
            <ul class="list-unstyled text-black">
              
        <li class=" mt-5">
          <a class=" text-decoration-none text-black" aria-current="page" href="home">HOME</a>
              </li>

              <li class="  me-4 mt-4 ">
                <div className="d-flex text-black">
                  <a class=" text-black" href="services">SHOP</a>
                  <i class="shopSidebarIcon bi bi-chevron-down cursor-pointer  ms-2" onClick={() => { shopHandler(); toggleChevron() }} ></i>
                </div>

                <div className='shopMenuSidebar  d-flex text-black'>
                  <div className=''><a href='/shop' className='text-decoration-none text-black px-3 '>Sofa</a></div>
                  <div className=''><a href='/shop' className='text-decoration-none text-black px-3 '>Chair</a></div>
                  <div className=''><a href='/shop' className='text-decoration-none text-black px-3 '>Table</a></div>
                  <div className=''><a href='/shop' className='text-decoration-none text-black px-3 '>Storage</a></div>
                  <div className=''><a href='/shop' className='text-decoration-none text-black px-3 '>Lighting</a></div>
                  <div className=''><a href='/shop' className='text-decoration-none text-black px-3 '>Home decor</a></div>
                  <div className=''><a href='/shop' className='text-decoration-none text-black px-3 '>Kids furniture</a></div>
                  <div className=''><a href='/shop' className='text-decoration-none text-black px-3 '>Office furniture</a></div>
                  <div className=''><a href='/shop' className='text-decoration-none text-black px-3 '>Beds</a></div>
                  <div className=''><a href='/shop' className='text-decoration-none text-black px-3 '>Outdoor furniture</a></div>
                
        </div>
              </li>

              
        <li class=" mt-5">
          <a class=" text-decoration-none" href="services">SERVICES</a>
              </li>

        <li class=" mt-5">
          <a class=" text-decoration-none" href="services">ABOUT US</a>
              </li>

        <li class=" mt-5">
          <a class=" text-decoration-none" href="services">CONTACT</a>
              </li>
            </ul>
            
          </div>
            
          }
      </div>
    )
  }


const Navbar = () => {
//   let prevScrollpos = window.pageYOffset;

// window.onscroll = function() {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-70px"; 
//   }
//   prevScrollpos = currentScrollPos;
//   }
  
  const [loggedIn , setLoggedIn ] = useState (true)
  const registeration = () => {
    return setLoggedIn(!loggedIn)
  }
  



  const [shop, setShop] = useState(false)
  const shopHandler = () => {
    return setShop(!shop)
  }

  function toggleChevron() {
    var chevronIcon = document.querySelector(".shop__icon");
    chevronIcon.classList.toggle("rotated");
}


  return (
    <nav className='background'>
      <div className=' header d-flex '>
        <Sidebar />

        <div className=' navbar '>
          
        <a class="text-decoration-none text-black fs-2 mb-1" href="home"><span className='me-1 mt-1 fw-bold fs-2'>F</span>urniZen</a>
        <div className="links  ms-5  ">
            <ul class="list-unstyled d-flex">
              
        <li class="nav-item me-4 mt-4">
          <a class="nav-link " aria-current="page" href="home">HOME</a>
              </li>

        <li class="nav-item  me-4 mt-4 ">
                <div className="shop d-flex relative">
                  <a class="nav-link" href="services">SHOP</a>
                  <i class="shop__icon bi bi-chevron-down cursor-pointer  ms-2" onClick={() => { shopHandler(); toggleChevron() }} ></i>
                </div>
              </li>
              
        <li class="nav-item me-4 mt-4">
                <a class="nav-link" href="services">DEALS</a>
              </li>

        <li class="nav-item me-4 mt-4">
          <a class="nav-link" href="../../aboutPage">ABOUT US</a>
              </li>

              <li class="nav-item me-4 mt-4">
          <a class="nav-link" href="services">CONTACT</a>
        </li>
      </ul>
        </div>
        
          <div className=" search">
            <label for="srch"><i class="bi bi-search text-black me-2 mb-1"></i></label>
            <input class="srch__input  w-100" type="search" placeholder="Find your piece  " id="srch" />
          </div>

          <i class="bi bi-bag cursor-pointer text-black ms-4 "></i>
          
      <div className='registration '>
        {loggedIn ? <div><i class="bi bi-person fs-5 cursor-pointer text-black"></i></div>
          : <div><a href='/loign'> login</a>
          <a className='sign' href='/sign'> sign up</a></div> }
              
          </div>
          

        </div>
        <div className={shop ? "show " :"hide "}>
        <div className='shop__menu d-flex flex-column bg-black p-5'>
                  <div className='mt-2 border-bottom border-secondary p-2'><a href='/shop' className='shop__links py-1 px-2 text-decoration-none bg-black '>Sofa</a></div>
                  <div className='mt-2 border-bottom border-secondary p-2'><a href='/shop' className='shop__links py-1 px-2 text-decoration-none bg-black '>Chair</a></div>
                  <div className='mt-2 border-bottom border-secondary p-2'><a href='/shop' className='shop__links py-1 px-2 text-decoration-none bg-black '>Table</a></div>
                  <div className='mt-2 border-bottom border-secondary p-2'><a href='/shop' className='shop__links py-1 px-2 text-decoration-none bg-black '>Storage</a></div>
                  <div className='mt-2 border-bottom border-secondary p-2'><a href='/shop' className='shop__links py-1 px-2 text-decoration-none bg-black '>Lighting</a></div>
                  <div className='mt-2 border-bottom border-secondary p-2'><a href='/shop' className='shop__links py-1 px-2 text-decoration-none bg-black '>Home decor</a></div>
                  <div className='mt-2 border-bottom border-secondary p-2'><a href='/shop' className='shop__links py-1 px-2 text-decoration-none bg-black '>Kids furniture</a></div>
                  <div className='mt-2 border-bottom border-secondary p-2'><a href='/shop' className='shop__links py-1 px-2 text-decoration-none bg-black '>Office furniture</a></div>
                  <div className='mt-2 border-bottom border-secondary p-2'><a href='/shop' className='shop__links py-1 px-2 text-decoration-none bg-black '>Beds</a></div>
                  <div className='mt-2  p-2'><a href='/shop' className='shop__links py-1 px-2 text-decoration-none bg-black '>Outdoor furniture</a></div>
                
        </div>
        </div>
      </div>

    </nav>
      
        
      
    )
}

export default Navbar