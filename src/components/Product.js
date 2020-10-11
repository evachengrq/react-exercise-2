import React, { Component } from 'react';
import './Product.css';
import product from '../assets/product_image_placeholder.png'

class Product extends Component {
  render() {
    const {name, price} = this.props;
    return (
      <section className='product'>
        <h4>{name}</h4>
        <img src={product} />
        <section className='price'>
          <p>{price}</p>
          <button>add to cart</button>
        </section>
      </section>
    );
  }
}

export default Product;