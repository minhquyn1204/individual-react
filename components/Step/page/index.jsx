import React, { useContext } from 'react';
import { multiStepContext } from '../stepContext';
import Map from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

export default function Page() {
  const context = useContext(multiStepContext);
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <Map />;
      case 2:
        return <Page3 />;
      case 3:
        return <Page5 />;
      case 4:
        return <Page4 />;
    }
  };
  return <div> {showStep(context.currentStep)}</div>;
}
