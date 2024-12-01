import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Step, StepLabel, Stepper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { fileToBase64 } from '../../helpers/fileToBase64';
import { fetchFormConfig, submitFormData } from '../../services/api';
import { FormConfig, SubmitFormData } from '../../types/types';
import { mapFieldCodeToInterfaceKey } from '../../utils/fieldNameMapper';
import Loader from '../Loader';
import StepContent from './StepContent';
import { submitFormValidationSchema } from './validationSchema';

const MultiStepForm: React.FC = () => {
  const [formConfig, setFormConfig] = useState<FormConfig>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [stepErrors, setStepErrors] = useState<{ [key: number]: boolean }>({});
  const [isLoading, setIsLoading] = useState(true);

  const methods = useForm<SubmitFormData>({
    mode: "onChange",
    resolver: yupResolver(submitFormValidationSchema),
    defaultValues: {},
  });

  const { handleSubmit, trigger, clearErrors } = methods;

  useEffect(() => {
    setIsLoading(true);

    fetchFormConfig()
      .then((data) => setFormConfig(data))
      .catch((error) => console.error("Error fetching form config:", error))
      .finally(() => setIsLoading(false));
  }, []);

  const handleNext = async () => {
    const stepFields = formConfig[activeStep].formQuestions.map((field) =>
      mapFieldCodeToInterfaceKey(field.code)
    ) as (keyof SubmitFormData)[];

    const result = await trigger(stepFields, { shouldFocus: true });

    if (result) {
      setStepErrors({ ...stepErrors, [activeStep]: false });

      if (activeStep < formConfig.length - 1) {
        setActiveStep((prev) => prev + 1);
      } else {
        handleSubmit(onSubmit)();
      }
    } else {
      setStepErrors({ ...stepErrors, [activeStep]: true });
    }
  };

  const handleBack = () => {
    clearErrors();
    setStepErrors({ ...stepErrors, [activeStep]: false });
    setActiveStep((prev) => prev - 1);
  };

  const onSubmit = async (data: SubmitFormData) => {
    setIsLoading(true);
    try {
      const fileFields = [
        "transportUploadVehiclesCharging",
        "transportUploadFileVehicles",
        "transportUploadVehiclesFuel",
      ] as const;

      const dataToSend = { ...data };

      for (const fieldName of fileFields) {
        const file = data[fieldName as keyof SubmitFormData] as
          | File
          | undefined;

        if (file) {
          const base64String = await fileToBase64(file);
          dataToSend[fieldName] = base64String;
        } else {
          dataToSend[fieldName] = undefined;
        }
      }

      await submitFormData(dataToSend);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {formConfig.map((step, index) => (
            <Step key={step.id} completed={activeStep > index}>
              <StepLabel error={stepErrors[index]}>{step.name}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 2, mb: 2 }}>
          <StepContent step={formConfig[activeStep]} />

          <Box sx={{ mt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button variant="contained" onClick={handleNext}>
              {activeStep === formConfig.length - 1 ? "Submit" : "Next"}
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
