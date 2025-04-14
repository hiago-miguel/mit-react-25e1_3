const AuthService = {
  login: async ({ email, password }) => {
    // Simula chamada a uma API externa como o Strapi
    if (email === "teste@exemplo.com" && password === "123456") {
      const user = { email, token: "fake-jwt-token" };
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } else {
      throw new Error("Credenciais inválidas");
    }
  },

  logout: () => {
    localStorage.removeItem("user");
  },

  getCurrentUser: async () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },
};

export default AuthService;
