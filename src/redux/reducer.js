// authReducer.js
import { SET_USER, LOGOUT } from './actions';

const initialState = {
  user: null,
  orders: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:  // Novo caso para o logout
      return {
        ...state,
        user: null,  // Limpar o estado do usuário
      };
    default:
      return state;
  }
};

export default authReducer;
