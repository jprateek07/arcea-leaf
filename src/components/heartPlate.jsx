import React,  { useRef, useEffect }  from 'react';
import img1 from './itemsImage/heart-plates/heart1.jpg'
import img2 from './itemsImage/heart-plates/heart2.jpg'
import bannerImg from './itemsImage/heart-plates/areca-nut-leaf-plates-in-bangalore-india.jpg'
import LeftNav from './leftNav';
import { Link } from 'react-router-dom';

function RoundPlate(props) {
  const myRef = useRef();

    function scrollToComponent() {
      if (window.location.hash === '#heart-plate') {
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
                  {/* <h1>Areca Leaf Heart Plate in india India</h1> */}
                </div>
    
             <div class="col-md-4">
                <ul>
                  {/* <li class="active"><Link to="/"> <i class="fa fa-home"></i> Home</Link></li>
                <li>Areca Leaf Heart Plates</li> */}
              </ul>
          </div>
     
              </div>
            </div>
       </div> 
            <section class="eco_service">
    <div class="container">
        <div class="row">
        <LeftNav />
            <div class="col-md-9" id="heart-plate" ref={myRef}>
                <div class="content_box">   
                    <h2> Areca Leaf Heart Plates</h2>   
                    <div class="row">
                        <div class="col-md-5 round">
                          <img src={img1} class="img-responsive" alt="Areca Leaf 6 Inch Round Plate" title="Areca Leaf 6 Inch Round Plate"/>
                          <p>10cm Heart Plate<br/>Pack of 10 & 25</p>
                        </div>
                        
                        <div class="col-md-5 round">
                          <img src={img2} class="img-responsive" alt="Areca Leaf 8 Inch Round Plate" title="Areca Leaf 8 Inch Round Plate"/>
                          <p>16cm Heart Dish<br/>Pack of 10 & 25</p>
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