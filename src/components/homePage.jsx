import React from 'react';
import img1 from './itemsImage/heart-plates/heart1.jpg'
import img2 from './itemsImage/heart-plates/heart2.jpg'
import img3 from './itemsImage/rectangle-plates/rec1.jpg'
import img4 from './itemsImage/rectangle-plates/rec2.jpg'
import img5 from './itemsImage/square-plates/sq1.jpg'
import img6 from './itemsImage/square-plates/sq2.jpg'
import img7 from './itemsImage/oval-plates/oval1.jpg'
import img8 from './itemsImage/oval-plates/oval2.jpg'
import img9 from './itemsImage/spoons/spoon1.jpg'
import img10 from './itemsImage/round-plates/round1.jpg'
import img11 from './itemsImage/forks/fork1.jpg'


import img from './home-page-image/homepage.jpg'
import { Link } from 'react-router-dom';

function HomePage(props) {
    return (
        <div>

            <div class="banner">
                <img src={img} class="img-responsive" title="" alt="" />
            </div>
            <div class="main_head">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>Ayesha International Leaf Plates </h1>
                            <p>Welcome to Ayesha International <strong><Link to="/">Areca nut Leaf Plates</Link></strong> in Bangalore, Karnataka India which was a dream that came true in the year 2010 with the right work and efforts of Harish SV to bring a positive change to our society. The team at Ayesha International <strong><Link to="/">Areca Leaf Plates</Link></strong> has a fundamental belief to work towards conservation of our nature and saving the environment through plastic waste which is difficult to decompose. <Link to="/" class="more"><strong>More</strong></Link></p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="areca_plates">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Areca Leaf Products</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container products">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="single">
                            <div class="box">
                                <img src={img1} alt="" />
                                {/* <div class="box-content">
                                    <h3 class="title">Ayesha International Areca Leaf</h3>
                                    <span class="post"><Link to="/"> <i class="fa fa-forward"></i> Read More</Link></span>
                                </div> */}
                            </div>
                            <Link to="/heart-plate"> <p> 10cm Heart Plate </p></Link>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                        <div class="single">
                            <div class="box">
                                <img src={img10} alt="" />
                                {/* <div class="box-content">
                                    <h3 class="title">Ayesha International Areca Leaf</h3>
                                    <span class="post"><Link to="/"> <i class="fa fa-forward"></i> Read More</Link></span>
                                </div> */}
                            </div>
                            <Link to="/round-plate"> <p> Shallow Round Plate 18.5cm</p></Link>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                        <div class="single">
                            <div class="box">
                                <img src={img3} alt="" />
                                {/* <div class="box-content">
                                    <h3 class="title">Ayesha International Areca Leaf</h3>
                                    <span class="post"><Link to="/"> <i class="fa fa-forward"></i> Read More</Link></span>
                                </div> */}
                            </div>
                            <Link to="/rectangle-plate"> <p> Rectangle Dish 16x23cm</p></Link>
                        </div>
                    </div>

                </div>
            </div>




            <div class="container products">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="single">
                            <div class="box">
                                <img src={img4} alt="" />
                                {/* <div class="box-content">
                                    <h3 class="title">Ayesha International Areca Leaf</h3>
                                    <span class="post"><Link to="/"> <i class="fa fa-forward"></i> Read More</Link></span>
                                </div> */}
                            </div>
                            <Link to="/rectangle-plate"> <p> Rectangle Dish 12x20cm</p></Link>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                        <div class="single">
                            <div class="box">
                                <img src={img5} alt="" />
                                {/* <div class="box-content">
                                    <h3 class="title">Ayesha International Areca Leaf</h3>
                                    <span class="post"><Link to="/"> <i class="fa fa-forward"></i> Read More</Link></span>
                                </div> */}
                            </div>
                            <Link to="/square-plate"> <p> Standard Square Plate 25×2.7cm  </p></Link>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                        <div class="single">
                            <div class="box">
                                <img src={img6} alt="" />
                                {/* <div class="box-content">
                                    <h3 class="title">Ayesha International Areca Leaf</h3>
                                    <span class="post"><Link to="/"> <i class="fa fa-forward"></i> Read More</Link></span>
                                </div> */}
                            </div>
                            <Link to="/square-plate"> <p> Flat Square Plate 20x 1.5cm </p></Link>
                        </div>
                    </div>

                </div>
            </div>


            <div class="container products">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="single">
                            <div class="box">
                                <img src={img7} alt="" />
                                {/* <div class="box-content">
                                    <h3 class="title">Ayesha International Areca Leaf</h3>
                                    <span class="post"><Link to="/"> <i class="fa fa-forward"></i> Read More</Link></span>
                                </div> */}
                            </div>
                            <Link to="/oval-plate"> <p> Oval Dish 17x 32cm</p></Link>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                        <div class="single">
                            <div class="box">
                                <img src={img11} alt="" />
                                {/* <div class="box-content">
                                    <h3 class="title">Ayesha International Areca Leaf</h3>
                                    <span class="post"><Link to="/"> <i class="fa fa-forward"></i> Read More</Link></span>
                                </div> */}
                            </div>
                            <Link to="/forks"> <p> Cutlery Fork </p></Link>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                        <div class="single">
                            <div class="box">
                                <img src={img9} alt="" />
                                {/* <div class="box-content">
                                    <h3 class="title">Ayesha International Areca Leaf</h3>
                                    <span class="post"><Link to="/"> <i class="fa fa-forward"></i> Read More</Link></span>
                                </div> */}
                            </div>
                            <Link to="/spoons"> <p>Spoon</p></Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default HomePage;