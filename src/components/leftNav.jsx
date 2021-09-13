import React from 'react';
import { Link } from 'react-router-dom';

function LeftNav(props) {
    return (
        <>
            <div class="col-md-3">
                <div class="service">
                    <h3>Areca Leaf Plates</h3> 
                    <div class="top-eco-list">
                        <li><Link to="/round-plate#round-plate"> <i class="fa fa-leaf"></i> Areca Leaf Round Plate </Link></li>
                        <li><Link to="/square-plate#square-plate"> <i class="fa fa-leaf"></i> Areca Leaf Square Plate </Link></li>
                        <li><Link to="/heart-plate#heart-plate"> <i class="fa fa-leaf"></i> Areca Leaf Heart Plates </Link></li>
                        <li><Link to="/rectangle-plate#rectangle-plate"> <i class="fa fa-leaf"></i> Areca Leaf Rectangle Plates </Link></li>
                        <li><Link to="/oval-plate#oval-plate"> <i class="fa fa-leaf"></i> Areca Leaf Oval Plates </Link></li>
                    </div>

                    <h3>Areca Nut Leaf Spoon</h3> 
                    <div class="top-eco-list">  
                        <li><Link to="/spoons#spoons"> <i class="fa fa-leaf"></i> Areca Leaf Spoon </Link></li>
                        <li><Link to="/forks#fork"> <i class="fa fa-leaf"></i> Areca Leaf Fork </Link></li>
                   </div>
                    <h3><i class="fa fa-table"></i> Contact Us</h3> 
                    <div class="top-eco-list"> 
                        <li><a href="tel:+4733378901"> <i class="fa fa-phone"></i> +91 9494746272 </a></li>
                        <li><a href="mailto:webmaster@example.com"> <i class="fa fa-envelope"></i> arecanutleafplates@gmail.com </a></li>
                    </div>
                </div>  
            </div> 
        </>
    );
}

export default LeftNav;