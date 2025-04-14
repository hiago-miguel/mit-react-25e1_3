// src/services/AuthService.js
import users from '../assets/users.json';

const AuthService = {
  authenticate: (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) return user;
    throw new Error("Invalid email or password");
  }
};

export default AuthService;
