import React, { createContext, useState } from 'react';
import HomePage from '../components/HomePage';

export const multiStepContext = createContext();
export default function Context() {
  const [table, setTable] = useState([]);

  return (
    <div>
      <multiStepContext.Provider value={{ table, setTable }}>
        <HomePage />
      </multiStepContext.Provider>
    </div>
  );
}
