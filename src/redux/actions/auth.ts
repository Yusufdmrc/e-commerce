import { LOGIN_ACTION, LOGOUT_ACTION } from "../constants/ActionTypes";

// Login işlemi başarılı olduğunda çağrılacak action
export const loginSuccess = (): { type: string } => ({
  type: LOGIN_ACTION,
});

// Logout işlemi başarılı olduğunda çağrılacak action
export const logoutSuccess = (): { type: string } => ({
  type: LOGOUT_ACTION,
});
