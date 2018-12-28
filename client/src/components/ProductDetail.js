import React from 'react';
import Products from './Products'
import '../styles/productDetail.css';

const ProductDetail = (props) => {
    return (
        <div className="product">
          <img src={props.thumbnailURL} alt={props.name} />
          <p id="product-name">{props.name}</p>
          <p id="product-info">Merchant: {props.merchantName}</p>
          <p id="product-info">Price(USD): {props.priceAsString}</p>
          <a href={props.url} id="product-info">{props.url}</a>
        </div>
    )
}

export default ProductDetail;
