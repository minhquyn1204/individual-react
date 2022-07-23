import React, { useState } from 'react';
import Step from '.';

export const multiStepContext = React.createContext();
export default function StepContext() {
  const [currentStep, setStep] = useState(1);
  const [cartData, setCartData] = useState();
  const [adressData, setAdressData] = useState();
  const [nameShop, setNameShop] = useState();
  const [form, setForm] = useState('');
  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          cartData,
          setCartData,
          form,
          setForm,
          adressData,
          setAdressData,
          nameShop,
          setNameShop,
        }}
      >
        <Step />
      </multiStepContext.Provider>
    </div>
  );
}
