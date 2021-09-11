import React from 'react';

import img from './gallery-images/test.jpg'

function Gallery(props) {
    return (
        <div>
            <div class="container gallery-container">

                <h1>Arecanut Leaf Gallery</h1>

                <div class="tz-gallery">

                    <div class="row">
                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/round-plate-12-inch.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />
                                </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/round-plate-10-inch.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/round-plate-8-inch.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/round-plate-7-inch.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/round-plate-6-inch.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/areca-nut-leaf-square-plate-6x6-inch.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/areca-nut-leaf-square-plate-7x7-inch.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/areca-nut-leaf-square-plate-8x8-inch.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/areca-nut-leaf-square-plate-9x9-inch.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/areca-nut-leaf-rectangle-plate-6x10-inch.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/areca-nut-leaf-3-partition-12-inch-plate.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>


                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/areca-nut-leaf-4-partition-12-inch-plate.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/areca-nut-leaf-square-bowl-3x3-5-inch-bowl.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>


                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/areca-nut-leaf-square-bowl-4x4-5-inch-bowl.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>


                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/areca-leaf-round-bowl-6x3-inch-deep-bowl.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>


                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/areca-leaf-round-bowl-4-inch-bowl.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>


                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/har.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/har-1.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/har-2.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>

                        <div class="col-sm-3 col-md-3">
                            <a class="lightbox" href="images/gallery/har-3.jpg">
                                <img src={img} alt="Round Plate 12 Inch" title="Round Plate 12 Inch" />            </a>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
}

export default Gallery;