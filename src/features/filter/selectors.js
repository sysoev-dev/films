const selectFilterOptions = state => state.filter.selectedOptions;
const selectFilterPage = state => state.filter.page;
const selectFilterYears = state => state.filter.selectedYears;
const selectFilterGenres = state => state.filter.genres;
const selectFilterGenresList = state => state.filter.genresList;
const selectFilterFilms = state => state.filter.films;

export {
  selectFilterOptions,
  selectFilterPage,
  selectFilterYears,
  selectFilterGenres,
  selectFilterGenresList,
  selectFilterFilms,
};
