import React from "react";

function Footer(props) {
  return (
    <div>
      <div className='footer-content-area '>
        <div className='container'>
          <div className='row '>
            <div className='col-12 col-lg-4 col-md-6'>
              <div className='footer-copywrite-info'>
                <div className='copywrite_text fadeInUp'>
                  <div className='footer-logo'>
                    <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                      <img src='./img/logo.png' alt='logo' />
                      Shrchato
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit ducimus voluptatibus neque illo id repellat quisquam?
                    Autem expedita earum quae laborum ipsum ad.
                  </p>
                </div>
                <div
                  className='footer-social-info fadeInUp'
                  data-wow-delay='0.4s'
                >
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-facebook' aria-hidden='true' />
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-twitter' aria-hidden='true' />
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-google-plus' aria-hidden='true' />
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-instagram' aria-hidden='true' />
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-linkedin' aria-hidden='true' />
                  </a>
                </div>
              </div>
            </div>

            <div className='col-12 col-lg-3 col-md-6'>
              <div className='contact_info_area d-sm-flex justify-content-between'>
                <div
                  className='contact_info mt-x text-center fadeInUp'
                  data-wow-delay='0.3s'
                >
                  <h5>PRIVACY &amp; TOS</h5>
                  <a href='https://shrchato.netlify.com/index-demo-3.html'>
                    <p>Advertiser Agreement</p>
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html'>
                    <p>Acceptable Use Policy</p>
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html'>
                    <p>Privacy Policy</p>
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html'>
                    <p>Technology Privacy</p>
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html'>
                    <p>Developer Agreement</p>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-12 col-lg-2 col-md-6 '>
              <div className='contact_info_area d-sm-flex justify-content-between'>
                <div
                  className='contact_info mt-s text-center fadeInUp'
                  data-wow-delay='0.2s'
                >
                  <h5>NAVIGATE</h5>
                  <a href='https://shrchato.netlify.com/index-demo-3.html'>
                    <p>Advertisers</p>
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html'>
                    <p>Developers</p>
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html'>
                    <p>Resources</p>
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html'>
                    <p>Company</p>
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html'>
                    <p>Connect</p>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-12 col-lg-3 col-md-6 '>
              <div className='contact_info_area d-sm-flex justify-content-between'>
                <div
                  className='contact_info mt-s text-center fadeInUp'
                  data-wow-delay='0.4s'
                >
                  <h5>CONTACT US</h5>
                  <p>Mailing Address:xx00 E. Union Ave</p>
                  <p>Suite 1100. Denver, CO 80237</p>
                  <p>+999 90932 627</p>
                  <p>support@yourdomain.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
