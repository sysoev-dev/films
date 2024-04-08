import CssBaseline from '@mui/material/CssBaseline';
import { useLoaderData } from 'react-router-dom';
import { Header } from '../components/header';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { FilmCard } from '../components/film-card';
import Typography from '@mui/material/Typography';
import { getUrlPoster } from '../utils/get-url-poster';
import { Pagination } from '@mui/material';

export function SearchResults() {
  const data = useLoaderData();
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl'>
        <Typography mt={2} mb={2} variant='h5' component='h3'>
          По запросу <span style={{ fontWeight: '700' }}>{data.query}</span> найдено {data.result.total_results}{' '}
          результатов
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {data.result.results.map((item) => (
            <FilmCard
              key={item.id}
              title={item.title}
              rating={item.vote_average}
              imageSrc={getUrlPoster(item.poster_path)}
              idFilm={item.id}
            />
          ))}
        </Box>
        <Pagination />
      </Container>
    </>
  );
}
