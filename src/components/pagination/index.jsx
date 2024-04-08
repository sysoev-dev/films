import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../../features/filter/filterSlice';
import { selectFilterPage } from '../../features/filter/selectors';

export function PaginationList() {
  const page = useSelector(selectFilterPage);
  const dispatch = useDispatch();

  function handleChange(e, value) {
    dispatch(changePage(value));
  }

  return (
    <Stack mt={5} spacing={2}>
      <Pagination page={page} count={5} onChange={handleChange} />
    </Stack>
  );
}
