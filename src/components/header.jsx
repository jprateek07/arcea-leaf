import React from 'react';

function Header(props) {
    return (
        <div>
             <header>
         <div class="container">
             <div class="row">
                <div class="col-md-12">
                   <p>Moving towards Eco Friendly World….. 100% Eco Friendly Products</p>
                   </div>
                 </div>
              </div>
    </header>
            <section class="home">
                <div class="container-fluid">
                    <div class="row">

                        <div class="col-md-2">
                            <a href="#"><img src="images/logo.png" class="img-fluid" alt="" title="" /></a>
                        </div>

                        <div class="col-md-8">
                            <nav class="navbar navbar-default" role="navigation">

                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>

                                </div>

                                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul class="nav navbar-nav">
                                        <li><a href="/"> <i class="fa fa-home" aria-hidden="true"> HOME</i></a></li>
                                        <li><a href="/about">ABOUT US</a></li>

                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">ARECA PLATES <b class="caret"></b></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/round-plate">Round Plate</a></li>
                                                <li><a href="/square-plate">Square Plate</a></li>
                                                <li><a href="/heart-plate">Heart Plates</a></li>
                                            </ul>
                                        </li>

                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">ARECA SPOONS <b class="caret"></b></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/spoons">Spoons</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="/gallery">GALLERY</a></li>
                                        <li><a href="/contact">CONTACT US</a></li>

                                    </ul>

                                </div>
                            </nav>
                        </div>


                        <div class="col-md-2 call_us">
                            <p><i class="fa fa-phone" aria-hidden="true"> </i> <a href="tel:+91 9494746272">+91 9494746272</a></p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;