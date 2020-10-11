import React, { Component } from 'react';
import Product from './Product';
import './HuaweiProducts.css';

class HuaweiProducts extends Component {
  state = {
    huaweiProducts: [
      { id: 1, name: 'HUAWEI P40 Pro+', price: 7999 },
      { id: 2, name: 'HUAWEI Mate 30', price: 5000 },
      { id: 3, name: 'HUAWEI nova 7', price: 4000 },
    ],
  };

  render() {
    return (
      <section>
        <h2 className='huawei'>HUAWEI</h2>
        <section className='huaweiProducts'>
          {this.state.huaweiProducts.map((item) => (
          <Product key={item.id} name={item.name} price={item.price} />
          ))}
        </section>
      </section>
    );
  }
}

export default HuaweiProducts;