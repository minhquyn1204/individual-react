import { Step, StepLabel, Stepper } from '@mui/material';
import React, { useContext } from 'react';
import { multiStepContext } from '../../stepContext';
import styles from './mainstep.module.scss';

export default function MainStep() {
  const context = useContext(multiStepContext);
  return (
    <div className={styles.MainStep}>
      <Stepper
        activeStep={context.currentStep - 1}
        sx={{ width: '100%' }}
        orientation='horizontal'
      >
        <Step>
          <StepLabel sx={{ display: 'unset' }}>Địa điểm</StepLabel>
        </Step>
        <Step>
          <StepLabel sx={{ display: 'unset' }}>Dịch vụ</StepLabel>
        </Step>
        <Step>
          <StepLabel sx={{ display: 'unset' }}>Thông tin</StepLabel>
        </Step>
        <Step>
          <StepLabel sx={{ display: 'unset' }}>Xác nhận</StepLabel>
        </Step>
      </Stepper>
    </div>
  );
}
