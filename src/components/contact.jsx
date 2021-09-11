import React from 'react';
import img from './contactusImage/contact.jpg'
function Contact(props) {
    return (
        <div>
            <div class="contact_us">
                <img src={img} class="img-responsive" alt="Areca Nut Leaf Plates Contact Us Bengaluru" title="Areca Nut Leaf Plates Contact Us Bengaluru" />

            </div>


            <section class="contact-areca-nut">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>Contact Us Areca Nut Leaf Plates in Bangalore Karnataka </h1>

                            <p><a href="#">Home »</a> contact us </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact_heading">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 contact_plates">
                            <h2>Office Address</h2>

                            <p><strong><i class="fa fa-table"></i> Address</strong> <br/> Bangalore, Karnataka India</p>

                                <p><strong> <i class="fa fa-envelope"></i> Email</strong> <br/>   
                                    info@admissiongroup.com</p>

                                    <p><strong><i class="fa fa-phone"></i> Mobile</strong> <br/>    
                                        9494746272</p> 

                        </div>

                                    <div class="col-md-7">
                                        <h2>Get in Touch</h2>
                                        <form>
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="" value="" placeholder="Name"/>
                  </div>
                                                <div class="form-group">
                                                    <input type="email" class="form-control" name="" value="" placeholder="E-mail"/>
                  </div>
                                                    <div class="form-group">
                                                        <input type="tel" class="form-control" name="" value="" placeholder="Phone"/>
                  </div>
                                                        <div class="form-group">
                                                            <textarea class="form-control" name="" rows="3" placeholder="Message"></textarea>
                                                        </div>
                                                        <button class="btn btn-default" type="submit" name="button">
                                                            <i class="fa fa-paper-plane-o" aria-hidden="true"></i> Submit
                  </button>
                </form>
                                                </div>


                                            </div>
            </div>
           </section>
           <div class="map">
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.6600749384!2d77.35073385808276!3d12.954517011116248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1579784989377!5m2!1sen!2sin" frameborder="0" allowfullscreen=""></iframe>   

  </div>

        </div>
    );
}

export default Contact;