import React from 'react';
import img1 from './itemsImage/square-plates/sq1.jpg'
import img2 from './itemsImage/square-plates/sq2.jpg'
import img3 from './itemsImage/square-plates/sq3.jpg'
import img4 from './itemsImage/square-plates/sq4.jpg'
import bannerImg from './itemsImage/square-plates/areca-nut-leaf-plates-in-bangalore-india.jpg'
import LeftNav from './leftNav';
import { Link } from 'react-router-dom';

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
                  {/* <h1>Areca Leaf Square Plate in india India</h1> */}
                </div>
    
             <div class="col-md-4">
                <ul>
                  {/* <li class="active"><Link to="/"> <i class="fa fa-home"></i> Home</Link></li>
                <li>Areca Leaf Square Plates</li> */}
              </ul>
          </div>
     
              </div>
            </div>
       </div> 
            <section class="eco_service" id="square-plate">
    <div class="container">
        <div class="row">
            <LeftNav />
            <div class="col-md-9">
                <div class="content_box">   
                    <h2> Areca Leaf Square Plates</h2>   
                    <div class="row">
                        <div class="col-md-5 round">
                          <img src={img1} class="img-responsive" alt="Areca Leaf 6 Inch Round Plate" title="Areca Leaf 6 Inch Round Plate"/>
                          <p>Standard Square Plate<br/>Size: 25×2.7cm deep<br/>Pack of 10 & 25</p>
                        </div>
                        
                        <div class="col-md-5 round">
                          <img src={img2} class="img-responsive" alt="Areca Leaf 8 Inch Round Plate" title="Areca Leaf 8 Inch Round Plate"/>
                          <p>Flat Square Plate<br/>Size: 20×1.5cm deep<br/>Pack of 10 & 25</p>
                        </div>


                         <div class="col-md-5 round">
                          <img src={img3} class="img-responsive" alt="Areca Leaf 10 Inch Round Plate" title="Areca Leaf 10 Inch Round Plate"/>
                          <p>Flat Square Plate<br/>Size: 15x 1.5cm deep<br/>Pack of 10 & 25</p>
                        </div>

                         <div class="col-md-5 round">
                          <img src={img4} class="img-responsive" alt="Areca Leaf 12 Inch Round Plate" title="Areca Leaf 12 Inch Round Plate"/>
                          <p>Classic Square<br/>Size: 15x 1.5cm deep<br/>Pack of 10 & 25</p>
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