import React from 'react'
import { Link } from "react-router-dom";
import './Products.css'

const Products = ({details}) => {
    const {images, price, id, category, title }=details
  return (
    <div>
        <Link className="link" id={id} to={`/products/${id}`}>
            <li className="card">
                <div className="img-container">
                    <img src={images[0]} alt="product" className="product-image" />
                </div>
                <div className="card-details-container">
                    <p className="category">{category}</p>
                    <p className="title">{title}</p>
                    <p className="price">$ {price}</p>
                </div>
            </li>
        </Link>
    </div>
  )
}

export default Products