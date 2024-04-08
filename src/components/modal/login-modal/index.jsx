import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { setToken, setUserId } from '../../../utils/storage';

export function LoginModal() {
  const [inputText, setInputText] = useState('');

  function handleChangeInput(e) {
    const text = e.target.value;
    setInputText(text);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setToken();
    setUserId();
  }

  return (
    <Box component='form' onSubmit={handleSubmitForm}>
      <Typography mb={2} id='modal-modal-title' variant='h5' component='p'>
        Введите токен
      </Typography>
      <TextField
        required
        type='text'
        value={inputText}
        onChange={handleChangeInput}
        fullWidth
        id='user-token'
        label='токен'
        variant='standard'
      />
      <Box textAlign='center' mt={2}>
        <Button type='submit'>Войти</Button>
      </Box>
    </Box>
  );
}
