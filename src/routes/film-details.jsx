import { Header } from '../components/header';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getUrlPoster } from '../utils/get-url-poster';
import { getActorsFilm } from '../api/films-api';
import './film-details.css';

export function FilmDetails() {
  const data = useLoaderData();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getActorsFilm(data.id);
      setActors(response.crew);
    }
    fetchData();
  }, []);
  const actorsList = actors.map((person, index) => <li key={index}>{person.name},</li>);
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' sx={{ display: 'flex' }}>
        <Box mr={5}>
          <img style={{ borderRadius: '10px', maxWidth: '500px' }} src={getUrlPoster(data.poster_path)} alt='altText' />
        </Box>
        <Box>
          <Link to='/'>Вернуться на главную</Link>
          <Typography mt={2} variant='h4' component='h3'>
            {data.title}
          </Typography>
          <Typography mb={2} variant='h7' component='p'>
            {data.tagline}
          </Typography>
          <Typography variant='h6' component='p'>
            Жанр:
          </Typography>
          <ul className='genres-list' style={{}}>
            {data.genres.map((item) => (
              <li className='genres-list__item' key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
          <Typography mt={1} variant='p' component='p'>
            Краткое описание: <br /> {data.overview}
          </Typography>
          <Typography mt={2} variant='h6' component='p'>
            Актеры:
          </Typography>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              maxWidth: '800px',
              overflowY: 'scroll',
              maxHeight: '400px',
              listStyle: 'none',
              gap: '5px',
              margin: 0,
              padding: 0,
            }}
          >
            {actorsList}
          </ul>
        </Box>
      </Container>
    </>
  );
}
