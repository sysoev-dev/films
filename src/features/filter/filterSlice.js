import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getGenres, getSortingFilms } from '../../api/films-api';

export const fetchGenresRedux = createAsyncThunk('filter/fetchGenresRedux', async () => {
  const response = await getGenres();
  return response;
});

export const fetchFilmsRedux = createAsyncThunk('filter/fetchFilmsRedux', async state => {
  const response = await getSortingFilms([2000, 2001], [1, 2, 3], 1);
  return response;
});

const initialFiltersState = {
  selectedOptions: 'popularity',
  selectedYears: [2012, 2020],
  genres: [],
  genresList: [],
  page: 1,
  films: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFiltersState,
  reducers: {
    changeOptions: (state, action) => {
      state.selectedOptions = action.payload;
      state.page = initialFiltersState.page;
    },
    changeYears: (state, action) => {
      state.selectedYears = action.payload;
    },
    changeGenres: (state, action) => {
      state.genres = action.payload;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
    filterReset: () => initialFiltersState,
  },
  extraReducers: builder => {
    builder.addCase(fetchGenresRedux.fulfilled, (state, action) => {
      state.genresList = action.payload.genres;
    });
    builder.addCase(fetchFilmsRedux.fulfilled, (state, action) => {
      state.films = action.payload;
    });
  },
});

export const { changeOptions, changeYears, changeGenres, changePage, filterReset } = filterSlice.actions;
export default filterSlice.reducer;
