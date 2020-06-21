import React from 'react';
import { connect } from 'react-redux';

import CartItem from './CartItem';

function ShoppingCart({ items, total }) {
  return (
    <div className='shopping-card'>
      <h2 className='shopping-card-title'>Shopping Cart</h2>
      <div className='shopping-card-items'>
        {items.map((item) => {
          return <CartItem key={item.id} id={item.id} />;
        })}
      </div>
      <div className='shopping-card-footer '>
        <a className='go-back-link' href='/'>
          Continue Shopping
        </a>
        <p>
          <b className='color-gray'>Subtotal</b>{' '}
          <b className='total-price'>${total.toFixed(2)}</b>
        </p>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    items: state.items,
    total: state.total,
  };
}

export default connect(mapStateToProps)(ShoppingCart);
