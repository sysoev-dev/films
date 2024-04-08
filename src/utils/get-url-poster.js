export function getUrlPoster(path) {
  const BASE_IMAGE_PATH = 'https://image.tmdb.org/t/p/original/';
  if (!path) {
    return 'https://www.bworldonline.com/wp-content/uploads/2022/05/cinema-film.jpg';
  }

  return `${BASE_IMAGE_PATH}${path}`;
}
