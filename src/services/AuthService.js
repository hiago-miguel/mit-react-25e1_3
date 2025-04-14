import users from '../assets/users.json';

const AuthService = {
  authenticate: (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      return user;
    } else {
      throw new Error("Invalid email or password");
    }
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },

  logout: () => {
    localStorage.removeItem("user");
  }
};

export default AuthService;
