import React, { Component } from "react";
import { get } from "../../../Api";
import "./Services.css";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: null,
      id: this.props.id,
    };
  }
  // async componentDidMount() {
  //   const services = (await get("service")).data.services;
  //   // console.log(services);
  //   this.setState({
  //     services,
  //   });
  // }

  render() {
    return (
      <section
        className='our_services_area section-padding-100-0 clearfix'
        id={this.state.id}
      >
        <div className='container'>
          <div className='section-heading text-center'>
            <div
              className='dream-dots justify-content-center fadeInUp'
              data-wow-delay='0.2s'
            >
              <img src='img/section-icon-3.svg' alt='' />
            </div>
            <h2 className='fadeInUp' data-wow-delay='0.3s'>
              <b>Services we provide</b>
            </h2>
            <p className='fadeInUp' data-wow-delay='0.4s'>
              We believe in giving clear information about each of the services
              we provide, as well as the standards that we aim to achieve.
            </p>
          </div>

          <div className='row'>
            <div className='col-12 col-sm-6 col-lg-3'>
              <div
                className='service_single_content text-center mb-100 fadeInUp'
                data-wow-delay='0.3s'
                style={{ height: "465px" }}
              >
                <div className='service_icon'>
                  <img src='img/Wordpress.png' alt='' />
                </div>
                <h6>WordPress</h6>
                <p>
                  Create a free website or easily build a blog on WordPress.com.
                  Hundreds of free, customizable, mobile-ready designs and
                  themes. Free hosting and support.
                </p>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-3'>
              <div
                className='service_single_content text-center mb-100 fadeInUp'
                data-wow-delay='0.4s'
                style={{ height: "465px" }}
              >
                <div className='service_icon'>
                  <img src='img/joomla-xxl2.png' alt='' />
                </div>
                <h6>Joomla</h6>
                <p>
                  Joomla is an award-winning content management system (CMS),
                  which enables you to build Web sites and powerful online
                  applications have made Joomla the most popular Web site
                  software available.
                </p>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-3'>
              <div
                className='service_single_content text-center mb-100 fadeInUp'
                data-wow-delay='0.5s'
                style={{ height: "465px" }}
              >
                <div className='service_icon'>
                  <img src='img/magento-logo.png' alt='' />
                </div>
                <h6>Magento</h6>
                <p>
                  Magento is the eCommerce software and platform trusted by the
                  world's leading brands. Grow your online business with
                  Magento.
                </p>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-3'>
              <div
                className='service_single_content text-center mb-100 fadeInUp'
                data-wow-delay='0.6s'
                style={{ height: "465px" }}
              >
                <div className='service_icon'>
                  <img src='img/drupal.png' alt='' />
                </div>
                <h6>Drupal</h6>
                <p>
                  Drupal is a free, open-source web development platform for
                  online content and user communities. Drupal powers some of the
                  busiest sites on the web, and can be adapted to virtually any
                  visual design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
