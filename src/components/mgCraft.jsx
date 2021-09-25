import React, { useRef, useEffect } from 'react';
import img1 from './itemsImage/round-plates/round1.jpg'
import img2 from './itemsImage/round-plates/round2.jpg'
import img3 from './itemsImage/round-plates/round3.jpg'
import img4 from './itemsImage/round-plates/round4.jpg'
import bannerImg from './itemsImage/round-plates/areca-nut-leaf-plates-in-bangalore-india.jpg'
import { Link } from 'react-router-dom';

import LeftNav from './leftNav'
function MgCraft(props) {
    const myRef = useRef();

    function scrollToComponent() {
        if (window.location.hash === '#mgcraft') {
            myRef.current.scrollIntoView();
            myRef.current.focus();
        }
    }

    useEffect(() => scrollToComponent(), [])
    return (
        <div>
            <div class="banner">
                <img src={bannerImg} class="img-responsive" alt="Areca Leaf Round Plate in Bangalore" title="Areca Leaf Round Plate in Bangalore" />
            </div>

            <div class="round-plate">
                <div class="container">
                    <div class="row">

                        <div class="col-md-8">
                            {/* <h1>Areca Leaf Round Plate in india India</h1> */}
                        </div>

                        <div class="col-md-4">
                            <ul>
                                {/* <li class="active"><Link to="/"> <i class="fa fa-home"></i> Home</Link></li>
                                    <li>Areca Leaf Round Plates</li> */}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <section class="eco_service">
                <div class="container">
                    <div class="row">
                        <LeftNav />
                        <div class="col-md-9" id="mgcraft" ref={myRef}>
                            <div class="content_box certificate-section">
                                <h2> MG craft</h2>
                                <div className="mrcraft-table">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">MG VARIETY</th>
                                                <th scope="col">GSM</th>
                                                <th scope="col">APPLICATION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td> MG White Poster(Super fine)</td>
                                                <td>19-20</td>
                                                <td>Dip Dyeing</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td> MG White Poster(Super Dlx-NS Maplitho Base)</td>
                                                <td> 40-46</td>
                                                <td>Coating Base</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td> MG White Poster Dlx</td>
                                                <td>18-90</td>
                                                <td>Wrapping (Soaps, Toffees, Beedi, Bread, etc.,)</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td> MG White Calendar Poster Dlx</td>
                                                <td> 27-32</td>
                                                <td>Daily Sheet Date Pads</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td> MG Improved White Calendar Poster</td>
                                                <td>27</td>
                                                <td>Daily Sheet Date Pads</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td> MG White Calendar Postwer(Regular)</td>
                                                <td>27/28</td>
                                                <td>Daily Sheet Date Pads</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">7</th>
                                                <td> MG White Poster(Sweet Box)</td>
                                                <td>25</td>
                                                <td>Sweet Box Inner, Shoe Stuffing</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td> MG Green Match Poster</td>
                                                <td>38</td>
                                                <td>Dozen/Gross Packing For Match Boxes</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">9</th>
                                                <td> MG Coloured Wove Poster</td>
                                                <td>37</td>
                                                <td>Wrapping </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">10</th>
                                                <td> MG Green Leaf Poster</td>
                                                <td>48-52</td>
                                                <td>Paper Green Leaf </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">11</th>
                                                <td>MG Coloured Cover Paper</td>
                                                <td> 90-110</td>
                                                <td>Charts, Book Wrapper </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">12</th>
                                                <td> MG Coloured Board</td>
                                                <td>134-140</td>
                                                <td>Charts, Book Wrapper </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">13</th>
                                                <td>  MG Super Dlx Rib Karft(Reels)</td>
                                                <td>50-70</td>
                                                <td>Note Book Covers, Envelopes, Wrapping </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">14</th>
                                                <td> MG Dlx Rib.Kraft(Yellow Tint)</td>
                                                <td>60-90</td>
                                                <td>Note Book Covers, Envelopes, Wrapping</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">15</th>
                                                <td> MG Dlx Rib Karft- GVG Brown</td>
                                                <td>60-90</td>
                                                <td>Note Book Covers, Envelopes, Wrapping</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">16</th>
                                                <td> MG Rib Kraft(Reels) N.S. Regular</td>
                                                <td> 33-60</td>
                                                <td> Paper Envelopes, Medicine Pouches</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">17</th>
                                                <td> MG Rib Kraft(Pink)</td>
                                                <td> 55</td>
                                                <td> Note Book Covers, Envelopes, Wrapping</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">18</th>
                                                <td> MG Plain Kraft</td>
                                                <td> 33-90</td>
                                                <td> Paper Envelopes, Medicine Pouches</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MgCraft;