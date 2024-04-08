import { useRouteError } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Typography mt={10} mb={2} align='center' variant='h3' component='p'>
          Ошибка!
        </Typography>
        <Typography align='center' variant='p' component='p'>
          Статус ошибки: <i>{error.statusText || error.message}</i>
        </Typography>
        <Typography align='center' variant='p' component='p'>
          Детали ошибки: {error.error.message}
        </Typography>
        <Box textAlign={'center'} pt={3}>
          <Link href='/'>Вернуться на главную</Link>
        </Box>
      </Container>
    </>
  );
}
