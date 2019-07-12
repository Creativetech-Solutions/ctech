import React from 'react';

function Faq(props) {
  return (
  	<div>
    <div className="faq-timeline-area section-padding-100">
        <div className="container">
            <div className="section-heading text-center">
               
                <div className="dream-dots justify-content-center fadeInUp" data-wow-delay="0.2s">
                    <img src="js/section-icon-5.svg" alt="" />
                </div>
                <h2 className="fadeInUp" data-wow-delay="0.3s">Pre-Sale Frequently Questions</h2>
                <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6 col-md-12">
                    

                    <div className="dream-faq-area">
                        <dl style={{marginBottom:'0'}}>
                           
                            <dt className="wave fadeInUp" data-wow-delay="0.2s">What are the objectives of this business?</dt>
                            <dd className="fadeInUp" data-wow-delay="0.3s">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
                            </dd>
                            
                            <dt className="wave fadeInUp" data-wow-delay="0.3s">What is business Sale and pre-sale?</dt>
                            <dd style={{display: 'none'}}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
                            </dd>
                            
                            <dt className="wave fadeInUp" data-wow-delay="0.4s">What is the pre-sale start date?</dt>
                            <dd style={{display: 'none'}}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
                            </dd>
                            
                            <dt className="wave fadeInUp" data-wow-delay="0.4s">What is the business distribution end date?</dt>
                            <dd style={{display: 'none'}}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
                            </dd>
                            
                            <dt className="wave fadeInUp" data-wow-delay="0.5s">how may I take part in pre-sale?</dt>
                            <dd style={{display: 'none'}}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
                            </dd>
                        </dl>
                    </div>
                </div>

                <div className="col-12 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                    <img src="js/0faq.png" alt="" className="center-block img-responsive" />
                </div>
            </div>
        </div>
    </div>
  	</div>
  	)
}

export default Faq;