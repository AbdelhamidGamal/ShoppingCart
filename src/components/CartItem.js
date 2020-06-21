import React from 'react';
import { connect } from 'react-redux';
import { RemoveItem, IncrementAmount, DecrementAmount } from '../actions/cart';

function CartItem({
  id,
  img,
  name,
  price,
  quantity,
  remove,
  increaseQuan,
  decreaseQuan,
}) {
  return (
    <div className='item-card'>
      <img className='item-thumb' src={img} alt='' />
      <div className='item-card-col'>
        <p className='item-name'>{name}</p>
        <p className='color-gray'>#{id}</p>
      </div>
      <div className='item-card-quantity-col'>
        <button onClick={() => decreaseQuan(id)} className='btn'>
          -
        </button>
        <p className='color-gray item-quantity-current'>{quantity}</p>
        <button onClick={() => increaseQuan(id)} className='btn'>
          +
        </button>
      </div>
      <p className='item-card-col'>
        <b>${price.toFixed(2)} </b>
      </p>
      <div className='item-card-col'>
        <button onClick={() => remove(id)} className='btn color-gray'>
          X
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state, props) {
  const { id, img, name, price, quantity } = state.items.find(
    (item) => item.id === props.id
  );
  return {
    id,
    img,
    name,
    price,
    quantity,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    remove: (id) => dispatch(RemoveItem(id)),
    increaseQuan: (id) => dispatch(IncrementAmount(id)),
    decreaseQuan: (id) => dispatch(DecrementAmount(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
