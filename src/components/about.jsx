import React from 'react';
import bannerImg from './aboutus/areca-nut-leaf-plates-in-bangalore-india.jpg'
import LeftNav from './leftNav'
import { Link } from 'react-router-dom';
function About(props) {
    return (
        <div className="container">
            <div class="about_banner">
                <img src={bannerImg} class="img-responsive" alt="Areca nut Leaf Plates in Bangalore India" title="Areca nut Leaf Plates in Bangalore India" />
            </div>
            <LeftNav />
            <section class="heading-about">
                <div class="container">
                    <div class="row">

                        <div class="col-md-9">
                            <h1>About Ayesha International Leaf Plates  </h1>

                            <p>Welcome to <strong><Link to="/">Ayesha International Leaf Plates </Link></strong> which was a dream that came true in the year 2010 with the right work and efforts of Harish SV to bring a positive change to our society. The team at Ayesha International has a fundamental belief to work towards conservation of our nature and saving the environment through plastic waste which is difficult to decompose. Today being one of the renowned players for <strong><Link to="/about"> Ayesha International Leaf Plates </Link></strong> we continuously keep on sending message to society regarding the importance of biodegradable Areca products, thus encouraging for a green India with healthy environment. Our company has been creating new landmarks in this industry by providing solution to all needs in this vertical.</p>

                            <img src={bannerImg} class="img-responsive" alt="Areca Leaf Plates in Bangalore India" title="Areca Leaf Plates in Bangalore India" />

                            <p>We exist in all parts of Karnataka and India, making our visibility grow day by day. Thus we are promising nature friendly alternative to plastics through 100% Areca products. Our company is headquartered at Bangalore, Karnataka (India) and we operate all our business activities as a Sole Proprietorship based venture. We are completely engaged in offering a highly rich assortment of biodegradable and disposable products. Ayesha International being a recognized brand in supplier, manufacturer and exporter in wholesale industry, we offer all types of products such as Areca Leaf Plates, Areca Leaf Bowl, Areca Square Leaf Plate, Arecanut Oval Leaf Plate and Arecanut Round Leaf Plate to our clients. Our company is highly committed to offer a variety of innovative products which are derived from areca leaves. Thus the entire range of products is in good demand. The products are used in various areas like food, parties, confectionery, etc.</p>


                            <h2>Contact us for Ayesha International Leaf Plates </h2>

                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default About;