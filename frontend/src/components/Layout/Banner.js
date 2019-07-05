import React from "react";

function Banner(props) {
  return (
    <div>
      <section
        className='welcome_area clearfix dzsparallaxer auto-init none fullwidth mode-scroll animation-engine-js dzsprx-readyall'
        data-options='{direction: "normal"}'
        id='home'
      >
        <div
          className='divimage dzsparallaxer--target'
          style={{
            width: "101%",
            height: "130%",
            backgroundImage: "url(img/bg-img/bg-5-2.png)",
            transform: "translate3d(0px, -104px, 0px)",
          }}
        />
        <div className='hero-content transparent'>
          <div className='container h-100'>
            <div className='row h-100 align-items-center'>
              <div className='col-12 col-lg-6 col-md-12'>
                <div
                  className='welcome-content text-center'
                  style={{
                    paddingRight: "200px",
                  }}
                >
                  <h1 className='big fadeInUp' data-wow-delay='0.2s'>
                    CREATIVE TECH SOLUTIONS
                  </h1>
                  <p className='w-text fadeInUp' data-wow-delay='0.3s'>
                    where ideas become vivid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
