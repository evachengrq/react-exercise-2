import React, { Component } from 'react';
import './Header.css';
import shoppingCart from './shopping_cart.png'

class Header extends Component {
  render() {
    return (
      <header>
          <h1>Store</h1>
          <section>
              <img src={shoppingCart} />
          </section>
      </header>
    );
  }
}

export default Header;