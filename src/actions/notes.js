import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { notesURL } from "../configurations/BaseURL";

export const fetchNotes = async (dispatch) => {
  dispatch({
    type: ActionTypes.NOTES_LOADING,
  });

  try {
    const notes = await axios.get(notesURL, {
      params: {
        userId: "tsameerc@gmail.com",
      },
    });

    dispatch({
      type: ActionTypes.GET_NOTES,
      payload: notes.data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.NOTES_FAILED,
      payload: { msg: err.response.message || err.response.statusText },
    });
  }
};
