import React from 'react';

function Team(props) {
  return (
  	<div>
    <section className="our_team_area section-padding-0-0 clearfix" id="team">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                       
                        <div className="dream-dots justify-content-center fadeInUp" data-wow-delay="0.2s">
                            <img src="js/section-icon-1.svg" alt="" />
                        </div>
                        <h2 className="fadeInUp" data-wow-delay="0.3s">Awesome Team</h2>
                        <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo. </p>
                    </div>
                </div>
            </div>

            <div className="row">
                
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-team-member v2 fadeInUp" data-wow-delay="0.2s">
                       
                        <div className="team-member-thumb">
                            <img src="js/1.png" className="center-block" alt="" />
                        </div>
                       
                        <div className="team-info">
                            <h5>Joman Helal</h5>
                            <p>Executive Officer</p>
                        </div>
                       
                        <div className="team-social-icon">
                            <a href="https://shrchato.netlify.com/index-demo-3.html#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-team-member v2 fadeInUp" data-wow-delay="0.3s">
                     
                        <div className="team-member-thumb">
                            <img src="js/2.png" className="center-block" alt="" />
                        </div>
                       
                        <div className="team-info">
                            <h5>Slans Alons</h5>
                            <p>Business Development</p>
                        </div>
                      
                        <div className="team-social-icon">
                            <a href="https://shrchato.netlify.com/index-demo-3.html#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
              
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-team-member v2 fadeInUp" data-wow-delay="0.4s">
                      
                        <div className="team-member-thumb">
                            <img src="js/3.png" className="center-block" alt="" />
                        </div>
                     
                        <div className="team-info">
                            <h5>Josha Michal</h5>
                            <p>UX/UI Designer</p>
                        </div>
                      
                        <div className="team-social-icon">
                            <a href="https://shrchato.netlify.com/index-demo-3.html#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-team-member v2 fadeInUp" data-wow-delay="0.5s">
                   
                        <div className="team-member-thumb">
                            <img src="js/4.png" className="center-block" alt="" />
                        </div>
               
                        <div className="team-info">
                            <h5>Johan Wright</h5>
                            <p>Head of Marketing</p>
                        </div>
                
                        <div className="team-social-icon">
                            <a href="https://shrchato.netlify.com/index-demo-3.html#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  	</div>
  	)
}

export default Team;