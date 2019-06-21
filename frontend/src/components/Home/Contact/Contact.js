import React from "react";

function Contact(props) {
  return (
    <div>
      <div className='contact_us_area section-padding-100-0' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-heading text-center'>
                <div
                  className='dream-dots justify-content-center fadeInUp'
                  data-wow-delay='0.2s'
                >
                  <img src='./img/section-icon-5.svg' alt='' />
                </div>
                <h2 className='fadeInUp' data-wow-delay='0.3s'>
                  Contact With Us
                </h2>
                <p className='fadeInUp' data-wow-delay='0.4s'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-8'>
              <div className='contact_form'>
                <form
                  action='https://shrchato.netlify.com/index-demo-3.html#'
                  method='post'
                  id='main_contact_form'
                  novalidate=''
                >
                  <div className='row'>
                    <div className='col-12'>
                      <div id='success_fail_info' />
                    </div>

                    <div className='col-12 col-md-6'>
                      <div className='group fadeInUp' data-wow-delay='0.2s'>
                        <input type='text' name='name' id='name' required='' />
                        <span className='highlight' />
                        <span className='bar' />
                        <label>Name</label>
                      </div>
                    </div>
                    <div className='col-12 col-md-6'>
                      <div className='group fadeInUp' data-wow-delay='0.3s'>
                        <input
                          type='text'
                          name='email'
                          id='email'
                          required=''
                        />
                        <span className='highlight' />
                        <span className='bar' />
                        <label>Email</label>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='group fadeInUp' data-wow-delay='0.4s'>
                        <input
                          type='text'
                          name='subject'
                          id='subject'
                          required=''
                        />
                        <span className='highlight' />
                        <span className='bar' />
                        <label>Subject</label>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='group fadeInUp' data-wow-delay='0.5s'>
                        <textarea name='message' id='message' required='' />
                        <span className='highlight' />
                        <span className='bar' />
                        <label>Message</label>
                      </div>
                    </div>
                    <div
                      className='col-12 text-center fadeInUp'
                      data-wow-delay='0.6s'
                    >
                      <button type='submit' className='btn dream-btn'>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
