import { Container, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" sx={{ mt: 5 }}>
          Green0m-form
        </Typography>
        <MultiStepForm />
      </Container>
    </LocalizationProvider>
  );
}

export default App;
