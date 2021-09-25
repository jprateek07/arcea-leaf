import React,  { useRef, useEffect }  from 'react';
import img1 from './bowls-image/heart-bowl/img1.jpg'
import bannerImg from './itemsImage/round-plates/areca-nut-leaf-plates-in-bangalore-india.jpg'
import { Link } from 'react-router-dom';

import LeftNav from './leftNav'
function HeartBowl(props) {
    const myRef = useRef();

    function scrollToComponent() {
      if (window.location.hash === '#heart-bowl') {
        myRef.current.scrollIntoView();
        myRef.current.focus();
      }
    }
  
    useEffect( () => scrollToComponent(), [] )
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
                <section class="eco_service" >
                    <div class="container">
                        <div class="row">
                        <LeftNav />
                            <div class="col-md-9" id="heart-bowl" ref={myRef}>
                                <div class="content_box">
                                    <h2> Areca Leaf Heart Bowls</h2>
                                    <div class="row">
                                        <div class="col-md-5 round">
                                            <img src={img1} class="img-responsive" alt="Areca Leaf " title="Areca Leaf" />
                                            <p>Heart Shaped Bowls <br/>6 inch<br/></p>
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

export default HeartBowl;