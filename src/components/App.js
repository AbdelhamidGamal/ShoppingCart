import React from 'react';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
      }}
    >
      <ShoppingCart />
    </div>
  );
}

export default App;
