// src/ProductPage.js
import React, { useState } from 'react';


const images = [
    '/images/c16.png', // Main image
    '/images/c15.png', // Thumbnail 1
    '/images/c14.png', // Thumbnail 2
    '/images/c12.png', // Thumbnail 3
    '/images/c11.png', // Thumbnail 4
];
const reviews = [
    { id: 1, user: 'John Doe', rating: 5, comment: 'Great product!' },
    { id: 2, user: 'Jane Smith', rating: 4, comment: 'Very useful.' },
    { id: 3, user: 'Sam Wilson', rating: 3, comment: 'Decent quality.' },
];

const specifications = {
    brand: 'Brand Name',
    model: 'Model X',
    weight: '500g',
    dimensions: '10x5x2 inches',
    material: 'Synthetic'
};

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
                <h1 className="product-title">Product Title</h1>
                <p className="product-description">
                    This is a great product that you will love! It has many amazing features and benefits that you will find very useful.
                </p>
                <p className="product-price">$99.99</p>
                <button className="add-to-cart">Add to Cart</button>
                <div className="product-specifications">
                    <h2>Specifications</h2>
                    <ul>
                        {Object.entries(specifications).map(([key, value]) => (
                            <li key={key}><strong>{key}:</strong> {value}</li>
                        ))}
                    </ul>
                </div>

                <div className="product-reviews">
                    <h2>Customer Reviews</h2>
                    {reviews.map(review => (
                        <div key={review.id} className="review">
                            <p><strong>{review.user}</strong> ({review.rating} stars)</p>
                            <p>{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Productdetail;
