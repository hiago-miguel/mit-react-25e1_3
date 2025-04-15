import axios from "axios";

const API_URL = "https://api.npoint.io/be5cbe24691b0db9ea55";

const authenticate = async (email, password) => {
  try {
    const response = await axios.get(API_URL);
    const users = response.data;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    return user || null;
  } catch (error) {
    console.error("Erro ao autenticar:", error);
    return null;
  }
};

export default {
  authenticate,
};
