import React, { Component } from "react";
// import axios from "axios";
import { post } from "../../../Api";

class Contact extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      subject: "",
      msg: "",
    };
  }
  onChange(e) {
    this.setState({
      name: document.getElementById("name").value,
      email: document.getElementById("emailid").value,
      subject: document.getElementById("subject").value,
      msg: document.getElementById("msg").value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
  }

  async onSubmit(e) {
    e.preventDefault();
    const contactData = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.msg,
    };

    await post("message", contactData);
  }

  render() {
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
                    <img src='img/section-icon-5.svg' alt='' />
                  </div>
                  <h2 className='fadeInUp' data-wow-delay='0.3s'>
                    Want to talk?
                  </h2>
                  <p className='fadeInUp' data-wow-delay='0.4s'>
                    Thank you for taking the time to visit our website. Your
                    questions and/or comments are important to us and we take
                    our communication with you very seriously. For your
                    convenience, we have provided several ways to reach us.
                    Please contact us with any questions, concerns, to request
                    more information, or to schedule an appointment.
                  </p>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-12 col-md-10 col-lg-8'>
                <div className='contact_form'>
                  <form onSubmit={this.onSubmit} method='post' id='contact'>
                    <div className='row'>
                      <div className='col-12 col-md-6'>
                        <div className='group fadeInUp' data-wow-delay='0.2s'>
                          <label>Name</label> <br />
                          <input
                            type='text'
                            name='name'
                            id='name'
                            value={this.state.name}
                            onChange={this.onChange}
                            required
                          />
                        </div>
                      </div>
                      <div className='col-12 col-md-6'>
                        <div className='group fadeInUp' data-wow-delay='0.2s'>
                          <label>Email</label> <br />
                          <input
                            type='text'
                            name='email'
                            id='emailid'
                            value={this.state.emailid}
                            onChange={this.onChange}
                            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='group fadeInUp' data-wow-delay='0.4s'>
                          <label>Subject</label>
                          <br />
                          <input
                            type='text'
                            name='subject'
                            id='subject'
                            value={this.state.subject}
                            onChange={this.onChange}
                            required
                          />
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='group fadeInUp' data-wow-delay='0.5s'>
                          <label>Message</label>
                          <br />
                          <textarea
                            name='message'
                            id='msg'
                            value={this.state.msg}
                            onChange={this.onChange}
                            required
                          />
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
}
export default Contact;
