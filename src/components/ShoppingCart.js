import React from 'react';
import { connect } from 'react-redux';

import { RemoveItem, IncrementAmount, DecrementAmount } from '../actions/cart';

function ShoppingCart({ items, total, remove, increaseQuan, decreaseQuan }) {
  return (
    <div className='shopping-card'>
      <h2 className='shopping-card-title'>Shopping Cart</h2>
      <div className='shopping-card-items'>
        {items.map((item) => {
          return (
            <div key={item.id} className='item-card'>
              <img className='item-thumb' src={item.img} alt='' />
              <div className='item-card-col'>
                <p className='item-name'>{item.name}</p>
                <p className='color-gray'>#{item.id}</p>
              </div>
              <div className='item-card-col item-card-quantity-col'>
                <button onClick={() => decreaseQuan(item.id)} className='btn'>
                  -
                </button>
                <p className='color-gray item-quantity-current'>
                  {item.quantity}
                </p>
                <button onClick={() => increaseQuan(item.id)} className='btn'>
                  +
                </button>
              </div>
              <p className='item-card-col'>
                <b>${item.price} </b>
              </p>
              <p
                onClick={() => remove(item.id)}
                className='item-card-col color-gray'
              >
                X
              </p>
            </div>
          );
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

function mapDispatchToProps(dispatch) {
  return {
    remove: (id) => dispatch(RemoveItem(id)),
    increaseQuan: (id) => dispatch(IncrementAmount(id)),
    decreaseQuan: (id) => dispatch(DecrementAmount(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
