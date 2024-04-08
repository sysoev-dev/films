import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { FilterHead } from '../filter-head';
import { SortingOptions } from '../sorting-options';
import { SortingYears } from '../sorting-years';
import { SortingGenres } from '../sorting-genres';
import { PaginationList } from '../pagination';
import { SearchFilm } from '../search-film';

export function Filter() {
  return (
    <Box mr={2} minWidth={300} width={300} elevation={3} component={Paper} p='16px'>
      <FilterHead />
      <SearchFilm />
      <SortingOptions />
      <SortingYears />
      <SortingGenres />
      <PaginationList />
    </Box>
  );
}
