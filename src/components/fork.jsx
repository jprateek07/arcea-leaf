import React,  { useRef, useEffect }  from 'react';
import img from './itemsImage/forks/fork1.jpg'
import bannerImg from './itemsImage/spoons/areca-nut-leaf-plates-in-bangalore-india.jpg'
import LeftNav from './leftNav';
import { Link } from 'react-router-dom';

function Fork(props) {
    const myRef = useRef();

  function scrollToComponent() {
    if (window.location.hash === '#fork') {
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
                  {/* <h1>Areca Leaf Fork in india India</h1> */}
                </div>
    
             <div class="col-md-4">
                <ul>
                  {/* <li class="active"><Link to="/"> <i class="fa fa-home"></i> Home</Link></li>
                <li>Areca Leaf Fork</li> */}
              </ul>
          </div>
     
              </div>
            </div>
       </div> 
            <section class="eco_service" >
                <div class="container">
                    <div class="row">
                        <LeftNav />
                        <div class="col-md-9" ref={myRef} id="fork" >
                            <div class="content_box">
                                <h2> Areca Leaf Spoons</h2>
                                <div class="row">
                                    <div class="col-md-5 round">
                                        <img src={img} class="img-responsive" alt="Areca Leaf 6 Inch Round Plate" title="Areca Leaf 6 Inch Round Plate" />
                                        <p>Cutlery Fork<br />16 cm Pack of 25</p>
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

export default Fork;