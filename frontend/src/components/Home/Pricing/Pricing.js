import React, { Component } from "react";
import { get } from "../../../Api";

import "./Pricing.css";

class Pricing extends Component {
  render() {
    return (
      <div
        id='pricing'
        className='section-padding-100-0'
        style={{ paddingTop: "5%" }}
      >
        <h2>PRICING</h2>

        <div className='row vertical-top' style={{ padding: "80px" }}>
          <div className='col-md-3  text-center'>
            <img alt='' src='img/oscommerce.png' className='aligncenter' />
            <h2>Existing Responsive</h2>
            <h4>
              site starts from <em>$500</em>
            </h4>
          </div>
          <div className='col-md-3 text-center'>
            <img alt='' src='img/virtuemart.png' className='aligncenter' />
            <h2>eCommerce</h2>
            <h4>
              site starting from <em>$1200</em>
            </h4>
          </div>
          <div className='col-md-3 text-center'>
            <img alt='' src='img/zencart.png' className='aligncenter' />

            <h2>UI/UX Design</h2>
            <h4>
              starting from <em>$300</em>
            </h4>
          </div>
          <div className='col-md-3 text-center'>
            <img alt='' src='img/oscommerce.png' className='aligncenter' />

            <h2>Responsive</h2>
            <h4>
              site starts from <em>$1200</em>
            </h4>
          </div>
        </div>

        <div
          className='container text-center'
          style={{ backgroundColor: "black" }}
        >
          <h1 className='headline hyper hairline' style={{ padding: "80px" }}>
            Price does not effects the quality we deliver.
          </h1>
        </div>

        <div className='row vertical-top' style={{ padding: "80px" }}>
          <div className='col-md-3  text-center'>
            <img alt='' src='img/Wordpress-logo.png' className='aligncenter' />

            <h2>WordPress</h2>
            <h4>
              site starting from&nbsp;
              <em>
                <strong>$500</strong>
              </em>
            </h4>
          </div>
          <div className='col-md-3 text-center'>
            <img alt='' src='img/joomla-logo.png' className='aligncenter' />

            <h2>Joomla</h2>
            <h4>
              site starting from
              <em>
                <strong>$700</strong>
              </em>
            </h4>
          </div>
          <div className='col-md-3 text-center'>
            <img alt='' src='img/magento.png' className='aligncenter' />

            <h2>Magento</h2>
            <h4>
              site starting from
              <em>
                <strong>$1500</strong>
              </em>
            </h4>
          </div>
          <div className='col-md-3 text-center'>
            <img alt='' src='img/drupal-logo.png' className='aligncenter' />

            <h2>Drupal</h2>
            <h4>
              site starting from
              <em>
                <strong>$2000</strong>
              </em>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
