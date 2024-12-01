import { Box } from '@mui/material';
import React from 'react';
import { Step as StepType } from '../../types/types';
import FieldRenderer from '../FieldRenderer';

interface StepContentProps {
  step: StepType;
}

const StepContent: React.FC<StepContentProps> = ({ step }) => {
  return (
    <Box>
      {step.formQuestions.map((field) => (
        <FieldRenderer key={field.id} field={field} />
      ))}
    </Box>
  );
};

export default StepContent;
