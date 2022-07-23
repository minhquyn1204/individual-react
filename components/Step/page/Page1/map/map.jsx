import React from 'react';

export default function Maps({ map }) {
  return (
    <>
      <div>
        <iframe src={map} width='100%' height='450' loading='lazy'></iframe>
      </div>
    </>
  );
}
