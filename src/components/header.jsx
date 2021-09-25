import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logos/headerLogo.jpg'
function Header(props) {
    return (
        <div>
             <header>
         <div class="container">
             <div class="row">
                <div class="col-md-12">
                   {/* <p>Moving towards Eco Friendly World….. 100% Eco Friendly Products</p> */}
                   </div>
                 </div>
              </div>
    </header>
            <section class="home">
                <div class="container-fluid">
                    <div class="row">

                        <div class="col-md-2">
                            {/* <Link to="/"><img src="images/logo.png" class="img-fluid" alt="" title="" /></Link> */}
                        </div>

                        <div class="col-md-9">
                            <nav class="navbar navbar-default" role="navigation">

                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                    <Link class="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
                                </div>

                                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <div class="navbar-header">
    </div>
                                    <ul class="nav navbar-nav">
                                        <li><Link to="/">  HOME</Link></li>
                                        <li><Link to="/about">ABOUT US</Link></li>

                                        <li class="dropdown">
                                            <Link to="/round-plate" class="dropdown-toggle" data-toggle="dropdown">ARECA PLATES <b class="caret"></b></Link>
                                            <ul class="dropdown-menu">
                                                <li><Link to="/round-plate">Round Plate</Link></li>
                                                <li><Link to="/square-plate">Square Plate</Link></li>
                                                <li><Link to="/heart-plate">Heart Plates</Link></li>
                                                <li><Link to="/rectangle-plate">Rectangle Plates</Link></li>
                                                <li><Link to="/oval-plate">Oval Plates</Link></li>
                                            </ul>
                                        </li>

                                        <li class="dropdown">
                                            <Link to="/spoons" class="dropdown-toggle" data-toggle="dropdown">ARECA SPOONS <b class="caret"></b></Link>
                                            <ul class="dropdown-menu">
                                                <li><Link to="/spoons">Spoons</Link></li>
                                                <li><Link to="/forks">Forks</Link></li>
                                            </ul>
                                        </li>

                                        <li class="dropdown">
                                            <Link to="/duplex" class="dropdown-toggle" data-toggle="dropdown">PAPER PRODUCT <b class="caret"></b></Link>
                                            <ul class="dropdown-menu">
                                                <li><Link to="/duplex">Duplex</Link></li>
                                                <li><Link to="/mg-craft">Mg Craft</Link></li>
                                            </ul>
                                        </li>

                                        <li><Link to="/gallery">GALLERY</Link></li>
                                        <li><Link to="/contact">CONTACT US</Link></li>
                                        <li><Link to="/certificate">CERTIFICATES</Link></li>
                                    </ul>

                                </div>
                            </nav>
                        </div>


                        <div class="col-md-2 call_us">
                            {/* <p><i class="fa fa-phone" aria-hidden="true"> </i> <a href="tel:+91 9494746272">+91 9494746272</a></p> */}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;