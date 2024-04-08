import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function RegisterModal() {
  const [inputText, setInputText] = useState('');

  function handleChangeInput(e) {
    const text = e.target.value;
    setInputText(text);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
  }

  return (
    <Box component='form' onSubmit={handleSubmitForm}>
      <Typography mb={2} id='modal-modal-title' variant='h5' component='p'>
        Запросить токен
      </Typography>
      <TextField
        required
        type='email'
        value={inputText}
        onChange={handleChangeInput}
        fullWidth
        id='user-email'
        label='Ваша почта'
        variant='standard'
      />
      <Box textAlign='center' mt={2}>
        <Button type='submit'>Запросить токен</Button>
      </Box>
    </Box>
  );
}
