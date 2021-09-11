import React from 'react';

function LeftNav(props) {
    return (
        <div>
            <div class="col-md-3">
                <div class="service">
                    <h3>Areca Nut Leaf Plates</h3> 
                    <div class="top-eco-list">
                        <li><a href="round-plate"> <i class="fa fa-leaf"></i> Areca Leaf Round Plate </a></li>
                        <li><a href="square-plate"> <i class="fa fa-leaf"></i> Areca Leaf Square Plate </a></li>
                        <li><a href="heart-plate"> <i class="fa fa-leaf"></i> Areca Leaf Heart Plates </a></li>
                    </div>

                    <h3>Areca Nut Leaf Spoon</h3> 
                    <div class="top-eco-list">  
                        <li><a href="/spoons"> <i class="fa fa-leaf"></i> Areca Leaf Spoon </a></li>
                   </div>
                    <h3><i class="fa fa-table"></i> Contact Us</h3> 
                    <div class="top-eco-list"> 
                        <li><a href="#"> <i class="fa fa-phone"></i> +91 9494746272 </a></li>
                        <li><a href="#"> <i class="fa fa-envelope"></i> arecanutleafplates@gmail.com </a></li>
                    </div>
                </div>  
            </div> 
        </div>
    );
}

export default LeftNav;