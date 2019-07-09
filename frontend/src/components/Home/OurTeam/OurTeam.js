import React, { Component } from "react";
import "./OurTeam.css";
// import { get } from "../../../Api";
import Employee from "./Employee";

class OurTeam extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     teams: null,
  //   };
  // }
  // async componentDidMount() {
  //   const teams = (await get("team")).data.our_teams;
  //   // console.log(teams);
  //   this.setState({
  //     teams,
  //   });
  // }

  render() {
    return (
      <section className='our_blog_area news' style={{ paddingTop: "5%" }}>
        <div className='container'>
          <div id='team' className='animated bounceInLeft'>
            <h2>Meet Our Team</h2>
            <div className='o-lecturers'>
              <div className='o-lecturers-bg'>
                <Employee />

                <div className='o-slider-detail o-teacher-detail position-center-y owl-carousel owl-theme owl-loaded'>
                  <div className='owl-stage-outer'>
                    <div className='o-slide-item' data-hash='itemslide1'>
                      <div className='detail-teacher-img'>
                        <img
                          src='img/fal_alaxander_louise.jpg'
                          alt='Alaxander Louise'
                        />
                      </div>
                      <div className='teacher-detail'>
                        <h3>
                          Alaxander Louise<span>UI-UX Developer</span>
                        </h3>

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
                    <div className='o-slide-item' data-hash='itemslide2'>
                      <div className='detail-teacher-img'>
                        <img
                          src='img/fal_sarah_johnson.jpg'
                          alt='Sarah Johnson'
                        />
                      </div>
                      <div className='teacher-detail'>
                        <h3>
                          Sarah Johnson<span>Graphic Designer</span>
                        </h3>

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
                          src='img/fal_rebeca_addam.jpg'
                          alt='Rebeca Addam'
                        />
                      </div>
                      <div className='teacher-detail'>
                        <h3>
                          Rebeca Addam<span>Developer</span>
                        </h3>

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
                    <div className='o-slide-item' data-hash='itemslide3'>
                      <div className='detail-teacher-img'>
                        <img
                          src='img/fal_leonardo_bonucci.jpg'
                          alt='Leonardo Bonucci'
                        />
                      </div>
                      <div className='teacher-detail'>
                        <h3>
                          Leonardo Bonucci<span>Developer</span>
                        </h3>

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
                    <div className='o-slide-item' data-hash='itemslide5'>
                      <div className='detail-teacher-img'>
                        <img src='img/fal_barry_john.jpg' alt='Barry John' />
                      </div>
                      <div className='teacher-detail'>
                        <h3>
                          Barry John<span>CEO</span>
                        </h3>

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

                    {/* {this.state.teams &&
                    this.state.teams.map(team => (
                      <div
                        className='owl-item'
                        style={{ width: "684px", marginRight: "0px" }}
                      >
                        <div
                          className='o-slide-item'
                          data-hash={"itemslide" + team.id}
                        >
                          <div className='detail-teacher-img'>
                            <img
                              src={"img/" + team.avatar + ".jpg"}
                              alt={team.name}
                            />
                          </div>
                          <div className='teacher-detail'>
                            <h3>
                              {team.name}
                              <span>{team.designation}</span>
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
                            <p>{team.description}</p>
                            <a
                              className='btn'
                              href='https://www.pixxett.com/htmldemos/startup-pro/index6.html#'
                            >
                              View details
                            </a>
                          </div>
                        </div>
                      </div>
                    ))} */}
                  </div>
                  <div
                    className='owl-item active'
                    style={{ width: "684px", marginRight: "0px" }}
                  >
                    <div className='o-slide-item' data-hash='itemslide6'>
                      <div className='detail-teacher-img'>
                        <img
                          src='img/Sydney_Delosh_NEW.jpg'
                          alt='Sydney Delosh'
                        />
                      </div>
                      <div className='teacher-detail'>
                        <h3>
                          Sydney Delosh<span>Senior Account Manager</span>
                        </h3>

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
                    <div className='o-slide-item' data-hash='itemslide7'>
                      <div className='detail-teacher-img'>
                        <img src='img/Allison-Lautz.jpg' alt='Sydney Delosh' />
                      </div>
                      <div className='teacher-detail'>
                        <h3>
                          Allison Lautz
                          <span>Senior Front End Developer</span>
                        </h3>

                        <p>
                          “The important thing is not to stop questioning.
                          Curiosity has its own reason for existing.”
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
                    <div className='o-slide-item' data-hash='itemslide8'>
                      <div className='detail-teacher-img'>
                        <img src='img/Mike_Santoro.jpg' alt='Sydney Delosh' />
                      </div>
                      <div className='teacher-detail'>
                        <h3>
                          Mike Santoro
                          <span>HR Manager</span>
                        </h3>

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
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurTeam;
