import { DRAWER_ACTION } from "../constants/ActionTypes";

export interface DrawerState {
  drawer: boolean;
}

interface Action {
  type: string;
  payload: boolean;
}

export const drawerReducer = (
  state: DrawerState = { drawer: false },
  action: Action
) => {
  switch (action.type) {
    case DRAWER_ACTION:
      return {
        drawer: action.payload,
      };

    default:
      return state;
  }
};
