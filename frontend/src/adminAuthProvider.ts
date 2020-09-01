import axios from 'axios';

export default {
  login: ({ username, password }: { username: string; password: string }) => {
    console.log('login in auth provider');
    axios
      .post('http://localhost:8080/auth/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem('username', username);
        localStorage.setItem('token', res.data.access_token);
        return Promise.resolve();
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject();
      });
  },
  logout: () => {
    console.log('logout in auth provider');
    localStorage.removeItem('username');
    return Promise.resolve();
  },
  checkError: ({ status }: { status: number }) => {
    console.log('check error in auth provider');
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    console.log('check auth in auth provider');
    return localStorage.getItem('username')
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: () => {
    console.log('get permission in auth provider');
    return Promise.resolve();
  },
};
