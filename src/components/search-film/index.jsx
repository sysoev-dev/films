import { useState, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export function SearchFilm() {
  const navigate = useNavigate();
  const [text, setText] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();
    navigate(`search/${text}`);
  }

  function handleChangeInput(e) {
    setText(e.target.value);
  }

  const cachedInputValue = useMemo(() => handleChangeInput, [text]);

  return (
    <Box onSubmit={handleSubmitForm} mb={2} component='form' noValidate autoComplete='off'>
      <TextField
        value={text}
        onChange={handleChangeInput}
        id='search-film'
        label='Название фильма'
        variant='standard'
        fullWidth
      />
    </Box>
  );
}
