import { LOGIN_ACTION, LOGOUT_ACTION } from "../constants/ActionTypes";

// Bu reducer giriş durumunu (loggedIn) saklar
interface AuthState {
  loggedIn: boolean;
}

const initialState: AuthState = {
  loggedIn: false,
};

const authReducer = (state: AuthState = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        loggedIn: true,
      };
    case LOGOUT_ACTION:
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
