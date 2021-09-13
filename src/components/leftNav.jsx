import React from 'react';
import { Link } from 'react-router-dom';

function LeftNav(props) {
    return (
        <>
            <div class="col-md-3">
                <div class="service">
                    <h3>Areca Leaf Plates</h3> 
                    <div class="top-eco-list">
                        <li><a href ="/round-plate#round-plate"> <i class="fa fa-leaf"></i> Areca Leaf Round Plate </a></li>
                        <li><a href="/square-plate#square-plate"> <i class="fa fa-leaf"></i> Areca Leaf Square Plate </a></li>
                        <li><a href="/heart-plate#heart-plate"> <i class="fa fa-leaf"></i> Areca Leaf Heart Plates </a></li>
                        <li><a href="/rectangle-plate#rectangle-plate"> <i class="fa fa-leaf"></i> Areca Leaf Rectangle Plates </a></li>
                        <li><a href="/oval-plate#oval-plate"> <i class="fa fa-leaf"></i> Areca Leaf Oval Plates </a></li>
                    </div>

                    <h3>Areca Nut Leaf Spoon</h3> 
                    <div class="top-eco-list">  
                        <li><a href="/spoons#spoons"> <i class="fa fa-leaf"></i> Areca Leaf Spoon </a></li>
                        <li><a href="/forks#forks"> <i class="fa fa-leaf"></i> Areca Leaf Fork </a></li>
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