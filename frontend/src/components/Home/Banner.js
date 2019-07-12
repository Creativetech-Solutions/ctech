import React from 'react';

function Banner(props) {
  return (
  	<div>
  	 <section className="welcome_area clearfix dzsparallaxer auto-init none fullwidth mode-scroll animation-engine-js dzsprx-readyall" data-options="{direction: &quot;normal&quot;}" id="home">
        <div className="divimage dzsparallaxer--target" style={{width: '101%', height: '130%', backgroundImage: 'url(img/bg-img/bg-5-2.png)', transform: 'translate3d(0px, -104px, 0px)'}}></div>
        <div className="hero-content transparent">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 col-lg-6 col-md-12">
                        <div className="welcome-content">
                            <div className="promo-section">
                                <div className="integration-link dark-int">
                                    <span className="integration-icon">
                                        <img src="js/img-dollar.svg" width="24" height="24" alt="" />
                                    </span>
                                    <span className="integration-text">Discover a new ways to enjoy your World!</span>
                                </div>
                            </div>
                            <h1 className="big fadeInUp" data-wow-delay="0.2s">Creative Digital Agency brand’s message. </h1>
                            <p className="w-text fadeInUp" data-wow-delay="0.3s">We have over 15 year exprience in business consultting arena. We have over 15 year exprience in business consultting arena and artficial intelligence.</p>
                            <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                <a href="https://shrchato.netlify.com/index-demo-3.html#" className="btn dream-btn mr-3">Join Pre-Sale</a>
                                <a href="https://shrchato.netlify.com/index-demo-3.html#" className="btn dream-btn"> Whitepaper</a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
  	</div>
  	)
}

export default Banner;