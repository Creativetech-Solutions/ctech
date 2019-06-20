import React from 'react';

function Header(props) {
  return (
  	<div>
  	 <header className="header-area fadeInDown" data-wow-delay="0.2s">
        <div className="classy-nav-container light breakpoint-off dark left">
            <div className="container">
                <nav className="classy-navbar justify-content-between" id="dreamNav">
                    <a className="nav-brand light" href="https://shrchato.netlify.com/index-demo-3.html#"><img src="js/logo.png" alt="logo" /> Shrchato</a>
                    <div className="classy-navbar-toggler demo">
                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                    </div>
                    <div className="classy-menu">
                        <div className="classycloseIcon">
                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                        </div>
                        <div className="classynav">
                            <ul id="nav">
                                <li><a href="https://shrchato.netlify.com/index-demo-3.html#home">Home</a></li>
                                <li><a href="https://shrchato.netlify.com/index-demo-3.html#about">About</a></li>
                                <li><a href="https://shrchato.netlify.com/index-demo-3.html#services">Services</a></li>
                                <li><a href="https://shrchato.netlify.com/index-demo-3.html#roadmap">Roadmap</a></li>
                                <li><a href="https://shrchato.netlify.com/index-demo-3.html#team">Team</a></li>
                                <li><a href="https://shrchato.netlify.com/index-demo-3.html#contact">Contact</a></li>
                            </ul>
                            <a href="https://shrchato.netlify.com/index-demo-3.html#" className="btn login-btn ml-50">Log in</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  	</div>
  	)
}

export default Header;