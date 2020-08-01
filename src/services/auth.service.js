import axios from 'axios';

const API_URL = 'http://localhost:7700/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email:  user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.authenticationToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      firstName: user.firstName,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
