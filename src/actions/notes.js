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

export const createNote = (body) => async (dispatch) => {
  try {
    const response = await axios.post(notesURL, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.statusText === "Created") {
      console.log(response.data);
      dispatch({
        type: ActionTypes.ADD_NOTE,
        payload: response.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
