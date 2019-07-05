import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Header(props) {
  return (
    <div>
      <header className='header-area fadeInDown' data-wow-delay='0.2s'>
        <div className='classy-nav-container light breakpoint-off dark left'>
          <div className='container'>
            <nav
              className='classy-navbar justify-content-between'
              id='dreamNav'
            >
              <div className='promo-section'>
                <div className='integration-link dark-int'>
                  <Link
                    activeClass='active'
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <img
                      style={{
                        width: "250px",

                        marginTop: "8px",
                      }}
                      src='img/logo.png'
                      alt='logo'
                    />
                  </Link>
                </div>
              </div>

              <div className='classy-menu'>
                <div className='classycloseIcon'>
                  <div className='cross-wrap'>
                    <span className='top' />
                    <span className='bottom' />
                  </div>
                </div>
                <div className='classynav site-menus'>
                  <ul id='nav'>
                    <li>
                      <Link
                        activeClass='active'
                        to='home'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass='active'
                        to='services'
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={500}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <a href='https://creativetech-solutions.com/pricing/'>
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href='https://creativetech-solutions.com/our-portfolio'>
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <Link
                        activeClass='active'
                        to='team'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                      >
                        Our Team
                      </Link>
                    </li>
                    <li>
                      {/* <Link to={"/contact"}>Contact Us</Link> */}

                      <Link
                        activeClass='active'
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={500}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  {/* <a
                    href='https://shrchato.netlify.com/index-demo-3.html#'
                    className='btn login-btn ml-50'
                  >
                    Log in
                  </a> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
