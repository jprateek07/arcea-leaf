import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logos/logo.jpg'
function Footer(props) {
    return (
        <div>
            <div class="footer-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="footer-widget about-widget">
                            <h3 class="fw-title">Benefits of areca products</h3>
                                <ul className="highlights">
                                    <li>100% Biodegradable and Compostable</li>
                                    <li>Microwave and Refrigeration Safe</li>
                                    <li>No chemicals Used in the Process.</li>
                                    <li>Eco-Friendly Disposable</li>
                                    <li>Strong and Lightweight.</li>
                                    <li>Can be used for Solid and Liquid Foods.</li>
                                    <li>Suitable for all Occasions.</li>
                                </ul>                                
                                {/* <div class="footer-social">
                                    <a href=""><i class="fab fa-facebook"></i></a>
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-youtube"></i></a>

                                </div> */}
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="footer-widget">
                                <h3 class="fw-title">Certificates</h3>
                                <ul>
                                    <li><a href="/certificate">Important Certificates </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="footer-widget">
                                <h3 class="fw-title">Our Eco-Products </h3>
                                <ul>
                                    <li><Link to="/round-plate">Areca Leaf Round Plate</Link></li>
                                    <li><Link to="/square-plate">Areca Leaf Square Plate</Link></li>
                                    <li><Link to="/heart-plate">Areca Leaf Heart Plate</Link></li>
                                    <li><Link to="/rectangle-plate">Areca Leaf Rectangle Plate</Link></li>
                                    <li><Link to="/oval-plate">Areca Leaf Oval Plate</Link></li>
                                    <li><Link to="/spoons">Areca Leaf Spoon</Link></li>
                                    <li><Link to="/forks">Areca Leaf Fork</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-buttom">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 order-2 order-lg-1 p-0">
                                <div class="copyright">© Copyrights Ayesha International 2021. All rights reserved. </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="footerone">
                <ul>
                    <li><a data-rel="external" href="tel:+919494746272"><i class="fa fa-2x fa-phone"></i></a></li>
                    <li><a data-rel="external" href="https://api.whatsapp.com/send?phone=+919494746272&text=" target="_blank">
                        <i class="fab fa-2x fa-whatsapp"></i></a></li>
                    <li><a data-rel="external" href="mailto:svharish18@gmail.com"><i class="far fa-2x fa-envelope"></i></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;