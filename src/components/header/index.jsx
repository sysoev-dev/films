import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BasicModal } from '../modal';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Box sx={{ backgroundColor: '#2d2c52', pt: 2, pb: 2, mb: 2 }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} maxWidth='xl'>
        <Typography color='#fff' variant='h4' component='h1' fontWeight='700'>
          <Link style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }} to='/'>
            Фильмы
          </Link>
        </Typography>

        <BasicModal />
      </Container>
    </Box>
  );
}
