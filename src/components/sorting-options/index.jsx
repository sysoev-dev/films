import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { changeOptions } from '../../features/filter/filterSlice';
import { selectFilterOptions } from '../../features/filter/selectors';

export function SortingOptions() {
  const value = useSelector(selectFilterOptions);
  const dispatch = useDispatch();

  function handleChange(e) {
    const value = e.target.value;
    dispatch(changeOptions(value));
  }

  return (
    <Box mb={3} sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant='standard' htmlFor='uncontrolled-native'>
          Сортировать по:
        </InputLabel>
        <NativeSelect
          value={value}
          onChange={handleChange}
          inputProps={{
            name: 'sorting-options',
            id: 'uncontrolled-native',
          }}
        >
          <option value='popularity'>Популярности</option>
          <option value='vote_average'>Рейтингу</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
