import React from 'react';
import img from './contactusImage/contact.jpg'
import { Link } from 'react-router-dom';

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
                            <h1>Contact Us Areca Nut Leaf Plates in india </h1>

                            <p><Link to="/">Home »</Link> contact us </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact_heading">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 contact_plates">
                            <h2>Office Address</h2>

                            <p><strong><i class="fa fa-table"></i> Address</strong> <br /> Bangalore, Karnataka India</p>

                            <p><strong> <i class="fa fa-envelope"></i> Email</strong> <br />
                                    info@admissiongroup.com</p>

                            <p><strong><i class="fa fa-phone"></i> Mobile</strong> <br />
                                        9494746272</p>

                        </div>

                        <div class="col-md-7">
                            <h2>Get in Touch</h2>
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="" value="" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" name="" value="" placeholder="E-mail" />
                                </div>
                                <div class="form-group">
                                    <input type="tel" class="form-control" name="" value="" placeholder="Phone" />
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
                <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=paras%20hotel%20udaipur+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="My location" frameborder="0" allowfullscreen=""></iframe>

            </div>

        </div>
    );
}

export default Contact;