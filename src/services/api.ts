import axios from 'axios';
import { FormConfig, SubmitFormData } from '../types/types';

const FORM_CONFIG_URL = 'https://65e86fa34bb72f0a9c4f544a.mockapi.io/form-config';
const FORM_SUBMIT_URL = 'https://65e86fa34bb72f0a9c4f544a.mockapi.io/forms';

export const fetchFormConfig = async (): Promise<FormConfig> => {
  const response = await axios.get<FormConfig>(FORM_CONFIG_URL);
  return response.data;
};

export const submitFormData = async (data: SubmitFormData) => {
  const response = await axios.post(FORM_SUBMIT_URL, data);
  return response.data;
};
