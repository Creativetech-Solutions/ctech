import React from "react";
import "./OurTeam.css";
import Employee from "../OurTeam/Employee";

function OurTeam(props) {
  return (
    <div>
      <div id='team' className='animated bounceInLeft'>
        <div className='container'>
          <h2>Meet Our Team</h2>
          <div className='o-lecturers'>
            <div className='o-lecturers-bg'>
              <Employee />

              <div className='o-lecturers-teacher style-2 position-center-x'>
                <a href='#itemslide1' className='o-teacher-img'>
                  <img
                    src='./img/fal_sarah_johnson_s.jpg'
                    alt='Sarah Johnson'
                  />
                </a>
              </div>
              <div className='o-lecturers-teacher  style-3 position-center-y active'>
                <a href='#itemslide2' className='o-teacher-img'>
                  <img
                    src='./img/fal_leonardo_bonucci_s.jpg'
                    alt='Leonardo Bonucci'
                  />
                </a>
              </div>
              <div className='o-lecturers-teacher style-4 position-center-x'>
                <a href='#itemslide3' className='o-teacher-img'>
                  <img src='./img/fal_rebeca_addam_s.jpg' alt='Rebeca Addam' />
                </a>
              </div>
              <div className='o-lecturers-teacher style-5 position-center-x'>
                <a href='#itemslide4' className='o-teacher-img'>
                  <img src='./img/fal_barry_john_s.jpg' alt='Barry John' />
                </a>
              </div>
              <div className='o-slider-detail o-teacher-detail position-center-y owl-carousel owl-theme owl-loaded'>
                <div className='owl-stage-outer'>
                  <div
                    className='owl-stage'
                    style={{
                      transform: "translate3d(-1368px, 0px, 0px)",
                      transition: "all 0.5s ease 0s",
                      width: "3420px"
                    }}
                  >
                    <div
                      className='owl-item'
                      style={{
                        width: "684px",
                        marginRight: "0px"
                      }}
                    >
                      <div className='o-slide-item' data-hash='itemslide0'>
                        <div className='detail-teacher-img'>
                          <img
                            src='./img/fal_alaxander_louise.jpg'
                            alt='Alaxander Louise'
                          />
                        </div>
                        <div className='teacher-detail'>
                          <h3>
                            Alaxander Louise<span>UI-UX Developer</span>
                          </h3>
                          <div className='social-icons'>
                            <ul>
                              <li>
                                <a
                                  className='fa fa-facebook'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-instagram'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-google-plus'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-twitter'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                            </ul>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard.
                          </p>
                          <a
                            className='btn'
                            href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                          >
                            View details
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className='owl-item'
                      style={{ width: "684px", marginRight: "0px" }}
                    >
                      <div className='o-slide-item' data-hash='itemslide1'>
                        <div className='detail-teacher-img'>
                          <img
                            src='./img/fal_sarah_johnson.jpg'
                            alt='Sarah Johnson'
                          />
                        </div>
                        <div className='teacher-detail'>
                          <h3>
                            Sarah Johnson<span>Graphic Designer</span>
                          </h3>
                          <div className='social-icons'>
                            <ul>
                              <li>
                                <a
                                  className='fa fa-facebook'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-instagram'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-google-plus'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-twitter'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                            </ul>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard.
                          </p>
                          <a
                            className='btn'
                            href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                          >
                            View details
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className='owl-item active'
                      style={{ width: "684px", marginRight: "0px" }}
                    >
                      <div className='o-slide-item' data-hash='itemslide2'>
                        <div className='detail-teacher-img'>
                          <img
                            src='./img/fal_leonardo_bonucci.jpg'
                            alt='Leonardo Bonucci'
                          />
                        </div>
                        <div className='teacher-detail'>
                          <h3>
                            Leonardo Bonucci<span>Developer</span>
                          </h3>
                          <div className='social-icons'>
                            <ul>
                              <li>
                                <a
                                  className='fa fa-facebook'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-instagram'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-google-plus'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-twitter'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                            </ul>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard.
                          </p>
                          <a
                            className='btn'
                            href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                          >
                            View details
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className='owl-item'
                      style={{ width: "684px", marginRight: "0px" }}
                    >
                      <div className='o-slide-item' data-hash='itemslide3'>
                        <div className='detail-teacher-img'>
                          <img
                            src='./img/fal_rebeca_addam.jpg'
                            alt='Rebeca Addam'
                          />
                        </div>
                        <div className='teacher-detail'>
                          <h3>
                            Rebeca Addam<span>Developer</span>
                          </h3>
                          <div className='social-icons'>
                            <ul>
                              <li>
                                <a
                                  className='fa fa-facebook'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-instagram'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-google-plus'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-twitter'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                            </ul>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard.
                          </p>
                          <a
                            className='btn'
                            href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                          >
                            View details
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className='owl-item'
                      style={{ width: "684px", marginRight: "0px" }}
                    >
                      <div className='o-slide-item' data-hash='itemslide4'>
                        <div className='detail-teacher-img'>
                          <img
                            src='./img/fal_barry_john.jpg'
                            alt='Barry John'
                          />
                        </div>
                        <div className='teacher-detail'>
                          <h3>
                            Barry John<span>CEO</span>
                          </h3>
                          <div className='social-icons'>
                            <ul>
                              <li>
                                <a
                                  className='fa fa-facebook'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-instagram'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-google-plus'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                              <li>
                                <a
                                  className='fa fa-twitter'
                                  href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                                />
                              </li>
                            </ul>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard.
                          </p>
                          <a
                            className='btn'
                            href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                          >
                            View details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='owl-controls'>
                  <div className='owl-nav'>
                    <div className='owl-prev' style={{ display: "none" }} />
                    <div className='owl-next' style={{ display: "none" }} />
                  </div>
                  <div className='owl-dots' style={{ display: "none" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
