import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { selectFilterYears } from '../../features/filter/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { changeYears } from '../../features/filter/filterSlice';
import { getCurrentYear } from '../../utils/getCurrentYear';

function valuetext(value) {
  return `${value} year`;
}

export function SortingYears() {
  const value = useSelector(selectFilterYears);
  const dispatch = useDispatch();
  const currentYear = getCurrentYear();

  const handleChange = (_, newValue) => {
    dispatch(changeYears(newValue));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography mb={4} id='input-slider' gutterBottom>
        Год релиза:
      </Typography>
      <Slider
        min={1987}
        max={currentYear}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='on'
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
