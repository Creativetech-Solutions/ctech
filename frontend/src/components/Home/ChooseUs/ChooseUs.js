import React from "react";

function ChooseUs(props) {
  return (
    <div>
      <section
        className='features section-padding-100-70'
        style={{
          background: "url(img/svg/benefits-bg.svg) no-repeat center left",
        }}
      >
        <div className='section-heading text-center'>
          <div
            className='dream-dots justify-content-center fadeInUp'
            data-wow-delay='0.2s'
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <img
              style={{ width: "150px" }}
              src='img/WEB-DEVELOPMENT-ICON1.png'
              alt=''
            />
          </div>
          <h1 style={{ color: "gray" }}>Why Choose us?</h1>
          <div
            className='row'
            style={{
              marginTop: "50px",
              marginLeft: "100px",
              marginRight: "100px",
            }}
          >
            <div className='col-12 col-sm-6 col-lg-6'>
              <div className='service_single_content box-shadow text-left mb-100 fadeInUp'>
                <label>
                  <h6> Openness And Honesty</h6>
                  Faith is a state of openness or trust.
                </label>
                <br />
                <br />
                <br />
                <label>
                  <h6> Taking Responsibility</h6>
                  The price of greatness is responsibility.
                </label>
                <br />
                <br />
                <br />

                <label>
                  <h6> Teamwork And Support</h6>
                  Talent wins games, but teamwork and intelligence wins
                  championships.
                </label>
              </div>
            </div>

            <div className='col-12 col-sm-6 col-lg-6'>
              <div className='service_single_content box-shadow text-left mb-100 fadeInUp'>
                <label>
                  <h6> Simple Common Sense Solutions</h6>
                  Imagination is more important than knowledge.
                </label>
                <br />
                <br />
                <br />
                <label>
                  <h6> Ingenuity</h6>
                  Ingenuity, plus courage, plus work, equals miracles.
                </label>
                <br />
                <br />
                <br />

                <label>
                  <h6> 90% client retention</h6>
                  Your most unhappy customers are your greatest source of
                  learning.
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChooseUs;
