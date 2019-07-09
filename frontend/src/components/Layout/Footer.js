import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer(props) {
  return (
    <div>
      <div className='footer-content-area '>
        <div className='container'>
          <div className='row '>
            <div className='col-12 col-lg-6 col-md-6'>
              <div className='footer-copywrite-info'>
                <div className='copywrite_text fadeInUp'>
                  <div className='footer-logo'>
                    <img
                      src='img/logo.png'
                      alt='logo'
                      style={{ width: "200px" }}
                    />
                  </div>
                  <p style={{ width: "300px", textAlign: "justify" }}>
                    Thank you for taking the time to visit our website.
                  </p>
                </div>
              </div>
            </div>
            <div
              className='col-12 col-lg-6 col-md-6'
              style={{ paddingLeft: "15%" }}
            >
              <div className='col-12 col-lg-4 col-md-3 '>
                <div className='contact_info_area d-sm-flex justify-content-between'>
                  <div
                    className='contact_info mt-s text-center fadeInUp'
                    data-wow-delay='0.2s'
                  >
                    <h5>NAVIGATE</h5>

                    <ul
                      id='nav'
                      className='site-menus'
                      style={{ color: "gray" }}
                    >
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
                        <a href='http://creativetech-solutions.com/our-portfolio/'>
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
                  </div>
                </div>
              </div>

              <div className='col-12 col-lg-6 col-md-3 '>
                <div className='contact_info_area d-sm-flex justify-content-between'>
                  <div
                    className='contact_info mt-s text-center fadeInUp'
                    data-wow-delay='0.4s'
                  >
                    <h5>CONTACT US</h5>
                    <p>Office # 05, Ground Floor, </p>
                    <p>Street # 21, G-13/3 Markaz,</p>
                    <p>Islamabad 44000 Pakistan</p>
                    <p>support@yourdomain.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "lightblue",
            paddingTop: "5%",
          }}
        >
          © Creative 2015. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
