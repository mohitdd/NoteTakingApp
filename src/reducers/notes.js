import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  notes: [],
  loading: true,
  error: {},
};

export const notes = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.GET_NOTES:
      return {
        ...state,
        notes: payload,
        loading: false,
      };

    case ActionTypes.NOTES_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ActionTypes.NOTES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
