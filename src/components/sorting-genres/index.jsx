import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterGenres } from '../../features/filter/selectors';
import { changeGenres } from '../../features/filter/filterSlice';
import { fetchGenresRedux } from '../../features/filter/filterSlice';
import { selectFilterGenresList } from '../../features/filter/selectors';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export function SortingGenres() {
  const value = useSelector(selectFilterGenres);
  const dispatch = useDispatch();
  const genresList = useSelector(selectFilterGenresList);

  useEffect(() => {
    dispatch(fetchGenresRedux());
  }, []);

  function handleChange(_, value) {
    dispatch(changeGenres(value));
  }

  return (
    <Autocomplete
      value={value}
      onChange={handleChange}
      size='small'
      multiple
      id='checkboxes-tags-demo'
      options={genresList}
      disableCloseOnSelect
      getOptionLabel={option => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            size='small'
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      style={{ width: '100%' }}
      renderInput={params => (
        <TextField
          {...params}
          label='Жанры'
          placeholder='Выберите жанр'
          variant='standard'
        />
      )}
    />
  );
}
