import React from 'react';
import Card from './card/Card';
import { CartProvider } from 'react-use-cart';

export default function TestCart() {
  return (
    <div>
      <CartProvider>
        <Card />
      </CartProvider>
    </div>
  );
}
