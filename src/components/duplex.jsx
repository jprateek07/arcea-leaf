import React,  { useRef, useEffect }  from 'react';

import img from './general/manufacturingProcess.png'
import bannerImg from './general/paperProductBanner.jpg'
import { Link } from 'react-router-dom';

import LeftNav from './leftNav'
function Duplex(props) {
    const myRef = useRef();

    function scrollToComponent() {
      if (window.location.hash === '#duplex') {
        myRef.current.scrollIntoView();
        myRef.current.focus();
      }
    }
  
    useEffect( () => scrollToComponent(), [] )
    return (
        <div>
            <div class="banner">
                <img src={bannerImg} class="img-responsive" alt="Areca Leaf Round Plate in Bangalore" title="Areca Leaf Round Plate in Bangalore" width="100%" />
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
                        <div class="col-md-9" id="duplex" ref={myRef}>
                            <div class="content_box certificate-section">
                                <h2> Duplex Board</h2>
                                <h4 className="my-4 my-md-5 ">  Manufacturing Process:</h4>
                                <div className="duplex-img">
                                    <img src={img} alt="Manufacturing Process" width='100%'/>
                                </div>
                                <h5>Our Coated Duplex Boards are made from 100% recycled fibers and waste papers. The entire manufacturing process of Duplex Board is done without the usage of chlorine, chlorine derivatives or any other potentially harmful chemicals.

The range comprises of different Duplex Paper Boards like L.W.C., H.W.C.C. and White Back, available in a GSM range of 210 - 450 GSM with excellent print ability and good quality properties. We make both reel and sheet orders. We have Jagenberg rewinder from which we are making best quality reels which results in less wastage for the end user.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Duplex;