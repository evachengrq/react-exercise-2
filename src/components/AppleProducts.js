import React, { Component } from 'react';
import Product from './Product';
import './AppleProducts.css';

class AppleProducts extends Component {
  state = {
    appleProducts: [
      { id: 1, name: 'iPhone11', price: 5999 },
      { id: 2, name: 'iPhoneXS', price: 5399 },
      { id: 3, name: 'iPhoneSE', price: 3599 },
    ],
  };

  render() {
    return (
      <section>
        <h2 className='iPhone'>iPhone</h2>
        <section className='appleProducts'>
          {this.state.appleProducts.map((item) => (
          <Product key={item.id} name={item.name} price={item.price} />
          ))}
        </section>
      </section>
    );
  }
}

export default AppleProducts;