import React from "react";

function Welcome(props) {
  return (
    <div>
      <section
        className='features section-padding-100-70'
        style={{
          background: "url(/img/svg/benefits-bg.svg) no-repeat center left"
        }}
      >
        <div className='section-heading text-center'>
          <div
            className='dream-dots justify-content-center fadeInUp'
            data-wow-delay='0.2s'
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp"
            }}
          >
            <img src='/js/section-icon-2.svg' alt='' />
          </div>
          <h2
            className='fadeInUp'
            data-wow-delay='0.3s'
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp"
            }}
          >
            How it works
          </h2>
          <p
            className='fadeInUp'
            data-wow-delay='0.4s'
            style={{
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeInUp"
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-6 col-lg-4'>
              <div className='service_single_content box-shadow text-center mb-100 fadeInUp'>
                <div className='service_icon video-i'>
                  <img className='embed-video' src='/js/1.gif' alt='' />
                </div>
                <h6>Order Your Video</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maximus ut accumsan ut, posuere sit.
                </p>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4'>
              <div className='service_single_content box-shadow text-center mb-100 fadeInUp'>
                <div className='service_icon video-i'>
                  <img className='embed-video' src='/js/2.gif' alt='' />
                </div>
                <h6>Write Script &amp; Voiceover</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maximus ut accumsan ut, posuere sit.
                </p>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4'>
              <div className='service_single_content box-shadow text-center mb-100 fadeInUp'>
                <div className='service_icon video-i'>
                  <img className='embed-video' src='/js/3.gif' alt='' />
                </div>
                <h6>Creating Video &amp; Delivery</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maximus ut accumsan ut, posuere sit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
