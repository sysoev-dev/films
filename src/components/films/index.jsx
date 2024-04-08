import Box from '@mui/material/Box';
import { FilmCard } from '../film-card';
import { getFilms, getFavoriteFilms, getSortingFilms } from '../../api/films-api';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUrlPoster } from '../../utils/get-url-poster';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilterOptions,
  selectFilterPage,
  selectFilterYears,
  selectFilterGenres,
} from '../../features/filter/selectors';
import store from '../../store';

export function Films() {
  const [films, setFilms] = useState([]);
  const [favoriteIdFilms, setFavoriteIdFilms] = useState([]);
  const filterOptions = useSelector(selectFilterOptions);
  const filterYears = useSelector(selectFilterYears);
  const filterGenres = useSelector(selectFilterGenres);
  const filterPage = useSelector(selectFilterPage);

  useEffect(() => {
    async function fetchData() {
      const filmsData = await getSortingFilms(filterOptions, filterYears, filterGenres, filterPage);
      const favoriteFilmsData = await getFavoriteFilms();
      setFilms(filmsData);
      setFavoriteIdFilms(favoriteFilmsData.results.map(item => item.id));
    }
    fetchData();
  }, [store.getState()]);

  return (
    <Box
      sx={{
        width: 1200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2,
        marginBottom: 2,
      }}
    >
      {films.map(item => (
        <FilmCard
          key={item.id}
          title={item.title}
          year={item.release_date}
          rating={item.vote_average}
          imageSrc={getUrlPoster(item.poster_path)}
          idFilm={item.id}
          isFavorite={favoriteIdFilms.includes(item.id)}
        />
      ))}
    </Box>
  );
}
