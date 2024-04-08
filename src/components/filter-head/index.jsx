import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { filterReset } from '../../features/filter/filterSlice';

export function FilterHead() {
  const reduxDispatch = useDispatch();

  function handleClick() {
    reduxDispatch(filterReset());
  }

  return (
    <Box display='flex' alignItems='center' justifyContent='space-between' mb={2}>
      <Typography variant='h6' component='h3' fontWeight='700'>
        Фильмы
      </Typography>
      <IconButton onClick={handleClick}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
}
