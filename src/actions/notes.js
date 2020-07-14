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
      dispatch({
        type: ActionTypes.ADD_NOTE,
        payload: response.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteNote = (noteId) => async (dispatch) => {
  try {
    const response = await axios.delete(notesURL, {
      params: {
        userId: "tsameerc@gmail.com",
        noteId: noteId,
      },
    });
    dispatch({
      type: ActionTypes.NOTES_LOADING,
    });
    if (response.statusText === "OK") {
      setTimeout(() => {
        dispatch({
          type: ActionTypes.DELETE_NOTE,
          payload: noteId,
        });
      }, 2000);
    }
  } catch (err) {
    console.log(err);
  }
};
