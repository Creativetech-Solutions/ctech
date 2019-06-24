import React from 'react';

function About(props) {
  return (
  	<div>
  	 <div className="double-bg">
        <section className="about-us-area section-padding-0-0 clearfix" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="welcome-meter fadeInUp" data-wow-delay="0.7s">
                            <img src="js/about11.png" className="img-responsive center-block" alt="" />
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="who-we-contant mt-s">
                            <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
                                <img src="js/section-icon-1.svg" alt="" />
                            </div>
                            <h4 className="fadeInUp" data-wow-delay="0.3s">Explainer videos that simplify your brand’s message.</h4>
                            <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                            <p className="fadeInUp" data-wow-delay="0.5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo beatae placeat laboriosam dignissimos corrupti ut rem.</p>
                            <a className="btn dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="https://shrchato.netlify.com/index-demo-3.html#">Read More</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section className="about-us-area section-padding-100 clearfix">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-12 col-lg-6 ">
                        <div className="who-we-contant">
                            <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
                                <img src="js/section-icon-2.svg" alt="" />
                            </div>
                            <h4 className="fadeInUp" data-wow-delay="0.3s">Build, edit and create a custom test framework in minutes.</h4>
                            <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                            <p className="fadeInUp" data-wow-delay="0.5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus similique aliquam consequuntur saepe numquam suscipit praesentium fuga eveniet error assumenda eos!</p>
                            <a className="btn dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="https://shrchato.netlify.com/index-demo-3.html#">Read More</a>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="welcome-meter fadeInUp" data-wow-delay="0.7s">
                            <img src="js/about12.png" className="center-block" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  	</div>
  	)
}

export default About;