import React from "react";
import Banner from "./Banner";
import Welcome from "./Welcome";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import News from "./News/News";
import About from '../About/About';
import Service from '../Service/Service';
import Faq from '../Faq/Faq';
import Team from '../Team/Team';

function Home(props) {
  return (
  	<div>
   	<Banner/>

    <section className="features section-padding-100-70" style={{background: 'url(img/svg/benefits-bg.svg) no-repeat center left'}}>
        <div className="section-heading text-center">
            <div className="dream-dots justify-content-center fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
                <img src="js/section-icon-2.svg" alt="" />
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>How it works</h2>
            <p className="fadeInUp" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="service_single_content box-shadow text-center mb-100 fadeInUp">
                        <div className="service_icon video-i">
                            <img className="embed-video" src="js/1.gif" alt="" /> 
                        </div>
                        <h6>Order Your Video</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="service_single_content box-shadow text-center mb-100 fadeInUp">
                        <div className="service_icon video-i">
                            <img className="embed-video" src="js/2.gif" alt="" />
                        </div>
                        <h6>Write Script &amp; Voiceover</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="service_single_content box-shadow text-center mb-100 fadeInUp">
                        <div className="service_icon video-i">
                            <img className="embed-video" src="js/3.gif" alt="" />
                        </div>
                        <h6>Creating Video &amp; Delivery</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <section className="demo-video features section-padding-0-100" style={{background:'url(img/svg/bg_hero.svg) no-repeat center right', borderTop:'none'}}>
        <div className="container">
            <div className="section-heading text-center">
                <div className="dream-dots justify-content-center fadeInUp" data-wow-delay="0.2s">
                    <img src="js/section-icon-1.svg" alt="" />
                </div>
                <h2 className="b-text fadeInUp" data-wow-delay="0.3s">Watch our demo video</h2>
                <p className="fadeInUp" data-wow-delay="0.4s" style={{color:'#888'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
            </div>
            <div className="col-lg-6 col-md-12  col-sm-12">
                <div className="welcome-video-area fadeInUp" data-wow-delay="0.5s">
                    <div className="welcome-thumb">
                        <img src="js/bg-4.jpg" alt="" />
                    </div>
                    <div className="video-icon">
                        <a href="https://www.youtube.com/watch?v=gbXEPHsTkgU" className="btn dream-btn video-btn" id="videobtn"><i className="fa fa-play"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="services-block-four mt-s">
                    <div className="inner-box">
                        <div className="icon-img-box">
                            <img src="js/how1.svg" alt="" />
                        </div>
                        <h3><a href="https://shrchato.netlify.com/index-demo-3.html#">Lots of Pre-made Widgets</a></h3>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.</div>
                        
                    </div>
                </div>
                <div className="services-block-four">
                    <div className="inner-box">
                        <div className="icon-img-box">
                            <img src="js/how2.svg" alt="" />
                        </div>
                        <h3><a href="https://shrchato.netlify.com/index-demo-3.html#">Fully Responsive</a></h3>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit skaj gjska consectetur adipisicing elit.</div>
                        
                    </div>
                </div>
                <div className="services-block-four" style={{marginBottom:'0'}}>
                    <div className="inner-box">
                        <div className="icon-img-box">
                            <img src="js/how3.svg" alt="" />
                        </div>
                        <h3><a href="https://shrchato.netlify.com/index-demo-3.html#">Lots of ilustration Options</a></h3>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi.</div>
                        
                    </div>
                </div>

            </div>
        </div>
    </section>

   	<About/>

    <div className="clearfix"></div>

    <Service/>

    <Faq/>

    <section className="features section-padding-100">
        <div className="container">
            <div className="section-heading text-center">
                <div className="dream-dots justify-content-center fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
                     <img src="js/section-icon-4.svg" alt="" />
                </div>
                <h2 className="fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>Our Marketplace Application</h2>
                <p className="fadeInUp" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="services-column col-lg-5 col-lg-offset-1 col-md-10 offset-md-1 col-xs-10 offset-xs-1">

                    <div className="services-block-four">
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img src="js/feature1.svg" alt="" />
                            </div>
                            <h3><a href="https://shrchato.netlify.com/index-demo-3.html#">Measure the customer experience</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non ipsum dolor sit amet, consectetur adipisicing elit.</div>
                            
                        </div>
                    </div>

                    <div className="services-block-four">
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img src="js/feature2.svg" alt="" />
                            </div>
                            <h3><a href="https://shrchato.netlify.com/index-demo-3.html#">Multi-device testing made simple</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aut repudiandae harum, fugit.</div>
                        </div>
                    </div>
                    
                    <div className="services-block-four" style={{marginBottom:'0'}}>
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img src="js/feature3.svg" alt="" />
                            </div>
                            <h3><a href="https://shrchato.netlify.com/index-demo-3.html#">Launch quickly with reusable templates</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores, ducimus animi a..</div>
                        </div>
                    </div>
                    
                </div>
                <div className="service-img-wrapper col-lg-6 col-md-12 col-sm-12">
                    <div className="image-box">
                        <img src="js/phone3.png" className="center-block img-responsive phone-img" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Team/>
    
      <Welcome />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;