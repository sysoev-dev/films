import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { fixedNumbers } from '../../utils/fixed-numbers';
import { Link } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from 'react';
import { changeFavoriteFilm, getFavoriteFilms } from '../../api/films-api';

export function FilmCard({ title, year, rating, imageSrc, idFilm, isFavorite }) {
  const [selected, setSelected] = useState(isFavorite);

  async function handleChangeToggleButton() {
    setSelected(!selected);

    const response = await changeFavoriteFilm(!selected, idFilm);
    if (!response) {
      console.log('ошибка');
      setTimeout(() => {
        setSelected(!selected);
      }, 1000);
    }
  }
  return (
    <Card
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 270,
        width: '100%',
        backgroundColor: '#dfe1ed',
      }}
    >
      <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/films/${idFilm}`}>
        <CardMedia sx={{ height: 400, objectFit: 'contain' }} image={imageSrc} title={`Постер фильма ${title}`} />
      </Link>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography align='left' variant='h6' component='h3'>
            {title}
          </Typography>
          <Typography variant='subtitle2' component='p'>
            Дата релиза: {year}
          </Typography>
          <Typography mt={1} variant='subtitle1' component='p'>
            Рейтинг: {fixedNumbers(rating)}
          </Typography>
        </Box>
        <ToggleButton
          key={idFilm}
          style={{
            alignSelf: 'self-start',
            border: 'none',
            borderRadius: '50%',
          }}
          value={selected}
          selected={selected}
          color='success'
          onChange={handleChangeToggleButton}
        >
          <StarIcon />
        </ToggleButton>
      </CardContent>
    </Card>
  );
}
