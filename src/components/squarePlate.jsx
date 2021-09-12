import React from 'react';
import img from './itemsImage/square-plates/test.jpg'
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
                  <h1>Areca Leaf Square Plate in Bangalore Karnataka India</h1>
                </div>
    
             <div class="col-md-4">
                <ul><li class="active"><Link to="/"> <i class="fa fa-home"></i> Home</Link></li>
                <li>Areca Leaf Square Plates</li>
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
                    <h2> Areca Leaf Square Plates</h2>   
                    <div class="row">
                        <div class="col-md-5 round">
                          <img src={img} class="img-responsive" alt="Areca Leaf 6 Inch Round Plate" title="Areca Leaf 6 Inch Round Plate"/>
                          <p>Areca Leaf 6 Inch Round Plate</p>
                        </div>
                        
                        <div class="col-md-5 round">
                          <img src={img} class="img-responsive" alt="Areca Leaf 8 Inch Round Plate" title="Areca Leaf 8 Inch Round Plate"/>
                          <p>Areca Leaf 8 Inch Round Plate</p>
                        </div>


                         <div class="col-md-5 round">
                          <img src={img} class="img-responsive" alt="Areca Leaf 10 Inch Round Plate" title="Areca Leaf 10 Inch Round Plate"/>
                          <p>Areca Leaf 10 Inch Round Plate</p>
                        </div>

                         <div class="col-md-5 round">
                          <img src={img} class="img-responsive" alt="Areca Leaf 12 Inch Round Plate" title="Areca Leaf 12 Inch Round Plate"/>
                          <p>Areca Leaf 12 inch Round Plate</p>
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