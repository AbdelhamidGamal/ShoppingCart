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
        <a href='#'>Continue Shopping</a>
        <p>
          Subtotal <b className='total-price'>${total}</b>
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
