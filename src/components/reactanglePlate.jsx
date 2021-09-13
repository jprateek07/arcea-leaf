import React from 'react';
import img1 from './itemsImage/rectangle-plates/rec1.jpg'
import img2 from './itemsImage/rectangle-plates/rec2.jpg'
import img3 from './itemsImage/rectangle-plates/rec3.jpg'
import img4 from './itemsImage/rectangle-plates/rec4.jpg'
import bannerImg from './itemsImage/heart-plates/areca-nut-leaf-plates-in-bangalore-india.jpg'
import LeftNav from './leftNav';
import { Link } from 'react-router-dom';

function RectanglePlate(props) {
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
            <section class="eco_service" id="rectangle-plate">
    <div class="container">
        <div class="row">
        <LeftNav />
            <div class="col-md-9">
                <div class="content_box">   
                    <h2> Areca Leaf Heart Plates</h2>   
                    <div class="row">
                        <div class="col-md-5 round">
                          <img src={img1} class="img-responsive" alt="Areca Leaf 6 Inch Round Plate" title="Areca Leaf 6 Inch Round Plate"/>
                          <p>Rectangle Dish 16x23cm<br/>16 x 23 x 2 cm<br/>Pack of 25</p>
                        </div>
                        
                        <div class="col-md-5 round">
                          <img src={img2} class="img-responsive" alt="Areca Leaf 8 Inch Round Plate" title="Areca Leaf 8 Inch Round Plate"/>
                          <p>Rectangle Dish 12x20cm<br/>12 x 20 x 2.5 cm<br/>Pack of 25</p>
                        </div>


                         <div class="col-md-5 round">
                          <img src={img3} class="img-responsive" alt="Areca Leaf 10 Inch Round Plate" title="Areca Leaf 10 Inch Round Plate"/>
                          <p>Rectangle Dish 10×4 inch<br/>10 x 4 inch<br/>Pack of 25</p>
                        </div>

                         <div class="col-md-5 round">
                          <img src={img4} class="img-responsive" alt="Areca Leaf 12 Inch Round Plate" title="Areca Leaf 12 Inch Round Plate"/>
                          <p>Boat Tray Rectangle plate<br/>22 x 9 inch<br/>Pack of 25</p>
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

export default RectanglePlate;