import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Field } from '../types/types';
import { mapFieldCodeToInterfaceKey } from '../utils/fieldNameMapper';

interface FieldRendererProps {
  field: Field;
}

const fileUploadFieldCodes = [
  'transportUploadVehiclesCharging',
  'transportUploadFileVehicles',
  'transportUploadVehiclesFuel',
];

const FieldRenderer: React.FC<FieldRendererProps> = ({ field }) => {
  const { control } = useFormContext();

  const fieldName = mapFieldCodeToInterfaceKey(field.code);

  const renderTextField = () => (
    <Controller
      name={fieldName}
      control={control}
      defaultValue={undefined}
      render={({ field: controllerField, fieldState: { error } }) => (
        <TextField
          {...controllerField}
          fullWidth
          label={field.name}
          required={field.isRequired}
          margin="normal"
          type={field.dataType === 2 ? 'number' : 'text'}
          error={!!error}
          helperText={error ? error.message : field.description || ''}
          onChange={(e) => {
            const value = e.target.value;
            controllerField.onChange(
              value === '' ? undefined : field.dataType === 2 ? Number(value) : value
            );
          }}
        />
      )}
    />
  );

  const renderSelectField = () => (
    <Controller
      name={fieldName}
      control={control}
      defaultValue={undefined}
      render={({ field: controllerField, fieldState: { error } }) => (
        <FormControl
          fullWidth
          margin="normal"
          error={!!error}
          required={field.isRequired}
        >
          <InputLabel>{field.name}</InputLabel>
          <Select
            {...controllerField}
            label={field.name}
            onChange={(e) => {
              const value = e.target.value;
              controllerField.onChange(value === '' ? undefined : value);
            }}
          >
            {!field.isRequired && (
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          )}
            {field.answerOptions?.map((option) => (
              <MenuItem key={option.id} value={option.code}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {error ? error.message : field.description || ''}
          </FormHelperText>
        </FormControl>
      )}
    />
  );

  const renderDatePicker = () => (
    <Controller
      name={fieldName}
      control={control}
      defaultValue={undefined}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <DatePicker
          views={['year']}
          label={field.name}
          disableFuture
          value={value !== undefined ? dayjs().year(value as number) : null}
          onChange={(date: Dayjs | null) => {
            const year = date ? date.year() : undefined;
            console.log('year', year);
            onChange(year);
          }}
          slotProps={{
            textField: {
              fullWidth: true,
              margin: 'normal',
              error: !!error,
              required: field.isRequired,
              helperText: error ? error.message : field.description || '',
            },
          }}
        />
      )}
    />
  );

  const renderFileUploadField = () => (
    <Controller
      name={fieldName}
      control={control}
      defaultValue={undefined}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl fullWidth margin="normal" error={!!error}>
          <InputLabel shrink required={field.isRequired}>
            {field.name}
          </InputLabel>
          <Input
            type="file"
            inputProps={{
              accept: field.acceptedFileTypes || '*/*',
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0];
              onChange(file || undefined);
            }}
          />
          {value && value instanceof File && (
            <FormHelperText>Selected file: {value.name}</FormHelperText>
          )}
          <FormHelperText>
            {error ? error.message : field.description || ''}
          </FormHelperText>
        </FormControl>
      )}
    />
  );

  if (field.code === 'year') {
    return renderDatePicker();
  } else if (fileUploadFieldCodes.includes(fieldName)) {
    return renderFileUploadField();
  } else if (field.componentType === 2 || field.answerOptions) {
    return renderSelectField();
  } else {
    return renderTextField();
  }
};

export default FieldRenderer;
