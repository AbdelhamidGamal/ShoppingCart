import React from 'react';
import { connect } from 'react-redux';

function ShoppingCart({ items, total }) {
  return (
    <div>
      ShoppingCart component
      {items.map((item) => (
        <div>{item.name}</div>
      ))}
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
