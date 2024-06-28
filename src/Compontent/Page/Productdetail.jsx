// src/ProductPage.js
import React, { useState } from 'react';


const images = [
    '/images/c16.png', // Main image
    '/images/c15.png', // Thumbnail 1
    '/images/c14.png', // Thumbnail 2
    '/images/c12.png', // Thumbnail 3
    '/images/c11.png', // Thumbnail 4
];


const Productdetail = () => {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="product-page">
            <div className="product-image-container">
                <div className="product-image">
                <div className="zoom-container">
                    <img src={mainImage} alt="Product" />
                    </div>
                </div>
                <div className="thumbnail-gallery">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => setMainImage(image)}
                            className={image === mainImage ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
            <div className="product-details">
              
            </div>
        </div>
    );
};

export default Productdetail;
