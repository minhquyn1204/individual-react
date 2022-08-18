import React from 'react';
import dynamic from 'next/dynamic';
const ById = dynamic(() => import('../../../components/HomePage/byid'), {
  ssr: false,
});

export default function index() {
  return (
    <div>
      <ById />
    </div>
  );
}
