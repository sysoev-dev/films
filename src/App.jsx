import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getFilmData, getSearchFilms } from './api/films-api';
import ErrorPage from './utils/error-page.jsx';
import { FilmDetails } from './routes/film-details.jsx';
import { SearchResults } from './routes/search-results.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from './components/header';
import { Main } from './components/main';
import './App.css';
import { useEffect } from 'react';
import { getToken } from './utils/storage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'films/:filmId',
    element: <FilmDetails />,
    loader: getFilmData,
    errorElement: <ErrorPage />,
  },
  {
    path: 'search/:query',
    element: <SearchResults />,
    loader: getSearchFilms,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  useEffect(() => {
    const token = getToken();
    // if (token) {
    //   store.dispatch({ type: ACTION_TYPES.ADD_TOKEN, token });
    // }
    // console.log(store.getState());
    return;
  }, []);
  return (
    <>
      <CssBaseline />
      <Header />
      <Main />
    </>
  );
}
