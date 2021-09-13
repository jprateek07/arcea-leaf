import React from 'react';
import img1 from './itemsImage/round-plates/round1.jpg'
import img2 from './itemsImage/round-plates/round2.jpg'
import img3 from './itemsImage/round-plates/round3.jpg'
import img4 from './itemsImage/round-plates/round4.jpg'
import bannerImg from './itemsImage/round-plates/areca-nut-leaf-plates-in-bangalore-india.jpg'
import { Link } from 'react-router-dom';

import LeftNav from './leftNav'
function Certificate(props) {
    return (
        <div>
            <div class="banner">
                <img src={bannerImg} class="img-responsive" alt="Areca Leaf Round Plate in Bangalore" title="Areca Leaf Round Plate in Bangalore" />
            </div>

            <div class="round-plate">
                <div class="container">
                    <div class="row">

                        <div class="col-md-8">
                            {/* <h1>Areca Leaf Round Plate in india India</h1> */}
                        </div>

                        <div class="col-md-4">
                            <ul>
                                {/* <li class="active"><Link to="/"> <i class="fa fa-home"></i> Home</Link></li>
                                    <li>Areca Leaf Round Plates</li> */}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <section class="eco_service">
                <div class="container">
                    <div class="row">
                        <LeftNav />
                        <div class="col-md-9">
                            <div class="content_box certificate-section">
                                <h2> Areca Leaf Round Plates</h2>
                                <div class="row">
                                    <div class="col-md-3 round">
                                        <div className="certificate-icon my-3 ">
                                        <i class="far fa-file-pdf fa-2x"></i>
                                        </div>
                                        <p>Certificate of Registration</p>
                                    </div>
                                    <div class="col-md-3 round">
                                        <div className="certificate-icon my-3">
                                        <i class="far fa-file-pdf fa-2x"></i>
                                        </div>
                                        <p>Certificate of Importer-Exporter Code (IEC)</p>
                                    </div>
                                    <div class="col-md-3 round">
                                        <div className="certificate-icon my-3">
                                        <i class="far fa-file-pdf fa-2x"></i>
                                        </div>
                                        <p>APEDA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Certificate;