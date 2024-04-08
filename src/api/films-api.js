import { getUserId, getToken } from '../utils/storage';

const URL = 'https://api.themoviedb.org/3';
const USER = {
  ID: getUserId(),
  TOKEN: getToken(),
};

const API = {
  LINKS: {
    MOVIE: '/movie/',
    GENRE: '/genre/movie/list',
    GET_FAVOTIRE: `/account/${USER.ID}/favorite/movies`,
    SET_FAVORITE: `/account/${USER.ID}/favorite`,
    SEARCH: '/search/movie?query=',
    ACTORS: '/credits',
    DISCOVER: '/discover/movie',
  },
  LANGUAGE: {
    RU: '?language=ru-RU',
  },
  PAGE: '&page=',
  METHODS: {
    GET: 'GET',
    POST: 'POST',
  },
  HEADERS: {
    ACCEPT: 'application/json',
    TOKEN: `Bearer ${USER.TOKEN}`,
    CONTENT_TYPE: 'application/json',
  },
};

export async function getSortingFilms(option, years, genres, page) {
  const [startYear, endYear] = years;
  const startYearStr = `${startYear}-01-01`;
  const endYearStr = `${endYear}-12-31`;
  const genresStr = genres.map(item => item.id).join(',');

  const url = `${URL}${API.LINKS.DISCOVER}?include_adult=false&include_video=false&language=ru-RU${API.PAGE}${page}&primary_release_date.gte=${startYearStr}&primary_release_date.lte=${endYearStr}&sort_by=${option}.desc&with_genres=${genresStr}&vote_count.gte=300`;

  try {
    const response = await fetch(url, {
      method: API.METHODS.GET,
      headers: {
        accept: API.HEADERS.ACCEPT,
        Authorization: API.HEADERS.TOKEN,
      },
    });
    if (response.ok) {
      const result = await response.json();
      return result.results;
    } else {
      console.log(`Ошибка HTTP ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getFilms(sortType, page) {
  const url = `${URL}${API.LINKS.MOVIE}${sortType}${API.LANGUAGE.RU}${API.PAGE}${page}`;
  try {
    const response = await fetch(url, {
      method: API.METHODS.GET,
      headers: {
        accept: API.HEADERS.ACCEPT,
        Authorization: API.HEADERS.TOKEN,
      },
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.log(`Ошибка HTTP ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getActorsFilm(id) {
  const url = `${URL}${API.LINKS.MOVIE}${id}${API.LINKS.ACTORS}${API.LANGUAGE.RU}`;
  try {
    const response = await fetch(url, {
      method: API.METHODS.GET,
      headers: {
        accept: API.HEADERS.ACCEPT,
        Authorization: API.HEADERS.TOKEN,
      },
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.log(`Ошибка HTTP ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getFilmData(e) {
  const filmId = e.params.filmId;
  const url = `${URL}${API.LINKS.MOVIE}${filmId}${API.LANGUAGE.RU}`;
  try {
    const response = await fetch(url, {
      method: API.METHODS.GET,
      headers: {
        accept: API.HEADERS.ACCEPT,
        Authorization: API.HEADERS.TOKEN,
      },
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.log(`Ошибка HTTP ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getGenres() {
  const url = `${URL}${API.LINKS.GENRE}${API.LANGUAGE.RU}`;
  try {
    const response = await fetch(url, {
      method: API.METHODS.GET,
      headers: {
        accept: API.HEADERS.ACCEPT,
        Authorization: API.HEADERS.TOKEN,
      },
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.log(`Ошибка HTTP ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getFavoriteFilms() {
  const url = `${URL}${API.LINKS.GET_FAVOTIRE}`;
  try {
    const response = await fetch(url, {
      method: API.METHODS.GET,
      headers: {
        accept: API.HEADERS.ACCEPT,
        Authorization: API.HEADERS.TOKEN,
      },
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.log(`Ошибка HTTP ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function changeFavoriteFilm(action, id) {
  const url = `${URL}${API.LINKS.SET_FAVORITE}`;
  try {
    const response = await fetch(url, {
      method: API.METHODS.POST,
      headers: {
        accept: API.HEADERS.ACCEPT,
        'content-type': API.HEADERS.CONTENT_TYPE,
        Authorization: API.HEADERS.TOKEN,
      },
      body: JSON.stringify({
        media_type: 'movie',
        media_id: id,
        favorite: action,
      }),
    });
    if (response.ok) {
      const result = await response.json();
      return result.status_code;
    } else {
      console.log(`Ошибка HTTP ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getSearchFilms(params) {
  const query = params.params.query;
  const url = `${URL}${API.LINKS.SEARCH}${query}&language=ru-RU&page=1`;
  try {
    const response = await fetch(url, {
      method: API.METHODS.GET,
      headers: {
        accept: API.HEADERS.ACCEPT,
        Authorization: API.HEADERS.TOKEN,
      },
    });
    if (response.ok) {
      const result = await response.json();
      return {
        query,
        result,
      };
    } else {
      console.log(`Ошибка HTTP ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}
