import React, { useState } from 'react';
import Header from './Headers';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
