
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import './EachItem.css'

const EachItem = () => {
    const [productDetails, setProductDetails] = useState({});
    const location = useLocation();

    useEffect(() => {
        const renderProductDetails = async () => {
            const url = `https://dummyjson.com/products/${location.pathname.split("/")[2]}`;
            const response = await fetch(url);
            const Data = await response.json();
            setProductDetails(Data);
        };

        renderProductDetails();
    }, [location]);

  return (
    <div className="product-details-main-container">
            <div className="product-img-container">
                <img src={productDetails.thumbnail} alt="i"  className="imgggg"/>
            </div>
            <div className="product-details-container">
                <p className="category p1">{productDetails.category}</p>
                <p className="brand">{productDetails.brand}</p>
                <p className="title p2">{productDetails.title}</p>
                <p className="des">{productDetails.description}</p>
                <p>
                    <FaStar className="star" /> {productDetails.rating}
                </p>
                <p className="available">Available Stock: {productDetails.stock}</p>
                <p className="price">$ {productDetails.price}</p>
            </div>
        </div>
  )
}

export default EachItem