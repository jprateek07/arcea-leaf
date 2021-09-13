import React from 'react';
import img1 from './itemsImage/round-plates/round1.jpg'
import img2 from './itemsImage/round-plates/round2.jpg'
import img3 from './itemsImage/round-plates/round3.jpg'
import img4 from './itemsImage/round-plates/round4.jpg'
import bannerImg from './itemsImage/round-plates/areca-nut-leaf-plates-in-bangalore-india.jpg'
import { Link } from 'react-router-dom';

import LeftNav from './leftNav'
function RoundPlate(props) {
    return (
        <div>
            <div class="banner">
                <img src={bannerImg} class="img-responsive" alt="Areca Leaf Round Plate in Bangalore" title="Areca Leaf Round Plate in Bangalore"/>
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
                                <div class="content_box">
                                    <h2> Areca Leaf Round Plates</h2>
                                    <div class="row">
                                        <div class="col-md-5 round">
                                            <img src={img1} class="img-responsive" alt="Areca Leaf 6 Inch Round Plate" title="Areca Leaf 6 Inch Round Plate" />
                                            <p>Standard Round Plate 25cm <br/>25 x 1.5 cm deep<br/>Pack of 25</p>
                                        </div>

                                        <div class="col-md-5 round">
                                            <img src={img2} class="img-responsive" alt="Areca Leaf 8 Inch Round Plate" title="Areca Leaf 8 Inch Round Plate" />
                                            <p>Standard Round Plate 20cm <br/>20x3cm deep<br/>Pack of 25</p>
                                        </div>


                                        <div class="col-md-5 round">
                                            <img src={img3} class="img-responsive" alt="Areca Leaf 10 Inch Round Plate" title="Areca Leaf 10 Inch Round Plate" />
                                            <p>Standard Round Plate 15cm <br/>15 x 3 cm deep<br/>Pack of 25</p>
                                        </div>

                                        <div class="col-md-5 round">
                                            <img src={img4} class="img-responsive" alt="Areca Leaf 12 Inch Round Plate" title="Areca Leaf 12 Inch Round Plate" />
                                            <p>Standard Round Plate 25cm <br/>25 x 2 cm deep<br/>Pack of 25</p>
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

export default RoundPlate;