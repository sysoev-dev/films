export function setToken(token) {
  localStorage.setItem(
    'userToken',
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTY3NDQwZjI5NmFjMDQxNjA5NjhjMTAzYTEwY2I2OCIsInN1YiI6IjY0ZDM4NzQxMDM3MjY0MDBjNTcyZjVkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ks7RBYRXL2OaU9uKBci8pU-s5SGg6yk3M8X806A8apk'
  );
}

export function getToken() {
  return localStorage.getItem('userToken');
}

export function checkToken() {
  return !!getToken();
}

export function setUserId() {
  localStorage.setItem('userId', '20280149');
}

export function getUserId() {
  return localStorage.getItem('userId');
}
