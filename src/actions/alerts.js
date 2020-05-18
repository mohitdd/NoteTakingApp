import * as ActionTypes from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = v4();

  dispatch({
    type: ActionTypes.SET_ALERT,
    payload: {
      id,
      msg,
      alertType,
    },
  });
};
