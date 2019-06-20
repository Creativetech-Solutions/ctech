import React from "react";

function News(props) {
  return (
    <div>
      <section
        className='our_blog_area news clearfix section-padding-100-70'
        id='blog'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-heading text-center'>
                <div
                  className='dream-dots justify-content-center fadeInUp'
                  data-wow-delay='0.2s'
                >
                  <img src='./img/section-icon-2.svg' alt='' />
                </div>
                <h2 className='fadeInUp' data-wow-delay='0.3s'>
                  Latest News
                </h2>
                <p className='fadeInUp' data-wow-delay='0.4s'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 col-xs-12'>
              <div className='news-post'>
                <div className='news-post-image'>
                  <div className='news-overlay' />
                  <div className='news-category'>
                    <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                      Corporate
                    </a>
                  </div>
                  <img
                    src='./img/1.jpg'
                    alt='Image'
                    className='img-responsive'
                  />
                </div>
                <div className='news-post-text'>
                  <h3>
                    <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                      Why Business Planning is Important
                    </a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts...
                  </p>
                </div>
                <div className='news-post-meta'>
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-user-o' />
                    Admin
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-heart-o' /> 370 likes
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-comments-o' /> 24 comments
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-xs-12'>
              <div className='news-post'>
                <div className='news-post-image'>
                  <div className='news-overlay' />
                  <div className='news-category'>
                    <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                      Business
                    </a>
                  </div>
                  <img
                    src='./img/2.jpg'
                    alt='Image'
                    className='img-responsive'
                  />
                </div>
                <div className='news-post-text'>
                  <h3>
                    <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                      how to achieving Small Business Success
                    </a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts...
                  </p>
                </div>
                <div className='news-post-meta'>
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-user-o' />
                    Admin
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-heart-o' /> 370 likes
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-comments-o' /> 24 comments
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-xs-12'>
              <div className='news-post'>
                <div className='news-post-image'>
                  <div className='news-overlay' />
                  <div className='news-category'>
                    <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                      Marketing
                    </a>
                  </div>
                  <img
                    src='./img/3.jpg'
                    alt='Image'
                    className='img-responsive'
                  />
                </div>
                <div className='news-post-text'>
                  <h3>
                    <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                      Research is What Makes an Effective Business Plan
                    </a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts...
                  </p>
                </div>
                <div className='news-post-meta'>
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-user-o' />
                    Admin
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-heart-o' /> 370 likes
                  </a>
                  <a href='https://shrchato.netlify.com/index-demo-3.html#'>
                    <i className='fa fa-comments-o' /> 24 comments
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;
