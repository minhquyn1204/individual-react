import React from 'react';
import PostFilterForm from './PostFilterForm';

export default function Index() {
  function handleFiltersChange(newFilters) {
    console.log('newFilters', newFilters);
  }
  return (
    <div>
      <PostFilterForm onSubmit={handleFiltersChange} />
    </div>
  );
}
