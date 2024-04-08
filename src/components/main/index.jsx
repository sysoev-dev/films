import Container from '@mui/material/Container';
import { Filter } from '../filter';
import { Films } from '../films';

export function Main() {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }} maxWidth='xl'>
      <Filter />
      <Films />
    </Container>
  );
}
