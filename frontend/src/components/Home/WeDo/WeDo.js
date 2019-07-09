import React, { Component } from "react";
import { get } from "../../../Api";

class WeDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: null,
    };
  }
  async componentDidMount() {
    const services = (await get("service")).data.services;
    // console.log(services);
    this.setState({
      services,
    });
  }
  render() {
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
                    <img src='img/section-icon-2.svg' alt='' />
                  </div>
                  <h2 className='fadeInUp' data-wow-delay='0.3s'>
                    What we do?
                  </h2>
                  <p className='fadeInUp' data-wow-delay='0.4s'>
                    Our Web Application Development Solutions are a Blend of
                    Creativity and Innovation
                  </p>
                </div>
              </div>
            </div>

            <div className='row justify-content-center'>
              {this.state.services === null && <p>Loading Services...</p>}
              {this.state.services &&
                this.state.services.map(service => (
                  <div className='col-lg-4 col-md-6 col-xs-12' key={service.id}>
                    <div className='news-post' style={{ height: "360px" }}>
                      <div
                        className='news-post-image'
                        style={{
                          height: "150px",
                        }}
                      >
                        <div className='news-overlay' />

                        <img
                          src={"img/" + service.avatar}
                          alt={service.name}
                          className='img-responsive'
                          style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            paddingTop: "25px",
                          }}
                        />
                      </div>
                      <div className='news-post-text'>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WeDo;
